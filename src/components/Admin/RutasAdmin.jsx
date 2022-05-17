import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from './AdminHome'
import Etiquetas from './Etiquetas/Etiquetas'
import Categorias from './Categorias/Categorias';

export const RutasAdmin = () => {
  return (
    <>
      <Routes>
        
        <Route path="Administrador" element={<AdminHome />} />

        <Route path="Administrador/Etiquetas" element={<Etiquetas />} />

        <Route path="Administrador/Categorias" element={<Categorias />} />

      </Routes>
    </>
  );
};
