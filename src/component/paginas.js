import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./headers";
import { Productolista } from "../component/product/producto";
import { Inicio2 } from "./headers/inicio/inicio2";
const Paginas = () => {
  return (
    <section>
      <Routes>
      
        <Route path="/productolista" element={<Productolista />} />
        <Route path="/*" element={<Inicio />} />
        <Route path="/inicio2" element={<Inicio2 />} />
      </Routes>
    </section>
  );
};

export default Paginas;
