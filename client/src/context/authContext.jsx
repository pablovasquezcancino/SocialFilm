import { createContext, useContext, useState, useEffect } from "react";
import {
  RegisterRequest,
  LoginRequest,
  LogoutRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

/**
 * Acá creamos el createContext y el useContext del usuario:
 * Esto es para compartir los datos (el estado) a través de nuestros componentes más facilmente, este 
 * caso los datos del usuario autenticado para que lo usen distintos componentes de nuestra aplicación.
 * You can think of React context as the equivalent of global variables for our React components.
 */

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/**  
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await RegisterRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (user) => {
    try {
      const res = await LogoutRequest(user);
      setIsAuthenticated(false);
      setUser(res.data);
    } catch (error) {
      console.log(res);
    }
  }

  const signIn = async (user) => {
    try {
      const res = await LoginRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

// Si esta Logeado dame las cookies, donde están el token
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, signIn, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
