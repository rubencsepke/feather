const express = require('express');
const {saveUser, getUser} = require("../controller/user.controller");
const {signupValidator, validate} = require('../utils/validators.js');
const router = express.Router();

router.get('/user', getUser)
router.post('/user', validate(signupValidator), saveUser)

module.exports = router;
