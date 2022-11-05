import express from "express"
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//  export default router



// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("availability/:id",  updateRoomAvailability);
// DELETE

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);



// get

router.get("/:id", getRoom);



// GETALL

router.get("/", getallRoom);

export default router













// import mongoose from "mongoose";
// const RoomSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     maxPeople: {
//       type: Number,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
//   },
//   { timestamps: true }
// );

// [
//     {number:101,unavailabledates:[]}
//     {number:102,unavailabledates:[]}
//     {number:103,unavailabledates:[]}
//     {number:104,unavailabledates:[]}
//     {number:105,unavailabledates:[]}
// ]

// export default mongoose.model("Room", RoomSchema);

