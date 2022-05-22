import React, { useContext, useState, useEffect } from 'react'
import { ContextoCarrito } from '../../Context/ContextoCarrito'
import { ProductCard } from "./ProductCard"
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Filters } from "../Filters"
import { Contexto } from "../context2.0/Contexto"
import { useSearchParams, useParams, useLocation } from 'react-router-dom';

export const ProductosFilter = () => {

    const { filter } = useParams();
    const location = useLocation()
    const { datos } = location.state
    const { agregarProductoCarrito } = useContext(ContextoCarrito);
    const { products, setProducts, filterByMarca, emptyFilterData, filterData } = useContext(Contexto);

    return (
        <Container className=" mt-7">
            <Row>
                <Col xs={3}>

                </Col>
                <Col xs={9} >
                    {datos.length === 0 ?
                        <div style={{ color: "white", margin: "15px"}}>
                            <h3>No se encontraron resultados acorde al filtro aplicado</h3>
                        </div> :
                        <Row>
                            {datos.map((producto, index) => (
                                <Col key={index} md={4}>
                                    <ProductCard producto={producto} />
                                </Col>
                            ))}
                        </Row>}

                </Col>
            </Row>
        </Container>

    )
}
