import { useEffect, useState, useContext } from 'react'
import styles from './styles.module.scss'
import { ContextoCarrito } from '../Context/ContextoCarrito'
import { Button, Card, Row, Col, Container } from "react-bootstrap";


export const ProductCard = (props) => {
    const producto = props.producto
    const { agregarProductoCarrito } = useContext(ContextoCarrito);

    return (
        <div className={styles.productos}>

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
    )
}