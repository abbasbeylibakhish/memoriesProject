import mongoose from 'mongoose';
import count from 'count'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // count: {
    //     type: Number,
    //     default: 0,
    // },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


var PostMessage = mongoose.model('PostMessage', postSchema, "postMessage");

export default PostMessage;