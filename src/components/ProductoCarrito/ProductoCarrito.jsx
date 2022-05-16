import React, { useContext } from 'react'
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import styles from './styles.module.scss'

export const ProductoCarrito = ({ item }) => {
    const { agregarProductoCarrito, eliminarProductoCarrito } = useContext(ContextoCarrito)

    const { id } = item

    return (
        <div className={styles.productoCarrito}>


            <img src={item.img} />
            <div className={styles.contendorDeDatos}>
                <div className={styles.izquierda}>
                    <p>{item.nombre}</p>
                    <div className={styles.botones}>
                        <button onClick={() => agregarProductoCarrito(item)}>Agregar</button>
                        <button onClick={() => eliminarProductoCarrito(item)}>Eliminar</button>
                    </div>
                </div>
                <div className={styles.derecha}>
                    <div className={styles.numerito}>
                        {item.amount}
                    </div>
                    <p>Total : {item.amount * item.precio}$</p>
                </div>
            </div>

        </div>
    )
}
