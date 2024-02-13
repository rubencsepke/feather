require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports.createToken = (id, email, expiresIn) => {
    const payload = {id, email};
    return jwt.sign(payload, process.env.PRIVATE_KEY, {
        expiresIn,
    });
}