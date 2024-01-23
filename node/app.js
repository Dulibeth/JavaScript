/*//Primero llamamos a http, para crear el servidor
const http = require('http');
//para acceder a variables de  entorno
require('dotenv').config();
//para acceder a la variable con process
const PORT = process.env.PORT;


//req = peticion del cliente
//res = respuesta del servidor
//cliente = navegador

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    console.log('Nueva conexion');
    res.setHeader = ('Content-Type', 'text/html');
    res.end('<h1>La conexión fue exitosa</h1>'); //para finalizar y no se quede esperando.
})

//Para que reciba conexiones con la funcion listen, recibe el puerto
//y una funcion que se ejecute cuando el servidor esté listo para recibir conexiones

server.listen(PORT,() =>{
    console.log(`Esperando conexiones, servidor activo en ${port}`);
})*/
//Ahora con EXPRESS
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('la conexion ha sido correcta');
})

app.listen(3000, (req,res)=>{
    console.log('Servidor a la espera de conexiones');
})
