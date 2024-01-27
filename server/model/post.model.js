const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    post_author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    likes: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Posts', dataSchema)