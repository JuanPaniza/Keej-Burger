import jwt  from "jsonwebtoken";

const generateJWT =(id)=>{  // tomara el id del usuario
return jwt.sign({id}, process.env.JWT_SECRET)
}
export default generateJWT;