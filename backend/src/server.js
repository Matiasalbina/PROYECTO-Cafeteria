import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import { createTablesAndViews } from "./db/config.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  await createTablesAndViews(); // Crea las tablas y vistas en la base de datos "aromacafe"
  console.log("Tablas y vistas SQL creadas correctamente.");
});
