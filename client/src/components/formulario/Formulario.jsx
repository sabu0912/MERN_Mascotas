import React from "react";
import "./formulario.css";

const Formulario = () => {
  return (
    <div className="formulario">
      <h2 className="sub_title">
        Añadir <span>Pacientes</span>
      </h2>
      <form className="form">
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese el nombre de la mascota"
            name="nombre"
          />
        </div>
        <div className="campo">
          <label htmlFor="propietario">Propietario:</label>
          <input
            type="text"
            id="propietario"
            placeholder="Ingrese el nombre del propietario"
            name="propietario"
          />
        </div>{" "}
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Ingrese el email del propietario"
            name="email"
          />
        </div>{" "}
        <div className="campo">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" />
        </div>{" "}
        <div className="campo">
          <label htmlFor="sintomas">Sintomas:</label>
          <textarea
            id="sintomas"
            placeholder="Ingrese los síntomas"
            name="sintomas"
          />
        </div>
        <button className="btn btn-primary">Agregar Pacientes</button>
      </form>
    </div>
  );
};

export default Formulario;
