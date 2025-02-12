const express = require("express");
const router = express.Router();

// Datos de los usuarios
const usuarios = [
  {
    id: 1,
    nombre: "Darwin Raudales",
    email: "draudales@unitec.edu",
  },
  {
    id: 2,
    nombre: "Carlos Perez",
    email: "cperez@unitec.edu",
  },
  {
    id: 3,
    nombre: "Moises Padmoe",
    email: "mpadmoe@unitec.edu",
  },
];

// Ruta par obtener los datos de los usuarios.
router.get("/usuarios", (req, res) => {
  res.json(usuarios); // Retorna los datos de los usuarios en formato json.
});

module.exports = router;
