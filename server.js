const express = require("express");
const app = express();
const PORT = 3000;

// Endpoint para productos
// Endpoint: Devuelve una lista de productos
app.get('/api/productos', (req, res) => {
  res.json([
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 }
  ]);
});

// Endpoint para usuarios
const usuariosRouter = require("./usuarios.js");

app.use("/api", usuariosRouter);




// Endpoint para categorías
app.get('/api/categorias', (req, res) => {
  res.json([
      { id: 1, nombre: "Electrónica" },
      { id: 2, nombre: "Hogar" },
      { id: 3, nombre: "Deportes" }
  ]);
});



// Endpoint para pedidos

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
