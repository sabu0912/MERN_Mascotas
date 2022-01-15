const mongoose = require("mongoose");

const mascotaShema = mongoose.Schema({
  nombre: { type: String, require: true },
  propietario: { type: String, require: true },
  email: { type: String, require: true },
  fecha: { type: String, require: true },
  sintomas: String,
});

const mascotaModel = mongoose.model("mascota", mascotaShema);

module.exports = mascotaModel;
