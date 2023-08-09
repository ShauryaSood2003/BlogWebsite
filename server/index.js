import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./router/router.js";

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",router);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})