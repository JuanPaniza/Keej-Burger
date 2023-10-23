import express from "express";
import { hostImage, putImage, getMenusProfile, getMenus, deleteSaucer } from "../controllers/MenuControllers.js";
import checkAuth from "../middleware/checkAuth.js";


const router = express.Router();

// Autenticación, Registro y Confirmación de Usuarios
router.post("/hostImage", hostImage);
router.get("/getMenus", getMenus);
router.get("/getMenusProfile",checkAuth, getMenusProfile);
router.put("/putImage:id", putImage);
router.delete("/deleteMenu/:id", deleteSaucer);
   // hacemos  routing dinamico ej--> :token  :id :etc...



export default router;