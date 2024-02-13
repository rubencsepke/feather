const bcrypt = require('bcrypt');
const Model = require('../model/user.model');
const {createToken} = require("../utils/token-manager");
require('dotenv').config();

module.exports.auth = async (req, res) => {
    const { email, password } = req.body;
    const user = await Model.findOne({ email });
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    
    res.clearCookie("auth_token", {httpOnly: true, domain: "localhost", signed: true, path: "/"});
    
    const token = createToken(user._id.toString(), user.email, "7d");
    res.cookie("auth_token", token, {path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
    
    res.status(200).json({message: "OK", username: user.username, email: user.email});
}