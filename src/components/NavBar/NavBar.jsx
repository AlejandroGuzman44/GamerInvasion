import React from "react";
import { NavLink } from "react-router-dom";
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

export const NavBar = () => {
  return (
    <>
      <Navbar
        key="xl"
        bg="dark-purple"
        variant="dark"
        expand="xl"
        className="mb-3"
      >
        <Container className="navbar-container align-items-center" fluid>
          <Navbar.Brand>
            <NavLink to="/pagina-principal" className="nav-text">
              GamerInvasion
            </NavLink>
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
                <Nav.Link>
                  <NavLink to="/store" className="nav-text">
                    Tienda
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/quienes-somos" className="nav-text nav-text">
                    ¿Quiénes somos?
                  </NavLink>
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
                  <Button variant="outline-yellow">Buscar</Button>
                </Form>
              </Nav>
              <Nav className="align-items-center">
                <Nav.Link>
                  <NavLink
                    to="/carrito"
                    className="nav-text justify-content-end"
                  >
                    Carrito
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
