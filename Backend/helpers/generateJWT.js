import jwt  from "jsonwebtoken";

const generateJWT =(id)=>{  // tomara el id del usuario
return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn:"30d"  //creamos el jwt por 30 dias 
})
}
export default generateJWT;