import RadioButton from './RadioButton';
import React, { Component, useState, useEffect, useContext } from 'react'
import { Contexto } from "../components/context2.0/Contexto"
import { Productos } from "../components/Productos/Productos"
import { useNavigate, useSearchParams, } from 'react-router-dom';

export const Filters = (props) => {

  const { products, setProducts, filterByMarca, emptyFilterData } = useContext(Contexto);
  const navigate = useNavigate();
  const [data, setData] = useState(props.productos);
  const [value, setValue] = useState("")

  const getBrands = () => {
    const brandArray = [];
    data.forEach(product => brandArray.push(product.Marca.toLowerCase()))
    const auxArray = [...new Set(brandArray)]
    return auxArray
  }


  useEffect(() => {
    setData(props.productos)
  }, [props.productos]);


  const filtradoMarca = (marca) => {
    return products.filter(producto => producto.Marca === marca)
  }

  const filtradoPrecio = (opcion) => {
    if (opcion === 1) {
      return products.filter(producto => parseInt(producto.Precio) <= 500)
    } else if (opcion === 2) {
      return products.filter(producto => parseInt(producto.Precio) > 500 && parseInt(producto.Precio) <= 1000)
    } else {
      return products.filter(producto => parseInt(producto.Precio) > 1000)
    }
  }


  const onChangeValueMarca = (event) => {
    const marca = event.target.value
    const productosFiltrados = filtradoMarca(marca)
    navigate("/store/filters?brand=" + marca, {
      state: {
        datos: productosFiltrados
      }
    })
  }

  const onChangeValuePrecio = (event) => {
    const precio = event.target.value
    const productosFiltrados = filtradoPrecio(parseInt(precio))
    navigate("/store/filters?price=" + precio, {
      state: {
        datos: productosFiltrados
      }
    })
  }

  return (
    <>
      <div>
        <h3>
          Marcas
        </h3>
        <form onChange={onChangeValueMarca}>
          {getBrands().map(marca => <RadioButton value={marca} />)}
        </form>
        <h3>
          Precios
        </h3>
        <form onChange={onChangeValuePrecio}>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1} />
            <label class="form-check-label" for="flexRadioDefault1">
              Menor 500$
            </label>

          </div>
          <div class="form-check">

            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={2} />
            <label class="form-check-label" for="flexRadioDefault1">
              Entre 501-1000$
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={3} />
            <label class="form-check-label" for="flexRadioDefault1">
              Mayor 1000$
            </label>
          </div>
        </form>
      </div>
    </>
  );
};





// const renderRadio = (marca) => {
//   return (
//     <div>
//       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={marca} />
//       <label class="form-check-label" for="flexRadioDefault1">
//         {marca}
//       </label>
//     </div>
//   )
// }