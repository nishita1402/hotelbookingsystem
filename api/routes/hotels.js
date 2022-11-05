import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getallHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js"




const router = express.Router();


// CREATE
router.post("/", verifyAdmin, createHotel);

//  export default router



// UPDATE
router.put("/:id", verifyAdmin, updateHotel);


// DELETE

router.delete("/:id", verifyAdmin, deleteHotel);



// get

router.get("/find/:id", getHotel);



// GETALL

router.get("/", getallHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



// DELETE
// router.delete("/:id", async (req, res)=>{
    
//     try{
//         const hotelss = await Hotel.findById(req.params.id)
//         res.status(200).json(hotelss)
//     }catch(err){
//         res.status(500).json(err)
//     }
// });











// import express from "express";
// import Hotel from "../models/Hotel.js";

// const router = express.Router();

// //CREATE
// router.post("/", async (req, res)=>{
    
//     const newHotel = new Hotel(req.body)
    
//     try{
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })
// //UPDATE
// //DELETE
// //GET
// //GET ALL

export default router