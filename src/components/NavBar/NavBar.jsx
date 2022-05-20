import React from "react";
import { Link, NavLink } from "react-router-dom";
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
import { Search } from '../Search/Search';

import logo from "../../images/logo.png";

export const NavBar = () => {
  return (
    <>
      <Navbar
        key="xl"
        bg="dark-purple"
        variant="dark"
        expand="xl"
        fixed="top"
        className="py-0"
      >
        <Container className="navbar-container align-items-center" fluid>
          <Navbar.Brand as={Link} to="/" className="nav-text">
            <img alt="logo" src={logo} />
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
                  <NavDropdown.Item as={Link} to="/store/c/pcdesktop">PC DESKTOP</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/store/c/consolas">CONSOLAS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/store/c/laptops">LAPTOPS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/store/c/videojuegos">VIDEOJUEGOS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/store/c/perifericos">PERIFÉRICOS</NavDropdown.Item>
                </NavDropdown>
                <Search />
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
