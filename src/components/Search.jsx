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

import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Search = () => {
  const [text, setText] = useState("");
  //const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/store?search=" + text)
    //setQuery({ search: text }, "/store");
  };

  return (
    <>
      <Form className="d-flex mt-2" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit" variant="outline-yellow">
          Buscar
        </Button>
      </Form>
    </>
  );
};
