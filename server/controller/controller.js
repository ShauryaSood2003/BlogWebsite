export const getMessager=(req,res)=>{
    try{
        console.log(req.body);
        return res.status(200).json("hi")
    }catch(error){
        return res.status(500).json({msg:error.message})
    }
}