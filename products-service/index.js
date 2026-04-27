const express = require('express');
const app = express();
app.use(express.json());

// Inventario de herramientas automotrices
const herramientas = [
    { id: 101, nombre: "Escáner Launch v4", precio: 850000, marca: "Launch" },
    { id: 102, nombre: "Juego Copas de Impacto", precio: 150000, marca: "Stanley" },
    { id: 103, nombre: "Pistola Neumática", precio: 320000, marca: "DeWalt" }
];

// Obtener catálogo de herramientas
app.get('/products', (req, res) => {
    console.log("Consultando inventario de herramientas...");
    res.json(herramientas);
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Servicio de Productos corriendo en http://localhost:${PORT}`);
});