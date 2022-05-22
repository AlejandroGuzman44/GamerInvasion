import React, { useContext } from 'react'
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import styles from './styles.module.scss'
import { Button, Card } from "react-bootstrap";

export const ProductoCarritoMax = ({ item }) => {
    const { agregarProductoCarrito, eliminarProductoCarrito } = useContext(ContextoCarrito)

    const { id } = item

    return (
        <Card className="m-2 p-3 text-center justify-content-center glow" >
            <Card.Img
                variant="top"
                alt={item.Nombre}
                style={{ width: "15rem", height: "12rem" }}
                src={item.ImagenesUrl[0]} />
            <Card.Body>
                <div className={styles.izquierda}>
                    <Card.Title style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                        {item.Nombre}
                    </Card.Title>
                    <div className={styles.botones}>
                        <Button
                            size="sm"
                            className="align-self-end"
                            variant="cyan"
                            onClick={() => agregarProductoCarrito(item)}>Agregar</Button>
                        <Button
                            style={{"margin": "10px"}}
                            size="sm"
                            className="align-self-end"
                            variant="cyan"
                            onClick={() => eliminarProductoCarrito(item)}>Eliminar</Button>
                    </div>
                </div>
                <div className={styles.derecha}>
                    <Card.Text>
                        <span> Cantidad: {item.amount}</span>
                        <br></br>
                        <span> <b>{item.amount * item.Precio}$</b></span>
                    </Card.Text>
                </div>
            </Card.Body>

        </Card>
    )
}

