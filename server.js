const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

//Middlewares
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", (req, res) => {
  console.log("htting!!");
  res.json("working...");
});

// // importando rutas
// const auth = require("./routes/auth/auth");
// const pais = require("./routes/pais/pais");
// const pedidos = require("./routes/pedidos/pedidos");
// const ordenes = require("./routes/ordenes/ordenes");
// const proveedores = require("./routes/proveedores/proveedores");
// const status = require("./routes/status/status");
// const tipoPago = require("./routes/tipoPago/tipoPago");
// const reportes = require("./routes/reportes/reportes");
// const clientes = require("./routes/clientes/clientes");
// // rutas
// app.use("/v1/auth", auth);
// app.use("/v1/pais", pais);
// app.use("/v1/pedidos", pedidos);
// app.use("/v1/ordenes", ordenes);
// app.use("/v1/proveedores", proveedores);
// app.use("/v1/status", status);
// app.use("/v1/tipoPago", tipoPago);
// app.use("/v1/reportes", reportes);
// app.use("/v1/clientes", clientes);

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`servidor corriendo: localhost:${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
