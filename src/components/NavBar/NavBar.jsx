import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Offcanvas,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../images/logo.png"

export const NavBar = () => {
  return (
    <>
      <Navbar
        key="xl"
        bg="dark-purple"
        variant="dark"
        expand="xl"
        className="py-0"
      >
        <Container className="navbar-container align-items-center" fluid>
          <Navbar.Brand as={Link} to="/pagina-principal" className="nav-text">
            <img alt="logo" src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="btn-close-white align-items-center justify-content-end"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/store" className="nav-text">
                  Tienda
                </Nav.Link>
                <NavDropdown
                  title="Categorías"
                  className="nav-dropdown-title"
                  id={`offcanvasNavbarDropdown-expand-xl`}
                >
                  <NavDropdown.Item>Video Juegos</NavDropdown.Item>
                  <NavDropdown.Item>Perífericos</NavDropdown.Item>
                  <NavDropdown.Item>Computadoras</NavDropdown.Item>
                  <NavDropdown.Item>Consolas</NavDropdown.Item>
                </NavDropdown>
                <Form className="my-2 d-inline-flex align-items-center justify-content-center">
                  <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2 ms-3 search-bar"
                    aria-label="Search"
                  />
                  <Button className="nav-btn" variant="outline-cyan">Buscar</Button>
                </Form>
              </Nav>
              <Nav className="align-items-center">
              <Nav.Link
                  as={Link}
                  to="/quienes-somos"
                  className="nav-text justify-content-end"
                >
                  ¿Quiénes somos?
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
