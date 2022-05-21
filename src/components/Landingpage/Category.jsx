import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "../../buttons/btn-hover-effect.css";

import computer from "../../images/c-computadoras.jpg";
import console from "../../images/c-console.jpg";
import laptop from "../../images/c-laptop.jpg";
import perifericos from "../../images/c-perifericos.jpg";
import videogames from "../../images/c-videogames.jpg";
import gRoom from "../../images/c-gaming-room.jpg";
import title from "../../images/category-title.gif";
import {Link } from "react-router-dom"

export const Category = () => {
  return (
    <>
      <Container className="my-8 text-center">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-100 mb-3"
          src={title}
          alt="Categorías"
          fluid
        />
        <Row>
          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={computer} className="rounded-0" />
                <Button as={Link} to="/store/c/pcdesktop" className="hover-effect w-100">
                  <span>Computadoras</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={console} className="rounded-0" />
                <Button as={Link} to="/store/c/consolas" className="hover-effect w-100">
                  <span>Consolas</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img variant="top" src={laptop} className="rounded-0" />
                <Button as={Link} to="/store/c/laptops" className="hover-effect w-100">
                  <span>Laptops</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={videogames}
                  className="rounded-0"
                />
                <Button as={Link} to="/store/c/videojuegos" className="hover-effect w-100">
                  <span>VideoJuegos</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
              bg="dark-purple"
              className="text-center align-items-center justify-content-center border-0"
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={perifericos}
                  className="rounded-0"
                />
                <Button as={Link} to="/store/c/perifericos" className="hover-effect w-100">
                  <span>Periféricos</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md>
            <Card
              data-aos="fade-up"
              data-aos-duration="2000"
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
