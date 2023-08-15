import {User} from "../schema/UserSchema.js"
import {Post} from "../schema/PostSchema.js"

export const addUser=async(req,res)=>{
    try{
        await User.findOne({sub:req.body.sub}).then((found)=>{
            if(found){
                return res.status(200).json({msg:"user already exists"})
            }
            const newUser=new User(req.body);
            newUser.save();
            return res.status(200).json({msg:"new user added"})
        })
    }catch(error){
        return res.status(500).json({msg:error.message})
    }
}

export const addPost=async(req,res)=>{
    try{
        const newPost=new Post(req.body);
        newPost.save();
        return res.status(200).json({msg:"Post added to account successfully!"})
    }catch(e){
        return res.status(200).json({msg:"Error occured  while adding post"})
    }
}