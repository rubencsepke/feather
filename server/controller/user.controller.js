const bcrypt = require('bcrypt');
const Model = require('../model/user.model');

module.exports.getUser = async (req, res) => {
    const { username } = req.body;
    try {
        const data = await Model.find({username});
        res.json(data);
    } catch (error) {
        res.status(500).json({post: `getPost error: ${error.post}`})
    }
}

module.exports.saveUser = async (req, res) => {
    const {username, email, password} = req.body;
    const data = new Model({
        username,
        email,
        password,
    })
    try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const postedUser = await data.save();
        res.status(200).json(postedUser);
    } catch (error) {
        res.status(400).json({post: `saveUser error: ${error.post}`})
    }
}