const express = require("express");
require("dotenv").config();
require("./src/config/dbconfig");
const { mascotaRoutes } = require("./src/routes/mascota.routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mascotaRoutes(app);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto numero: " + port);
});
