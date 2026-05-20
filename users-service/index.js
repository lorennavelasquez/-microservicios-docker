const express = require('express');
const app = express();
app.use(express.json());

// Base de datos  de talleres mecánicos
const clientes = [
    { id: 1, taller: 'Mecánica Juan', contacto: '3101234567', tipo: 'Crédito 8 días' },
    { id: 2, taller: 'Taller Express', contacto: '3209876543', tipo: 'Crédito 15 días' }
];

// Ruta para obtener todos los clientes
app.get('/users', (req, res) => {
    console.log('Consultando clientes de DistriHerramientas...');
    res.json(clientes);
});

// Ruta para registrar un nuevo taller
app.post('/users', (req, res) => {
    const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    res.json({ mensaje: 'Cliente registrado con éxito', cliente: nuevoCliente });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log("servicio de Usuarios corriendo en http://localhost:${PORT}"ß);
});