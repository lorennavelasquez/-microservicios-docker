const express = require('express');
const axios = require('axios'); // Herramienta para "llamar" a los otros microservicios
const app = express();
app.use(express.json());

// Direcciones de nuestros microservicios
const URL_USUARIOS = 'http://localhost:3001/users';
const URL_PRODUCTOS = 'http://localhost:3002/products';
const URL_COBROS = 'http://localhost:3003/orders';

// RUTA DE PRUEBA: Para saber si el Gateway está vivo
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a DistriHerramientas</h1><p>El Gateway está funcionando. Prueba las rutas /users, /products o /orders</p>');
});

// Punto de entrada para Clientes
app.get('/users', async (req, res) => {
    try {
        const respuesta = await axios.get(URL_USUARIOS);
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({ error: "Servicio de Usuarios no disponible actualmente" });
    }
});

// Punto de entrada para Herramientas
app.get('/products', async (req, res) => {
    try {
        const respuesta = await axios.get(URL_PRODUCTOS);
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({ error: "Servicio de Productos no disponible actualmente" });
    }
});

// Punto de entrada para Cobros (El Reto)
app.get('/orders', async (req, res) => {
    try {
        const respuesta = await axios.get(URL_COBROS);
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({ error: "Servicio de Cobros no disponible actualmente" });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`\n🚀 Gateway de DistriHerramientas activo!`);
    console.log(`🔗 Prueba en: http://localhost:${PORT}\n`);
});