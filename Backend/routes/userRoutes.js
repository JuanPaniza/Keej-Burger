import express from "express";
import {
    SingUp,
    authenticate,
    confirm,
    forgotPassword,
    checkToken,
    newPassword,
    profile,
}from "../controllers/UsersControllers.js";


const router = express.Router();

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", SingUp);
router.post("/login", authenticate);
router.get("/confirm/:token", confirm);    // hacemos  routing dinamico ej--> :token  :id :etc...
router.post("/forgot-password", forgotPassword);
router.route("/forgot-password/:token").get(checkToken).post(newPassword);
router.get("/profile", profile);


export default router;