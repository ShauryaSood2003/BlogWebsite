import express from "express"
import { addUser } from "../controller/controller.js";

const router=express.Router();

router.post("/addUser",addUser)

export default router