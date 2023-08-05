import User from "../models/UsersModels.js";
import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";
const SingUp = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  console.log(email)
  const existsUser = await User.findOne({ email }); // esto busca si ya existe el email

  if (existsUser) {
    return res
      .status(400)
      .json({ msg: "Este correo electrónico ya está conectado a una cuenta." });
  }

  try {
    const user = new User(req.body);
    user.token = generateId();
    await user.save();

    res.json({
      msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta.",
    });
  } catch (error) {}
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "Este correo electrónico no está conectado a una cuenta." });
  }

  if (!user.confirm) {
    return res
      .status(403)
      .json({ msg: "Esta cuenta no ha sido confirmada." });
  }

  // Confirmar si el password es correcto
  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id) 
    });
  } else {
    return res
      .status(403)
      .json({ msg: "El password es incorrecto." });
  }
  try {
  } catch (error) {}
};
const confirm = async (req, res) => {
  const{token}= req.params  // tenemos el valor del routing dinamico :token 
  const userConfirm = await User.findOne({ token })
  if(!userConfirm){
    return res
    .status(403)
    .json({ msg: "Token no válido." });
  }
  try {
    userConfirm.confirm = true;
    userConfirm.token = "";
    await userConfirm.save();
    res.json({ msg: "Usuario Confirmado Correctamente" });
    
  } catch (error) {
    console.log(error)
  }
};
const forgotPassword = async (req, res) => {};
const checkToken = async (req, res) => {};
const newPassword = async (req, res) => {};
const profile = async (req, res) => {};

export {
  SingUp,
  authenticate,
  confirm,
  forgotPassword,
  checkToken,
  newPassword,
  profile,
};
