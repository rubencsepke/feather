const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    post_author: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Posts', dataSchema)