const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const { conn } = require('./DB_connection');

const server = express();  //crear el server 
const PORT = 3001;

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json())
server.use(morgan("dev"))
server.use("/rickandmorty", router); 

server.listen(PORT, () => {
   conn.sync({force: true})
   console.log("Server raised in port " + PORT)}); //el server escucha en el puerto correcto


//esto se pone para que no sea necesario poner a cada router lo mismo. 
 //TODAS las rutas dentro del archivo index de routes lo tendran.



// const http = require("http");
// // const data = require("./utils/data")
// const {getCharById} = require("./controllers/getCharById")

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); //se debe usar esta linea para permitir acceso a las requests
//     const { url } = req; //esta linea es para poder obtener la url del req.

//     if (url.includes("/rickandmorty/character")) {
//         const urlId = url.split("/").at(-1);
//         getCharById(res, urlId);
//     }
// }).listen(3001)

