import express from "express"
import { addUser,addPost,getAllPost,getUserPost } from "../controller/controller.js";

const router=express.Router();

router.post("/addUser",addUser);

router.post("/addPost",addPost);
router.get("/getAllPost",getAllPost);
router.get("/getUserPost/:id",getUserPost);

export default router