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

async function conexion() {
  //defino la ubicacion y datos de BD
  const conn = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_AdaMoon',
    password: 'z*Sh563wR59vGaP',
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

const staticUrl="./web/dist";
server.use(express.static(staticUrl));

/* const cards =[
  {
    image: "./images/perretes3.jpeg",
    photo: "./images/perretes17.jpeg",
    job: "Somos un combo ganador!",
    autor: "Carlos y Raquel",
    name: "Ana y Sergio", 
    slogan: "22 de mayo de 2025", 
    desc: "¿Adivinen qué? ¡Nos casamos! Únete a nuestra fiesta de amor y risas.",
    technologies: "Whatsapp",
    demo: "https://example.com/demo1",
    repo: "https://github.com/example/repo1"
  },
  {
    image: "./images/perretes2.jpeg",
    photo: "./images/perretes11.jpeg",
    job: "Amor, confianza, respeto, felicidad: ¡nuestro mantra!",
    autor: "Valentina y Fátima",
    name: "Lucía y Alejandro",
    slogan: "25 de julio 2024",
    desc: "¡Buenas vibras, gente genial! Nos casamos. ¿Listos para la fiesta?",
    technologies: "teléfono",
    demo: "https://example.com/demo2",
    repo: "https://github.com/example/repo2"
  },
  {
    image: "./images/perretes5.jpeg",
    photo: "./images/perretes6.jpeg",
    job: "Juntos: amor, confianza, respeto, felicidad.",
    autor: "Fernando y Antonio",
    name: "Carmen y Lola",
    slogan: "12 de octubre de 2024",
    desc: "¡Hemos decidido hacerlo oficial y casarnos!",
    technologies: "Whatsapp",
    demo: "https://example.com/demo3",
    repo: "https://github.com/example/repo3"
  },
  {
      image: "./images/perretes7.jpeg",
      photo: "./images/perretes16.jpeg",
      job: "Amor, confianza, respeto, felicidad: ¡nuestra esencia!",
      autor: "Juana y Alba",
      name: "Manuel y Antonio",
      slogan: "12 de febrero de 2025",
      desc: "Tenemos una gran noticia: ¡nos casamos! ",
      technologies: "Teléfono",
      demo: "https://example.com/demo3",
      repo: "https://github.com/example/repo3"
    }
] */

// Escribir nuestros endpoints
//Endpoint- Landing
server.get("/cards",async (req, res)=>{
   const conn = await conexion();
   const select = `select * FROM Event INNER JOIN guests
   ON  idGuest = fkGuest`
   const [results] = await conn.query(select)
  res.json({data: results});
  conn.end
});

//Endpoint - nueva tarjeta
server.post('/newCard', async (req, res) => {
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
    cardURL: `http//:localhost:3000/cardDetail/${resultEvent.insertId}`,
    success: true,
  });
});

//Plantilla de motores para crear invitación
server.get('/cardDetail/:id', async (req,res) => {
  const conn = await conexion();
  const {id} = req.params;
  const findEvent = "SELECT * FROM Event inner join guests on fkGuest = idGuest WHERE idEvent = ?;";
  const [resultEvent] = await conn.query(findEvent, [id]);
  res.render('detail', {detail: resultEvent[0]});
  console.log(resultEvent);
});

//Servidor estático detalle
server.use(express.static("./src/css"));


//Endpoint - detalle
server.get("/cardDetail", (req, res)=>{
    
  res.json({ });
  });

