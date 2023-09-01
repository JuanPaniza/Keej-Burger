import express from "express";
import {
    SingUp,
    authenticate,
    confirm,
    forgetPassword,
    checkToken,
    newPassword,
    profile,
}from "../controllers/UsersControllers.js";




const router = express.Router();

// Autenticación, Registro y Confirmación de Usuarios

router.post("/", SingUp);
router.post("/login", authenticate);
router.get("/confirm/:token", confirm);    // hacemos  routing dinamico ej--> :token  :id :etc...
router.post("/forget-password", forgetPassword);
router.route("/forget-password/:token").get(checkToken).post(newPassword);
router.get("/profile", profile);


export default router;