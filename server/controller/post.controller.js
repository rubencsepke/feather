const Model = require('../model/post.model');
module.exports.getPost = async (req, res) => {
    try {
        const data = await Model.find()
            .populate("post_author", "-password")
            .sort({"date": -1});
        res.json(data);
    } catch (error) {
        res.status(500).json({post: `getPost error: ${error.post}`})
    }
}

module.exports.savePost = async (req, res) => {
    const { content, post_author, likes, date } = req.body;
    const data = new Model({
        content,
        post_author: post_author.username,
        likes,
        date
    })
    try {
        const postedData = await data.save();
        res.status(200).json(postedData);
    } catch (error) {
        res.status(400).json({post: `savePost error: ${error.post}`})
    }
}