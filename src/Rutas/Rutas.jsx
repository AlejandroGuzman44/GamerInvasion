import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Store } from "../components/Store";
import { Checkout } from "../components/Checkout";
import { Landingpage } from "../components/Landingpage/Landingpage";
import { Product_detail as ProductoDetail } from "../components/Product_detail";
import { AboutUs } from "../components/AboutUs";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route index element={<Landingpage />} />

        <Route path="/store" element={<Store />} />
        <Route path="/producto_detalle" element={<ProductoDetail />} />

        <Route path="/carrito" element={<Cart />} />
        <Route path="/pedido" element={<Checkout />} />

        <Route path="/quienes-somos" element={<AboutUs />} />

        {/* Esta ruta no va a existir, es para colocarla mientras tengamos el 
        filtro de categorias listo */}
        <Route path="OptionSelected" element={<Store />} />
      </Routes>
    </>
  );
};
