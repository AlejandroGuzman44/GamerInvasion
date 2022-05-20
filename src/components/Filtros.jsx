import data from './useFetch.json';
import React from 'react';
import Filter from './Filter';

function Filtros() {

  const brandArray = [];
  const typeArray = []
  
  data.map(product => {brandArray.push(product.name)});               //Cambiar en base a los productos
  data.map(product => {typeArray.push(product.company.name)});        //Cambiar en base a los productos

  const brandCheckBoxArray = [...new Set(brandArray)];
  const typeCheckBoxArray = [...new Set(typeArray)];



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