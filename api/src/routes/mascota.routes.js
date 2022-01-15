const { Router } = require("express");
const {
  crearMascota,
  listarMascotas,
  obtenerMascotaById,
  updateMascota,
  deleteMascota,
} = require("../controllers/mascotaControllers");

const router = Router();

const mascotaRoutes = (app) => {
  app.use("/mascota", router);
  // localhost:5000/mascota = '/'

  // Creando Mascotas
  router.post("/", crearMascota);
  // Listando Mascotas
  router.get("/", listarMascotas);
  // Listando Mascotas por su ID
  router.get("/:id", obtenerMascotaById);
  // Actualizando Mascota o Datos
  router.put("/:id", updateMascota);
  // Eliminando Mascota
  router.delete("/:id", deleteMascota);
  return router;
};

module.exports = { mascotaRoutes };
