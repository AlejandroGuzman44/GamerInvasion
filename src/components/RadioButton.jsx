import { useContext, useState } from "react";
import React, { useEffect } from "react";
import { Contexto } from "../components/context2.0/Contexto"

const RadioButton = (props) => {

  // const { productos, setProductos } = useContext(Contexto);
  // setProductos(props.productos)

  const dataFiltrada = () => {

  }

  return (
    <>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={props.value} />
        <label class="form-check-label" for="flexRadioDefault1" style={{ "text-transform": "capitalize" }}>
          {props.value}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
