import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import pic from "../../../images/site-pic.png";
import vid from "../../../images/site-background.gif";

import "./SiteInfo.css";
import "../../../buttons/gradient.css";

export const SiteInfo = () => {
  return (
    <>
      <Container className="site-info-container mt-7">
        <Row className="text-center d-flex align-items-center text-center">
          <Col data-aos="fade-up" data-aos-duration="2000" md>
            <img src={pic} alt="site-pic" className="w-100" />
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="2000"
            md
            className="site-info"
          >
            <img src={vid} alt="site-pic" className="w-100" />
            <Button className="grad align-self-bottom">¡Compra ahora!</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
