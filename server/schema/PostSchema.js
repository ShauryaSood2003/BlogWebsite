import mongoose, { mongo } from "mongoose"

const PostSchema=new mongoose.Schema({
    sub:{
        type:String,
        require:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    }
})

export const Post=new mongoose.model("post",PostSchema);