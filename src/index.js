const mysql2 = require("mysql2/promise");
const express = require("express");
const app = express();
var axios = require("axios");

//funcion que procesa datos antes de que el servidor lo reciba
const morgan = require("morgan");
// puerto en el que escucha
app.set("port", process.env.PORT || 3030);
app.set("json spaces", 2);

//seguridad
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(morgan("dev"));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

//--------------extra
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//----------Credenciales DB
//const db_credenciales = require("./credenciales");
//var connProme = mysql2.createPool(db_credenciales);

//######################################################################################
//######################################################################################
app.post("/ayd2/LoginAnfitrion", async function (req, res) {
  const { correo } = req.body;
  const { password } = req.body;
  try {
    var user = {
      foto: "https://picsum.photos/200/300",
      password: "1234",
      nombre: "Anfitrion",
      apellido: "prueba",
      correo: "correo@gmail.com",
      telefono: "12312312",
      fec_nac: "01/01/2021",
      direccion: "guatemala guatemala",
      dpi: "12312321312",
      rol: "1",
    }

    return res.send({
      status: 200,
      user: user,
    });
  } catch (error) {
    return res.send({
      status: 400,
      msg: "Anfitrion no encontrado",
    });
  }
});

app.post("/ayd2/LoginHuesped", async function (req, res) {
  const { correo } = req.body;
  const { password } = req.body;
  try {
    var user = {
      foto: "https://picsum.photos/200/300",
      password: "1234",
      nombre: "Huesped",
      apellido: "prueba",
      correo: "correo@gmail.com",
      telefono: "12312312",
      fec_nac: "01/01/2021",
      direccion: "guatemala guatemala",
      dpi: "12312321312",
      rol: "1",
    }

    return res.send({
      status: 200,
      user: user,
    });
  } catch (error) {
    return res.send({
      status: 400,
      msg: "Huesped  no encontrado",
    });
  }
});

app.post("/ayd2/RegistroAnfitrion", async function (req, res) {
  const { correo } = req.body;
  const { password } = req.body;
  try {
    var user = {
      foto: "https://picsum.photos/200/300",
      password: "1234",
      nombre: "Huesped",
      apellido: "prueba",
      correo: "correo@gmail.com",
      telefono: "12312312",
      fec_nac: "01/01/2021",
      direccion: "guatemala guatemala",
      dpi: "12312321312",
      rol: "1",
    }

    return res.send({
      status: 200,
      user: user,
    });
  } catch (error) {
    return res.send({
      status: 400,
      msg: "Huesped  no encontrado",
    });
  }
});

app.post("/ayd2/RegistroHuesped", async function (req, res) {
  const { correo } = req.body;
  const { password } = req.body;
  try {
    var user = {
      foto: "https://picsum.photos/200/300",
      password: "1234",
      nombre: "Huesped",
      apellido: "prueba",
      correo: "correo@gmail.com",
      telefono: "12312312",
      fec_nac: "01/01/2021",
      direccion: "guatemala guatemala",
      dpi: "12312321312",
      rol: "1",
    }

    return res.send({
      status: 200,
      user: user,
    });
  } catch (error) {
    return res.send({
      status: 400,
      msg: "Huesped  no encontrado",
    });
  }
});
//######################################################################################
//######################################################################################


//iniciando servidor
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});

