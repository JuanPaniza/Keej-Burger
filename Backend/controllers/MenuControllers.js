import Menu from "../models/MenuModels.js";
import generateId from "../helpers/generateId.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_PASS
  });

const hostImage = async (req, res) => {
  const menu = new Menu(req.body);
  const { image } = req.body;

  try {
    const result = await cloudinary.uploader.upload(image);
    const imageUrl = result.secure_url; 
    console.log(menu)

    menu.image = imageUrl;
    console.log(menu)
    await menu.save();
    res.json({
     msg: "Patillo Creado Correctamente.",
    });
  } catch (error) {}
};

const getMenus = async (req, res) => {

  try {
    const menus = await Menu.find();
    if (menus) {
      return res
        .status(200)
        .json(menus);
    }

  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

const putImage = async (req, res) => {
 
  try {
  } catch (error) {}
};
const confirm = async (req, res) => {
  
  try {
    
  } catch (error) {
    console.log(error)
  }
};
const   deleteImage = async (req, res) => {
  

  try {

  } catch (error) {
  }

};


export {
    hostImage,
    getMenus,
    putImage,
    deleteImage,
};
