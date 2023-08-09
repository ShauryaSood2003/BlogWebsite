import express from "express"
import { getMessager } from "../controller/controller.js";

const router=express.Router();

router.post("/getMessager",getMessager)

export default router