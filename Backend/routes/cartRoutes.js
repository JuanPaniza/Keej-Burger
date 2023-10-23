import express from "express";
import { sendOrder, getOrder, deleteOrder } from "../controllers/CartControllers.js";


const router = express.Router();


router.post("/sendOrder", sendOrder);
router.get("/getOrder", getOrder);
router.delete("/deleteOrder/:id", deleteOrder)




export default router;