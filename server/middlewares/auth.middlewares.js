import  jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


/** 
 * En una funcion auth, cuyos parámetros son req, res y next 
 * validamos si el token que nos pasan desde req.cookies es valido
 * si es valido se ejecuta el parametro next, que significa
 * que el proceso ejecuta la función que continua. Si no es válido el token
 * el proceso se detiene aquí
 */
export const auth = (req, res, next) => {
    try {
      const { token } = req.cookies;
  
      if (!token)
        return res
          .status(401)
          .json({ message: "No token, authorization denied" });
  
      jwt.verify(token, TOKEN_SECRET, (error, user) => {
        if (error) {
          return res.status(401).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };