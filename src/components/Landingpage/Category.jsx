import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "../../buttons/btn-hover-effect.css";

import computer from "../../images/c-computadoras.jpg";
import console from "../../images/c-console.jpg";
import laptop from "../../images/c-laptop.jpg";
import perifericos from "../../images/c-perifericos.jpg";
import videogames from "../../images/c-videogames.jpg";
import gRoom from "../../images/c-gaming-room.jpg";

export const Category = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={computer} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Computadoras</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={console} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Consolas</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={laptop} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Laptops</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={videogames} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Video Juegos</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={perifericos} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Periféricos</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={gRoom} className="rounded-0" />
                <Button className="hover-effect w-100">
                  <span>Y mucho más...</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
