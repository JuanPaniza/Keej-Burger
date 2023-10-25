import Menu from "../models/MenuModels.js";
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

const deleteSaucer = async (req, res) => {
  try {
    const saucerId = req.params.id; // Obtener el ID del platillo desde los parámetros de la URL

    const deletedSaucer = await Menu.findByIdAndDelete(saucerId); // Buscar y eliminar el platillo por su ID

    if (!deletedSaucer) {
      // Si el platillo no se encontró, devuelve un error 404
      return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    // Si se eliminó con éxito, devuelve una respuesta exitosa
    res.status(200).json({ message: 'Platillo eliminado con éxito' });
  } catch (error) {
    // Si ocurre un error durante la eliminación, devuelve un error 500
    res.status(500).json({ error: 'Error al eliminar el platillo' });
  }
};



const putImage = async (req, res) => {
    try {
      const saucerId = req.params.id; // Obtener el ID del platillo desde los parámetros de la URL
      const newData = req.body; // Datos actualizados del platillo
  
      const updatedSaucer = await Menu.findByIdAndUpdate(saucerId, newData, { new: true });
  
      if (!updatedSaucer) {
        // Si el platillo no se encontró, devuelve un error 404
        return res.status(404).json({ error: 'Platillo no encontrado' });
      }
  
      // Si se actualizó con éxito, devuelve el platillo actualizado
      res.status(200).json(updatedSaucer);
    } catch (error) {
      // Si ocurre un error durante la actualización, devuelve un error 500
      res.status(500).json({ error: 'Error al editar el platillo' });
    }
  };


const   getMenusProfile = async (req, res) => {
  
  try {
    const menus= await Menu.find();
    if (menus) {
      return res
        .status(200)
        .json(menus);
    }

  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }

};


export {
    hostImage,
    getMenus,
    deleteSaucer,
    putImage,
    getMenusProfile
};
