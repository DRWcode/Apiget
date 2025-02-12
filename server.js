const express = require("express");
const app = express();
const PORT = 3000;

// Endpoint para productos

// Endpoint para usuarios
const usuariosRouter = require("./usuarios.js");

app.use("/api", usuariosRouter);

// Endpoint para categorías

// Endpoint para pedidos

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
