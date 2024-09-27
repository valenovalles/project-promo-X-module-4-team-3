// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require("cors");
const mysql = require('mysql2/promise');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: "25mb"}));
server.set('view engine', 'ejs');
require('dotenv').config();

async function conexion() {
  //defino la ubicacion y datos de BD
  const conn = await mysql.createConnection({
    host: 'bkntobq56q2k4qlcspjq-mysql.services.clever-cloud.com',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'bkntobq56q2k4qlcspjq'
  });
  //me conecto a la BD  definida
  return conn;
}


// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});



// Escribir nuestros endpoints
//Endpoint- Landing
server.get("/task",async (req, res)=>{ // nos lleva a la landing
   const conn = await conexion();
   const select = `SELECT task FROM tareas`
   const [results] = await conn.query(select)
  res.json({data: results});
  conn.end();
});

//Endpoint - nueva tarjeta
server.post('/newTask', async (req, res) => {
  const data = req.body;
  const conn = await conexion();
  const insertTask = 'INSERT INTO tareas(task) VALUES (?)';
  await conn.query(insertTask, [data.name]); // Asegúrate de que el frontend envía "name"
  conn.end();
  res.json({ success: true });
});

  
const staticUrl="./src/public-react";
server.use(express.static(staticUrl));
//Servidor estático detalle
  server.use(express.static("./src/css"));
