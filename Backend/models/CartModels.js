import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  image: {
    type: String,
    required: true,
    trim: true, 
  },
  subtotal: {
    type: Number,
    required: true,
    trim: true, 
  },
  amount: {
    type: Number,
    required: true,
    trim: true, 
  },
  price: {
    type: Number,
    required: true,
    trim: true, 
  },
  additional: [
    String
  ],
       
});

// Definimos el esquema para el arreglo de objetos
const cartSchema = new mongoose.Schema({
  products: [productSchema], // Esto define un arreglo de objetos con el esquema "productoSchema"
  customer: {
    type: String,
    required: true,
    trim: true, 
  },
  table: {
    type: String,
    required: true,
    trim: true, 
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});
 


const Cart = mongoose.model("Cart", cartSchema);
export default Cart;

