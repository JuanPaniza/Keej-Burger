import mongoose from "mongoose";


const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // -- recorta los espacios sobrante del inicio y del final
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true, //- para crear 2 columnas una de creado otra de actualizado
  }
);

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
