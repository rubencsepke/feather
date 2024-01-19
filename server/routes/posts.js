const express = require('express');
const router = express.Router();
const Model = require('../model/post.model');

router.get('/posts', async (req, res, next) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

module.exports = router;
