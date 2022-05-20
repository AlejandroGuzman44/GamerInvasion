import React from "react";
import { Route, Routes } from "react-router-dom";
import { Store } from "./Tienda/Store";
import { Checkout } from "./Checkout";
import { Landingpage } from "./Landingpage";
import { Product_detail as ProductoDetail } from "./Product_detail";
import { AboutUs } from "./AboutUs";
import { CartMax } from "./CartMax/CartMax";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />

        <Route path="/pagina_principal" element={<Landingpage />} />

        <Route path="/carrito" element={<CartMax />} />

        <Route path="/pedido" element={<Checkout />} />

        <Route path="/producto_detalle" element={<ProductoDetail />} />

        <Route path="/quienes-somos" element={<AboutUs />} />

        <Route path="OptionSelected" element={<Store />} />
      </Routes>
    </>
  );
};
