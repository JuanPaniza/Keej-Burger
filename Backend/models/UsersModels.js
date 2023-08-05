import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // -- recorta los espacios sobrante del inicio y del final
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, //-- solo un correo
    },
    token: {
      type: String,
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //- para crear 2 columnas una de creado otra de actualizado
  }
);

usersSchema.pre("save", async function (next) {
  //  nos asegurtamos que si no se ha modificado el password entonces no se hashee nuevamente (isModified) es una funcion de mongoose
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); // salt es una cadena aleatoria que se agrega a la contraseña antes de encriptarla.
  this.password = await bcrypt.hash(this.password, salt);
});
// comprobar password
usersSchema.methods.checkPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);  // compara el password que le pasamos con el que esta en la bd hasheado
};

const User = mongoose.model("User", usersSchema);
export default User;
