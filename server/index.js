import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config();

import router from "./router/router.js";

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router);

const URL=process.env.MONGOOSE_URL;
const Connection=async()=>{
    try{
        await mongoose.connect(URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log("connected to db successfully");
    }catch(error){
        console.log("error connection to the data base :"+error.message);
    }

}

Connection()


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})