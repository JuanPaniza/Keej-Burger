import express from "express";
import { hostImage, putImage, deleteImage, getMenus } from "../controllers/MenuControllers.js";


const router = express.Router();

// Autenticación, Registro y Confirmación de Usuarios
router.post("/hostImage", hostImage);
router.get("/getMenus", getMenus);
router.post("/putImage", putImage);
router.post("/deleteImage", deleteImage);    // hacemos  routing dinamico ej--> :token  :id :etc...



export default router;