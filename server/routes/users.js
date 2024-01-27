const express = require('express');
const {saveUser, getUser} = require("../controller/user.controller");
const router = express.Router();

router.get('/user', getUser)
router.post('/user', saveUser)

module.exports = router;
