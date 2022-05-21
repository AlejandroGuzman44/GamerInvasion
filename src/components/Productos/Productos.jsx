import React, { useContext } from 'react'
import styles from '../Productos/styles.module.scss'
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import { ProductCard } from "../ProductCard"
import { Button, Card, Row, Col, Container } from "react-bootstrap";

export const Productos = (props) => {

    const { agregarProductoCarrito } = useContext(ContextoCarrito);

    return (
        <Container className=" mt-7">
            <Row>
                <Col xs={3}>
                    <div style={{ color: "white", background: "red" }}>
                        Filtros
                    </div>
                </Col>
                <Col xs={9} >
                    <Row>
                        {props.data.map((producto, index) => (
                            <Col >
                                <ProductCard key={index} producto={producto} />
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
        </Container>

    )
}
