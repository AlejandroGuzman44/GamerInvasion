import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { getProductsByEtiqueta } from "../services/products";


export const Store = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByEtiqueta(search.toLowerCase().split(" ")).then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [search]);

  return (
    <>
      <h1>Tienda</h1>
      <h2>Resultados para: {search}</h2>
      {loading ? <></> : (
        products.length !== 0 ? products.map(prod => <li>{prod.Nombre}</li>) : <>No se encontraron resultados</>
      )
      }
    </>
  )
}


