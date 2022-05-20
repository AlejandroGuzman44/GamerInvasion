import data from './useFetch';
import CheckBoxes from './CheckBoxes';
import React, { Component } from 'react'


  const brandArray = [];
  const typeArray = []
  
  data.map(product => {brandArray.push(product.name)});               //Cambiar en base a los productos
  data.map(product => {typeArray.push(product.company.name)});        //Cambiar en base a los productos

  const brandCheckBoxArray = [...new Set(brandArray)];
  const typeCheckBoxArray = [...new Set(typeArray)];


  const checkboxesData = {brandCheckBoxArray, typeCheckBoxArray};


  //Cambiar en base a los productos

export default class Filters extends Component {

  render() {
    return (
      <>

        <h1>Nombre</h1>
          <div>
            {brandCheckBoxArray.map((brand, index) => {
              return(
                <CheckBoxes key={index} value = {brand}/>
              )
            })}
          </div>

          
      </>
    )
  }
};


