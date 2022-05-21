import React, { useContext, useEffect, useState } from "react";
import data from "../useFetch.json";
import { Contexto } from "./Contexto";

export const Productos = () => {
  const [datas, setDatas] = useState(data);
  const { productos, setProductos } = useContext(Contexto);
  setProductos(data);

//   useEffect(() => {
//     setProductos();
//   }, []);

  return (
    <div>
      {datas.map((producto, index) => {
        return (
          <div key={index}>
            <h3>{producto.Nombre}</h3>
          </div>
        );
      })}
    </div>
  );
};
