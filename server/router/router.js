import express from "express"
import { addUser,addPost } from "../controller/controller.js";

const router=express.Router();

router.post("/addUser",addUser);

router.post("/addPost",addPost);

export default router