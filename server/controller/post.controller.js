const Model = require('../model/post.model');
module.exports.getPost = async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({post: `getPost error: ${error.post}`})
    }
}

module.exports.savePost = async (req, res) => {
    const data = new Model({
        content: req.body.content,
        post_author: req.body.post_author
    })
    try {
        const postedData = await data.save();
        res.status(200).json(postedData);
    } catch (error) {
        res.status(400).json({post: `savePost error: ${error.post}`})
    }
}