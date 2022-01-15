import React, { useState } from "react";
import { Axios } from "../../config/url";
import "./formulario.css";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  });

  const { nombre, propietario, email, fecha, sintomas } = datos;

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = async (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha].includes("")) {
      alert("Todos los campos son obligatorios");
      return;
    }
    try {
      const crearCita = await Axios.post("/mascota", datos);
      alert(crearCita.data.msg);
      console.log(crearCita);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formulario">
      <h2 className="sub_title">
        Añadir <span>Pacientes</span>
      </h2>
      <form className="form" onSubmit={enviarDatos}>
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese el nombre de la mascota"
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="campo">
          <label htmlFor="propietario">Propietario:</label>
          <input
            type="text"
            id="propietario"
            placeholder="Ingrese el nombre del propietario"
            name="propietario"
            onChange={handleChange}
            value={propietario}
          />
        </div>{" "}
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Ingrese el email del propietario"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>{" "}
        <div className="campo">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            onChange={handleChange}
            value={fecha}
          />
        </div>{" "}
        <div className="campo">
          <label htmlFor="sintomas">Sintomas:</label>
          <textarea
            id="sintomas"
            placeholder="Ingrese los síntomas"
            name="sintomas"
            onChange={handleChange}
            value={sintomas}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Pacientes
        </button>
      </form>
    </div>
  );
};

export default Formulario;
