import React, { useContext } from 'react'
import { DatosProductos } from '../../Data/DatosProductos'
import styles from '../Productos/styles.module.scss'
import { ContextoCarrito } from '../../Context/ContextoCarrito'


export const Productos = () => {

    const { agregarProductoCarrito } = useContext(ContextoCarrito);

    return (

        <div className={styles.contenedor_productos}>
            {DatosProductos.map((producto, index) => (

                <div key={index} className={styles.productos}>

                    <img src={producto.img} alt={producto.nombre} />
                    <div>
                        <p>
                            {producto.nombre} - {producto.precio}$
                        </p>
                    </div>
                    <button onClick={() => agregarProductoCarrito(producto)}>Agregar al carrito</button>

                </div>

            ))}

        </div>
    )
}
