import React from "react";
import { NavLink } from "react-router-dom";
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
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
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
        <Container className="navbar-container" fluid>
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
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-xl`}
                className="nav-title"
              >
                GamerInvasion
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link>
                  <NavLink to="/store" className="nav-text">
                    Tienda<FontAwesomeIcon icon={faCoffee} />
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/quienes-somos" className="nav-text">
                    ¿Quiénes somos?<FontAwesomeIcon icon={faAngry} />
                  </NavLink>
                </Nav.Link>
                <NavDropdown
                  title="Cateogorías"
                  className="nav-text"
                  id={`offcanvasNavbarDropdown-expand-xl`}
                >
                  <NavDropdown.Item href="#action3">
                    Video Juegos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Perífericos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Computadoras
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Consolas</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex mt-2">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-yellow">Buscar</Button>
                </Form>
              </Nav>

              <Nav.Link>
                <NavLink to="/carrito" className="nav-text justify-content-end">
                  Carrito
                </NavLink>
              </Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
