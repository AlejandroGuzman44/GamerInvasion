import React from "react";
import { Route, Routes } from "react-router-dom";
import { Store } from "../components/Tienda/Store";
import { Checkout } from "../components/Checkout";
import { Landingpage } from "../components/Landingpage/Landingpage";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { CartMax } from "../components/CartMax/CartMax";
import { ProductosFilter } from "../components/Productos/ProductosFilter";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/store/filters" element={<ProductosFilter />} />

        <Route path="/store" element={<Store />} />

        <Route path="/store/c/:category" element={<Store />} />

        <Route path="/carrito" element={<CartMax />} />
        <Route path="/pedido" element={<Checkout />} />

        <Route path="/quienes-somos" element={<AboutUs />} />

      </Routes>
    </>
  );
};
