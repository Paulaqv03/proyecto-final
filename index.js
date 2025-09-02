const express = require('express');
const cors = require('cors');
const db = require('./public/conexion/db');
const path = require('path');
const app =express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//guardar datos
app.post('/api/productos', (req, res) => {
    const {nombre, categoria, cantidad, precio, fechaEntrada, fechaCaducidad, proveedor} = req.body;

    const sql ='INSERT INTO Formulario (nombre, categoria, cantidad, precio, fechaEntrada, fechaCaducidad, proveedor) VALUES (?,?,?,?,?,?,?)';
    db.query(sql,[nombre, categoria, cantidad, precio, fechaEntrada, fechaCaducidad, proveedor], (err, result) => {
        if(err) {
            console.error('Error al guardar datos; ', err);
            return res.status(500).json({status: 'error', message: 'Error al guardar'});
        }
        res.json({status: 'ok', id:result.insertId});
    });
});

//obtener datos
app.get('/api/productos', (req, res) => {
    db.query('SELECT * FROM Formulario ORDER BY id DESC', (err, results) => {
        if(err){
            console.error('Error al obtener datos', err);
            return res.status(500).json({status: 'error', message: 'Error al obtener datos'});
        }
        res.json(results);
    } )
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
