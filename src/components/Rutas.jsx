import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './Cart'
import { Store } from './Store'
import { Checkout } from './Checkout'
import { Product_detail } from './Product_detail'

export const Rutas = () => {
    return (
        <>

            <Routes>


                <Route path="/store" element={
                    <Store />
                } />

                <Route path="/carrito" element={
                    <Cart />
                } />


                <Route path="/pedido" element={
                    <Checkout />
                } />


                <Route path="/producto_detalle" element={
                    <Product_detail />
                } />

                <Route path="OptionSelected" element={
                    <Store />
                } />


            </Routes>


        </>
    )
}
