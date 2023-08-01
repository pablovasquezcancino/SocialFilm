/**
 * La biblioteca zod nos permite hacer validaciones de los datos
 * que nos envia el cliente
 */
import { z } from "zod";

// esquema para registrarse en el sitio
export const registerSchema = z.object({
  name: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
  perfilPicture: z.string({}),
  
});

// esquema para logearse en el sitio
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
