import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// Configurar ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos (index.html y style.css)
app.use(express.static(path.join(__dirname, "public")));

// Conectar con MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Conectado a MongoDB desde Docker"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint API para probar que funciona
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "API funcionando correctamente 🚀" });
});

app.listen(3000, () => {
  console.log("🚀 Servidor escuchando en el puerto 3000");
});
