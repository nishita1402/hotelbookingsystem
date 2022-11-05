import express from "express"
import { register } from "../controllers/authe.js";
import { login } from "../controllers/authe.js";

const router = express.Router();



router.post("/register",register)
router.post("/login",login)

export default router