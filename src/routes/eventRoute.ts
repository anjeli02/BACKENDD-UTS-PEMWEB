import Express from "express";
// Tambahkan .js di akhir path
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from "../controllers/eventController.js";

const router = Express.Router();

router.get("/", getEvents); 
router.post("/", createEvent); 
router.get("/:id", getEventById); 
router.put("/:id", updateEvent); 
router.delete("/:id", deleteEvent); 

export default router;