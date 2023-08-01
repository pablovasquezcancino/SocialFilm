import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


// como estamos trabajando con una base de datos, tenemos que hacer una funcion asincrona.
/**
 * Función Register -> Esta función registra nuevos usuarios.
 * Primero le pasamos en una constante los atributos en una req.body
 * Primero creamos una función userFound que busca a un suario, a traves de un email,
 * si el usuario existe nos retorna un mensaje, de que el usaurio existe
 */
export const register = async (req, res) => {
  const { name, email, password, perfilPicture, favoriteFilms } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: ["the email is aldready in use"],
      });

    // inicializamos en una constante a bcrypt, que encriptara las contraseñas
    const passwordHash = await bcrypt.hash(password, 10);

    /**
     *  En una constante newUser guardamos una nueva instancia de nuestro objeto User
     *
     */
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      perfilPicture,
      favoriteFilms,
    });
    // el metodo save guarda el objeto en la base de datos
    const userSaved = await newUser.save(); //Guardamos el usuario
    const token = await createAccessToken({ id: userSaved._id }); //Creamos el Token
    res.cookie("token", token, {
      sameSite: "none",
    }); // establecemos el token en una cookie en la respuesta
    res.json({
      id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email,
      perfilPicture: userSaved.perfilPicture,
      favoriteFilms: userSaved.favoriteFilms,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Creamos una función login que valide si los usuarios
 * tienen una cuenta o no. En este caso también creamos una función 
 * userFound que valide si el email esta verificado o no
 */

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    /**
     * Si el userFound no existe retorna un status 400
     * y un mensaje que dice el email no existe.
     */
    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    /**
     * creamos una funcion isMatch en la que utilizamos un metodo
     * de la libreria bcrypt qeu compara si la contraseña ingresada coincide
     * con la contraseña guardada del userFound
     * Si isMatch tira falso nos retorna un estado 400 y un mensaje de contraseña incorrecta
     */  
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    /**
     * Aqui guardamos en una constante token los datos de nuestro usuario
     * dentro de la funcion createAccessToken creada en nuestra carpeta libs
     */
    const token = await createAccessToken({
      id: userFound._id,
      name: userFound.name,
    });

    //guardamos el token en una cookie
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


/** 
 * Creamos una funcion qeu verifique si el token es válido o no
 * el token se encuntra dentro de req.cookies
 */
export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
        
      //validamos si se encuentra el id del usuario
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      });
    });
  };
  
  
  // funcion para que el usuario ejecute un logout
  export const logout = (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });
    return res.sendStatus(200);
  };
  
  
