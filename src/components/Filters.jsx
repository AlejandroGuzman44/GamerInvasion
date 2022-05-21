import data from './useFetch';
import CheckBoxes from './CheckBoxes';
import React, { Component, useState } from 'react'


  const brandArray = [];
  
  data.map(producto => {brandArray.push(producto.Marca)});             

  const brandCheckBoxArray = [...new Set(brandArray)];


  const checkboxesData = brandCheckBoxArray;



export default class Filters extends Component {


  render() {
    return (
      <>

        <h1>Nombre</h1>
          <form>
            {brandCheckBoxArray.map((marca, index) => {
              return(
                <CheckBoxes key={index} value = {marca}/>
              )
            })}
          </form>
      </>
    )
  }
};


