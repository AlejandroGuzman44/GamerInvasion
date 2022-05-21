import React, { useContext, useEffect, useState } from "react";
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import { ProductoCarritoMax } from '../ProductoCarritoMax/ProductoCarritoMax'
import ReactWhatsapp from "react-whatsapp";


export const CartMax = () => {


    const [carritoAbierto, setCarritoAbierto] = useState(true)
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const { productoCarrito } = useContext(ContextoCarrito)
    const total = productoCarrito.reduce((anterior, actual) => anterior + actual.amount * actual.Precio, 0);

    var descripcionProductos = productoCarrito.map(item => {
        return (
            "\n_*Producto:*_ " + item.Nombre +
            " - _*Cantidad:*_ " + item.amount +
            " - _*Precio:*_ " + item.amount * item.Precio
        );
    });


    var mensaje = `Hola, estoy interesado en comprar :  ${descripcionProductos}`



    useEffect(() => {

        setCantidadProductos(
            productoCarrito.reduce((anterior, actual) => anterior + actual.amount, 0)
        );

    }, [productoCarrito]);



    return (

        <div>


            {productoCarrito && carritoAbierto && (
                <div>

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
                    {/* <p>Iva incluido</p> */}
                    <ReactWhatsapp number="58-412-725-3667" message={`${mensaje} \n Con un *monto total* de ${total} $`} > Pagar </ReactWhatsapp>

                </div>
            )
            }

        </div >

    );
};
