import mongoose from "mongoose";

/**  mongo trabaja con esquemas. Creamos una constante llamada UserSchema que va a usar una instansia de la 
 * clase mongoose que trae a su atributo Schema. Le pasamos un objeto en donde guardamos todos los parámetros
 * que tendra nuestro esquema de usuario, en este caso
 *     name,
       email,
      password,
      picturePath,
      
*/
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },

    email: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },

    password: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },

    perfilPicture: {
      type: String,
      default: "",
      require: false,
    },

    favoriteFilms: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Film",
    },
  },
  { timestamps: true }
);

/** Aquí le pasamos el esquema a nuestro modelo */

export default mongoose.model("User", UserSchema);
