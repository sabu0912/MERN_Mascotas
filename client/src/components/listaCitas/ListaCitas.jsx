import React from "react";
import Citas from "./Citas";
import "./listaCitas.css";

const ListaCitas = () => {
  return (
    <div className="lista_citas">
      <h2 className="sub_title">
        Lista de <span>Pacientes</span>
      </h2>
      <div className="contenedor_citas">
        <Citas />
        <Citas />
        <Citas />
        <Citas />
      </div>
    </div>
  );
};

export default ListaCitas;
