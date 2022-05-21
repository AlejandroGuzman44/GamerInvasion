import data from './useFetch.json';
import React from 'react';
import Filter from './Filter';

function Filtros() {

  const brandArray = [];
  const typeArray = []
  
  data.map(product => {brandArray.push(product.Marca)});               //Cambiar en base a los productos
  
  const brandCheckBoxArray = [...new Set(brandArray)];

  return (
    <div>
        {brandCheckBoxArray.map((brand, index) => {
          return(
            <Filter key={index} value = {brand}/>
          )
        })}
    </div>
  )
}

export default Filtros