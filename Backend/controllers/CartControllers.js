import Cart from "../models/CartModels.js";

const sendOrder = async (req, res) => {

    try {
    const {products, customer, table }  = req.body
  

    const cart = new Cart({products ,customer ,table});
    await cart.save();
    res.json({
      msg: "Pedido creado",
    });
  } catch (error) {
    res.json({
      msg: "error al crear el pedido",
    });
  }
};
const getOrder = async (req, res) => {
  
  try {
    const cart = await Cart.find();
    if (cart) {
      return res
        .status(200)
        .json(cart);
    }

  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};
const deleteOrder = async (req, res) => {
  
  try {
    const ordenId = req.params.id; 

    const deletedOrden = await Cart.findByIdAndDelete(ordenId); 

    if (!deletedOrden) {
     
      return res.status(404).json({ error: 'Platillo no encontrado' });
    }
    res.status(200).json({ message: 'Platillo eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el platillo' });
  }
};
export { sendOrder, getOrder, deleteOrder  };



