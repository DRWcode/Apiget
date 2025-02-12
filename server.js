const express = require("express");
const app = express();
const PORT = 3000;

// Endpoint para productos
// Endpoint: Devuelve una lista de productos
//
app.get('/api/productos', (req, res) => {
  res.json([
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 }
      { id: 4, nombre: "Tarjeta Grafica", precio: 3500 }
      { id: 5, nombre: "Memorias RAM", precio: 5600 }
      { id: 6, nombre: "Maletin Protector", precio: 450 }
  ]);
});

// Endpoint para usuarios
const usuariosRouter = require("./usuarios.js");

app.use("/api", usuariosRouter);

// Endpoint para categorías

// Endpoint para pedidos

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
