import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./headers";
import { Productolista } from "../component/product/producto";

const Paginas = () => {
  return (
    <section>
      <Routes>
      
        <Route path="/productolista" element={<Productolista />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </section>
  );
};

export default Paginas;
