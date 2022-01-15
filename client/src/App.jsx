import React from "react";
import "./app.css";
import Formulario from "./components/formulario/formulario";
import ListaCitas from "./components/listaCitas/ListaCitas";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">
        Citas Médicas de <span>Mascotas</span>
      </h1>
      <div className="form_list">
        <Formulario />
        <ListaCitas />
      </div>
    </div>
  );
};

export default App;
