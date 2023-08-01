/**  
 * dentro de la constante validateSchema validamos si los datos
 * que nos estan pasando corresponden con los datos
 * que pide el backend
 */

export const validateSchema = (schema) => (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.errors.map((error) => error.message) });
    }
  };