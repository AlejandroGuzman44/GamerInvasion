import { Form, Button } from "react-bootstrap";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNamesAllProducts } from "../../services/products"
import Autosuggest from "react-autosuggest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [value, setValue] = useState("");
  const [nombreSelected, setNombreSelected] = useState({});

  const onSuggestionsFetchRequested = ({ value }) => {
    setNombres(filterOptions(value));
  };

  const filterOptions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    var filtrado = options.filter((option) => {
      var textoCompleto = option.nombre;

      if (
        textoCompleto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      ) {
        return option;
      }
    });

    return inputLength === 0 ? [] : filtrado;
  };

  const onSuggestionsClearRequested = () => {
    setNombres([]);
  };

  const getSuggestionValue = (suggestion) => {
    return `${suggestion.nombre}`;
  };

  const renderSuggestion = (suggestion) => {
    if (value.length >= 2) {
      return (
        <div
          className="sugerencia dropdown"
          id={`offcanvasNavbarDropdown-expand-xl`}
         
          onClick={() => selectNombre(suggestion)}
        >
          {`${suggestion.nombre}`}
        </div>
      )
    } else {
    }
  };

  const selectNombre = (nombre) => {
    setNombreSelected(nombre);
  };

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Buscar productos",
    type: "search",
    className: "me-2 ms-3 search-bar",
    "aria-label": "Search",
    value,
    onChange
  };

  const eventEnter = (e) => {
    if (e.key === "Enter") {
      var split = e.target.value.split("-");
      var nombre = {
        nombre: split[0].trim(),
      };
      selectNombre(nombre);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/store?search=" + value)
  };

  useEffect(() => {
    getNamesAllProducts().then((response) => {
      setNombres(response)
      setOptions(response)
    })
  }, []);

  return (
    <>
      <Form className="my-2 d-inline-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={nombres}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={eventEnter}
        />
        <br />
        <Button
          type="submit" className="nav-btn" variant="outline-cyan"
        >
          <FontAwesomeIcon icon={faSearch}/>
        </Button>
      </Form>
    </>
  );
};
