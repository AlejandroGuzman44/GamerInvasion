import React, { useContext, useEffect, useState } from "react";
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import { ProductoCarritoMax } from '../ProductoCarritoMax/ProductoCarritoMax'
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'


export const CartMax = () => {


    const [carritoAbierto, setCarritoAbierto] = useState(true)
    const [cantidadProductos, setCantidadProductos] = useState(0)


    const { productoCarrito } = useContext(ContextoCarrito)


    useEffect(() => {

        setCantidadProductos(
            productoCarrito.reduce((anterior, actual) => anterior + actual.amount, 0)
        );

    }, [productoCarrito]);


    const total = productoCarrito.reduce((anterior, actual) => anterior + actual.amount * actual.precio, 0);

    return (

        <div>


            {productoCarrito && carritoAbierto && (
                <div>


                    {/* <h2>Tu carrito</h2> */}

                    {productoCarrito.length === 0 ? (
                        <p>Tu carrito esta vacio</p>
                    ) : (
                        <div>

                            {productoCarrito.map((item, i) => (
                                <ProductoCarritoMax key={i} item={item} />
                            ))}

                        </div>
                    )}



                    <h2>Total : ${total}</h2>
                    <NavLink to='/pedido'>Pagar</NavLink>


                </div>


            )
            }



        </div >

    );
};
