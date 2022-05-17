import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Store } from "./Store";
import { Checkout } from "./Checkout";
import { Landingpage } from "./Landingpage";
import { Product_detail as ProductoDetail } from "./Product_detail";
import { AboutUs } from "./AboutUs";
import AdminHome from './Admin/AdminHome'
import Etiquetas from './Admin/Etiquetas/Etiquetas'
import Categorias from './Admin/Categorias/Categorias';
import Productos from "./Admin/Productos/Productos";
import CrearProductos from "./Admin/Productos/CrearProductos";
import EditarProductos from "./Admin/Productos/EditarProductos";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />

        <Route path="/pagina_principal" element={<Landingpage />} />

        <Route path="/carrito" element={<Cart />} />

        <Route path="/pedido" element={<Checkout />} />

        <Route path="/producto_detalle" element={<ProductoDetail />} />

        <Route path="/quienes-somos" element={<AboutUs />} />

        <Route path="OptionSelected" element={<Store />} />
        
        <Route path="/administrador" element={<AdminHome />} />

        <Route path="/administrador/etiquetas" element={<Etiquetas />} />

        <Route path="/administrador/categorias" element={<Categorias />} />

        <Route path="/administrador/productos" element={<Productos />} />

        <Route path="/administrador/productos-crear" element={<CrearProductos />} />

        <Route path="/administrador/productos-editar/:idProductoUrl" element={<EditarProductos />} />

      </Routes>
    </>
  );
};
