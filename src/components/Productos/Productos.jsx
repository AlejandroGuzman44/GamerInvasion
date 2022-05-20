import React, { useContext } from 'react'
import styles from '../Productos/styles.module.scss'
import { ContextoCarrito } from '../../Context/ContextoCarrito'


export const Productos = (props) => {

    const { agregarProductoCarrito } = useContext(ContextoCarrito);

    return (

        <div className={styles.contenedor_productos}>
            {props.data.map((producto, index) => (

                <div key={index} className={styles.productos}>

                    <div className={styles.contenedor_imagen}>
                        <img src={producto.ImagenesUrl} alt={producto.Nombre} />
                    </div>

                    <div>
                        <p>
                            {producto.Nombre} - {producto.Precio}$
                        </p>
                    </div>
                    <button onClick={() => agregarProductoCarrito(producto)}>Agregar al carrito</button>

                </div>

            ))}

        </div>
    )
}
