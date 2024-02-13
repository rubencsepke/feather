const express = require('express');
const router = express.Router();
const { auth } = require("../controller/login.controller");
const {validate, loginValidator} = require("../utils/validators");

router.post('/login', validate(loginValidator), auth);

module.exports = router;
