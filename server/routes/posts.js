const express = require('express');
const router = express.Router();
const { getPost, savePost } = require("../controller/post.controller");

router.get('/posts', getPost);
router.post('/posts', savePost);

module.exports = router;
