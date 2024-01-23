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

router.post('/posts', async (req, res, next) => {
  const data = new Model({
    content: req.body.content,
    post_author: req.body.post_author
  })
  try {
    const postedData = await data.save();
    res.status(200).json(postedData);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})


module.exports = router;
