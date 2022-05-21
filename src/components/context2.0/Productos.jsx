import React, { useContext, useEffect, useState } from "react";
import data from "../useFetch.json";
import { Contexto } from "./Contexto";

export const Productos = () => {
  const [datas, setDatas] = useState(data);
  const { productos, setProductos } = useContext(Contexto);
  setProductos(data);
  const dataFiltrada = []

  //   useEffect(() => {
  //     setProductos();
  //   }, []);

  return (
    <Productos data={dataFiltrada} />
  );
};
