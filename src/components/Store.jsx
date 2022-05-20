import { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom";
import { getAllProducts, getProductsByCategory, getProductsByKeywords } from "../services/products";
import { ProductCard } from "./ProductCard"


export const Store = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams()

  const orderProducts = (response) => {
    const productsCoincidences = []
    const inputArray = search.toLowerCase().split(" ")
    response.map(prod =>
      productsCoincidences.push({ coincidencias: (prod.Keywords.filter(element => inputArray.includes(element))).length, ...prod })
    );
    return productsCoincidences.sort(function (a, b) {
      return parseFloat(b.coincidencias) - parseFloat(a.coincidencias);
    })
  }

  useEffect(() => {
    if (search) {
      getProductsByKeywords(search.toLowerCase().split(" ")).then((response) => {
        setProducts(orderProducts(response))
        setLoading(false)
      })
    } else if (category) {
      getProductsByCategory(category).then((response) => {
        setProducts(response)
        setLoading(false)
      })
    } else {
      getAllProducts().then((response) => {
        setProducts(response)
        setLoading(false)
      })
    }
  }, [search, category]);


  return (
    <div style={{ "color": "white" }} >
      <h1 >Tienda</h1>
      <h2 >Resultados para: {search}</h2>
      {loading ? <></> : (
        products.length !== 0 ? products.map(prod => <li> <ProductCard key={prod.id} product={prod} /> </li>) : <div>No se encontraron resultados</div>
      )
      }
    </div>
  )
}


