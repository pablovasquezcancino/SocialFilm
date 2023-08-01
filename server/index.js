import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

/**
 * body-parser analiza y procesa los datos de solicitudes HTTP, como json o datos de formulario.
 * Permite acceder a los datos del cuerpo de solicutud en un  fomrato ideal para aplicaciones node js.
 */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//esto se usa par aque express pueda entender los objetos.
// Y el cookie parser es para que nos regren las cookies como json
app.use(express.json());
app.use(cookieParser());

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Inicialización de nuestras rutas:
app.use("/api", authRoutes);
app.use("api", userRoutes);
app.use("/api", postRoutes);

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/assets", upload.single("file"), (req, res) => {
  res.send({ data: "imagen cargada" });
});

const port = 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
connectDB();
