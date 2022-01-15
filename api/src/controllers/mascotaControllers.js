const Mascota = require("../models/Mascotas");

const crearMascota = async (req, res) => {
  // const data = req.body;
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();
    res.status(200).json({
      msg: "Mascota creada correctamente",
      mascota: nuevaMascota,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear mascota",
    });
  }
};

const listarMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find();
    res.status(200).json({ mascotas });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al obtener mascotas",
    });
  }
};

const obtenerMascotaById = async (req, res) => {
  const id = req.params.id;
  try {
    const mascota = await Mascota.findById(id);
    if (!mascota) {
      return res.status(404).json({
        msg: "No existe la mascota",
      });
    }
    res.status(200).json({ mascota });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al obtener mascota",
    });
  }
};

const updateMascota = async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaUpdate = await Mascota.findByIdAndUpdate(id, req.body);
    if (!mascotaUpdate) {
      return res.status(404).json({
        msg: "No existe la mascota a actualizar",
      });
    }
    res.status(200).json({
      msg: "Mascota actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al actualizar mascota",
    });
  }
};

const deleteMascota = async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaDelete = await Mascota.findByIdAndDelete(id);
    if (!mascotaDelete) {
      return res.status(404).json({
        msg: "No existe la mascota",
      });
    }
    res.status(200).json({
      msg: "Mascota eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al eliminar mascota",
    });
  }
};

module.exports = {
  crearMascota,
  listarMascotas,
  obtenerMascotaById,
  updateMascota,
  deleteMascota,
};
