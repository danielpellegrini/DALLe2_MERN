import mongoose from "mongoose";

// create the schema
const Post = new mongoose.Schema({
    name: { type: String, required: true},
    prompt: { type: String, required: true},
    photo: { type: String, required: true}
});

// create model out of the schema (name of the model, schema already created)
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;