//.ENV ME TRAIGO EL PUERTO QUE PREVIAMENTE CREE
require('dotenv').config();

const express = require('express');
//desestructuracion del objeto, otra forma de cargarlo
const { dbConnection } = require('./database/config');
//cors para que acepte solicitudes de diferentes dominios
const cors = require('cors');

//crear el servidor express
const app = express();

//configurar cors
app.use(cors());

//base de Datos
dbConnection();


//rutas
app.get('/', (req,res)=>{
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen( process.env.PORT, ()=> {
console.log('servidor corriendo puerto 3000');
} );

