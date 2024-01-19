const express = require('express');
const router = express.Router();

router.get('/user', async (req, res, next) => {
  let collection = await db.collection("users");
  let result = await collection.find({name: req.body.username});
  res.send(result).status(200);
})

router.post('/user', (req, res, next) => {
  const { username, email, password } = req.body;
})

module.exports = router;
