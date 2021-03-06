const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    videoID: String,
    path: String,
}, {
    timestamps: true,
})
module.exports = mongoose.model('Course', Course)