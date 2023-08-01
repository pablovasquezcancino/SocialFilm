import axios from 'axios';

/**  
 * Creamos una nueva instancia de axios, en la que que guardamos
 * en una constante la url de base
 * y las credenciales para las cookies en true
 */

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export default instance;