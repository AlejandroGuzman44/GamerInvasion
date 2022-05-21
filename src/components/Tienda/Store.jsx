import { useEffect, useState, useContext } from "react";
import { Row, Spinner } from "react-bootstrap";
import { useSearchParams, useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsByKeywords,
} from "../../services/products";
import { Productos } from "../Productos/Productos";

import { Contexto } from "../context2.0/Contexto"

export const Store = () => {

  const { products: productos, setProducts: setProductos, filterByMarca, filterData, emptyFilterData } = useContext(Contexto);

  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const orderProducts = (response) => {
    const productsCoincidences = [];
    const inputArray = search.toLowerCase().split(" ");
    response.map((prod) =>
      productsCoincidences.push({
        coincidencias: prod.Keywords.filter((element) =>
          inputArray.includes(element)
        ).length,
        ...prod,
      })
    );
    return productsCoincidences.sort(function (a, b) {
      return parseFloat(b.coincidencias) - parseFloat(a.coincidencias);
    });
  };

  useEffect(() => {
    if (filterData.length !== 0 && !search && !category) {
      setProducts(filterData);
      setLoading(false);
      
    } else if (search) {
      getProductsByKeywords(search.toLowerCase().split(" ")).then(
        (response) => {
          setProducts(orderProducts(response));
          setLoading(false);
        }
      );
    } else if (category) {
      getProductsByCategory(category).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getAllProducts().then((response) => {
        setProducts(response);
        setLoading(false);
      }
      )
    }
  }, [search, category, filterByMarca]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      {loading ? (
        <>
          {" "}
          <Row style={{ position: "absolute", top: "50%" }}>
            <Spinner variant="yellow" animation="grow" />
            <Spinner className="mx-5" variant="yellow" animation="grow" />
            <Spinner variant="yellow" animation="grow" />
          </Row>
        </>
      ) : products.length !== 0 ? (
        <Productos data={products} />
      ) : (
        <div style={{ color: "white", margin: "15px" }}>
          <span>No se encontraron resultados</span>
        </div>
      )}
    </div>
  );
};
