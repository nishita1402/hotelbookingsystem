import express from "express"
import { deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";
// import { verifyToken } from "../utils/verifyToken.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
// import { createError } from "../utils/error.js";

const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user you are logged in")
// })



// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user you are logged in and you can delete all accounts")
// })




// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin you are logged in and you can delete all account")
// })



// UPDATE
router.put("/:id", verifyUser, updateUser);


// DELETE

router.delete("/:id", verifyUser, deleteUser);



// get

router.get("/:id", verifyUser, getUser);



// GETALL

router.get("/", verifyAdmin, getallUser);




export default router


