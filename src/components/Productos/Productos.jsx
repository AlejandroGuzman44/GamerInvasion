import React from 'react'
import { ProductCard } from "./ProductCard"
import { Row, Col, Container } from "react-bootstrap";

export const Productos = (props) => {

    return (
        <Container className=" mt-5">
            <Row>
                <Col xs={3}>
                    <div style={{ color: "white", background: "red" }}>
                        Filtros
                    </div>
                </Col>
                <Col xs={9} >
                    <Row className="justify-content-center align-items-center">
                        {props.data.map((producto, index) => (
                            <Col className="d-flex justify-content-center ">
                                <ProductCard key={index} producto={producto} />
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
        </Container>

    )
}
