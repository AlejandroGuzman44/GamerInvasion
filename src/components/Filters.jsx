import RadioButton from './RadioButton';
import React, { Component, useState, useEffect, useContext } from 'react'
import { Contexto } from "../components/context2.0/Contexto"
import { Productos } from "../components/Productos/Productos"

export const Filters = (props) => {

  const { products, setProducts, filterByMarca, emptyFilterData } = useContext(Contexto);
  setProducts(props.productos)
  // setProductos(props.productos)
  const [data, setData] = useState(props.productos);
  const [value, setValue] = useState("")

  const getBrands = () => {
    const brandArray = [];
    data.forEach(product => brandArray.push(product.Marca.toLowerCase()))
    const auxArray = [...new Set(brandArray)]
    console.log(auxArray)
    return auxArray
  }


  useEffect(() => {
    setData(props.productos)
  }, [props.productos]);

  useEffect(() => {
    console.log(filterByMarca(value));
  }, [value]);


  const onChangeValue = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <div> 
        <h3>
          Marcas
        </h3>
        <form onChange={onChangeValue}>
          {getBrands().map(marca => <RadioButton value={marca} />)}
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