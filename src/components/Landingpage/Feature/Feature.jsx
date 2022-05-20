import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import products from "../../../images/gaming-products.png";
import community from "../../../images/gaming-community.png";
import shopping from "../../../images/shopping.png";

import "./Feature.css";

export const Feature = () => {
  return (
    <>
      <Container className="my-7">
        <Row className="align-items-center">
          <Col lg>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="transparent"
              className="border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={products} className="glow rounded-0" />
              </Card.Body>
            </Card>
          </Col>

          <Col lg>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="transparent"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={community} className="glow-orange rounded-0" />
              </Card.Body>
            </Card>
          </Col>

          <Col lg>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="transparent"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={shopping} className="glow rounded-0" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
