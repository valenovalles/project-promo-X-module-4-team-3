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
    host: 'sql.freedb.tech',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'freedb_Ada_Moon_Wedding'
  });
  //me conecto a la BD  definida
  await conn.connect();
  return conn;
}


// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});



// Escribir nuestros endpoints
//Endpoint- Landing
server.get("/cards",async (req, res)=>{ // nos lleva a la landing
   const conn = await conexion();
   const select = `SELECT idEvent, NAME, DATE_FORMAT(Event.date, '%d, %M, %Y') AS date, ubication, gift, contact, message, coupleName, quote, otherImage, coupleImage FROM Event inner join guests on fkGuest = idGuest `
   const [results] = await conn.query(select)
  res.json({data: results});
  conn.end
});

//Endpoint - nueva tarjeta
server.post('/newCard', async (req, res) => { //nos escribe en la landing
  //Recoger lo que viene del formulario
  const data = req.body;
  //Conectar con base de datos
  const conn = await conexion();
  //Insertar en nuestras tables event y guests (1º en guests y después en event)
  const insertGuest = 'insert into guests(NAME) values(?)';
  const [resultGuest] = await conn.query(insertGuest, [data.NAME]);
  console.log(resultGuest.insertId);
  // insertId en event
  const insertEvent =
    'insert into Event (date, ubication, gift, contact, message, coupleName, quote, otherImage, coupleImage, fkGuest) values (?,?,?,?,?,?,?,?,?,?)';
  //Devolver la respuesta
  const [resultEvent] = await conn.query(insertEvent, [
    data.date,
    data.ubication,
    data.gift, 
    data.contact, 
    data.message, 
    data.coupleName, 
    data.quote, 
    data.otherImage, 
    data.coupleImage,
    resultGuest.insertId,
  ]);

  //insert BD
  res.json({
    cardURL: `/cardDetail/${resultEvent.insertId}`,
    success: true,
  });
});

//Plantilla de motores para crear invitación
server.get('/cardDetail/:id', async (req,res) => {
  const conn = await conexion();
  const {id} = req.params;
  const findEvent = "SELECT idEvent, NAME, DATE_FORMAT(Event.date, '%d, %M, %Y') AS date, ubication, gift, contact, message, coupleName, quote, otherImage, coupleImage FROM Event inner join guests on fkGuest = idGuest WHERE idEvent = ?;";  
  const [resultEvent] = await conn.query(findEvent, [id]);
  res.render('detail', {detail: resultEvent[0]});
  console.log(resultEvent);
});





  
const staticUrl="./src/public-react";
server.use(express.static(staticUrl));
//Servidor estático detalle
  server.use(express.static("./src/css"));
