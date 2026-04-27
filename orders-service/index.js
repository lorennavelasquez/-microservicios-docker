const express = require('express');
const app = express();
app.use(express.json());

// Gestión de créditos y cobros (Reto Práctico 40%)
let creditos = [
    { id: 1, clienteId: 1, monto: 850000, periodo: "8 días", proximoCobro: "2026-04-22" },
    { id: 2, clienteId: 2, monto: 150000, periodo: "15 días", proximoCobro: "2026-04-30" }
];

// Obtener historial de créditos/cobros
app.get('/orders', (req, res) => {
    console.log("Generando reporte de cobros pendientes...");
    res.json(creditos);
});

// Registrar una nueva venta a crédito
app.post('/orders', (req, res) => {
    const nuevoCredito = {
        id: creditos.length + 1,
        ...req.body,
        fechaRegistro: new Date().toISOString().split('T')[0]
    };
    creditos.push(nuevoCredito);
    res.json({ 
        mensaje: "Venta a crédito registrada en DistriHerramientas", 
        detalle: nuevoCredito 
    });
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Servicio de Cobros (Reto) corriendo en http://localhost:${PORT}`);
});