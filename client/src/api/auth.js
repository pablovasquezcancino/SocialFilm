import axios from './axios.js';

/**  
 * Aqui creamos las funciones para mandar solicitudes de register,
 * login, y verify al backend.
 */

export const RegisterRequest = user => axios.post('/register', user);

export const LoginRequest = user => axios.post('/login', user);

export const LogoutRequest = user => axios.post('/logout', user);

export const verifyTokenRequest = () => axios.get('/verify'); 