const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    name : String,
    location : String,
    likes : Number,
    description : String,
    PostImage : String,
    date : String,
    postId : String
})

const postModel = new mongoose.model("post", postSchema)

module.exports = postModel