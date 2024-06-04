// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: "25mb"}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticUrl="./web/dist";
server.use(express.static(staticUrl));

const cards =[
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
]

// Escribir nuestros endpoints
//Endpoint- Landing
server.get("/cards", (req, res)=>{
    
res.json({results: cards});
});

//Endpoint - nueva tarjeta
server.post("/newCard", (req, res)=>{
res.json({
 cardURL: "http://localhost:3000/cardDetail/123", success: true
  //cardURL, success
  //insert bbdd
})
});

//Endpoint - detalle
server.get("/cardDetail", (req, res)=>{
    
  res.json({ });
  });

