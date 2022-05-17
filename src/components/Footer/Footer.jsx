import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <div className="mt-auto">
        <Container>
          <Row className="text-center text-cyan py-3">
            <Col>Copyright &copy; GamerInvasion</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
