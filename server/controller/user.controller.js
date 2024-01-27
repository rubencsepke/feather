const Model = require('../model/user.model');

module.exports.getUser = async (req, res) => {
    try {
        const data = await Model.find({username: req.body.username});
        res.json(data);
    } catch (error) {
        res.status(500).json({post: `getPost error: ${error.post}`})
    }
}

module.exports.saveUser = async (req, res) => {
    const data = new Model({
        username: req.body.username,
        password: req.body.password,
    })
    try {
        const postedUser = await data.save();
        res.status(200).json(postedUser);
    } catch (error) {
        res.status(400).json({post: `saveUser error: ${error.post}`})
    }
}