import React, { useContext, useState, useEffect } from 'react'
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import { ProductCard } from "./ProductCard"
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Filters } from "../Filters"
import { Contexto } from "../context2.0/Contexto"
import { useSearchParams } from 'react-router-dom';

export const Productos = (props) => {

    const { agregarProductoCarrito } = useContext(ContextoCarrito);
    const { products, setProducts, filterByMarca, emptyFilterData, filterData } = useContext(Contexto);
    setProducts(props.data)

    return (
        <Container className=" mt-7">
            <Row>
                <Col xs={3}>
                    <div style={{color:"white", border:"1px", "border-color": "white"}}>
                        <Filters style={{ "position": "absolute", "top": "15px" }} productos={props.data} />
                    </div>
                </Col>
                <Col xs={9} >
                    <Row>
                        {props.data.map((producto, index) => (
                            <Col key={index} md={4}>
                                <ProductCard producto={producto} />
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
        </Container>

    )
}
