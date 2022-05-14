import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Store } from "./Store";
import { Checkout } from "./Checkout";
import { Landingpage } from "./Landingpage";
import { Product_detail as ProductoDetail } from "./Product_detail";
import { AboutUs } from "./AboutUs";

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
      </Routes>
    </>
  );
};
