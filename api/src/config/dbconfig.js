const mongoose = require("mongoose");

const dbConnect = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((err) => {
    console.log("Error al conectar a la base de datos", err);
  });

module.exports = { dbConnect };
