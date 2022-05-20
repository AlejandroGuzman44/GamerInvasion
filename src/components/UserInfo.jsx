import React, { useEffect } from 'react';
import data from './useFetch.json';
import { useContext } from 'react';
import ProductsContext from './context/Products/ProductsContext'

const UserInfo =()=> {
 
  const { products, getFilteredProducts } = useContext(ProductsContext)

  useEffect(() => {
  
  getFilteredProducts();
  console.log(products)

  },[])
  
  return (                                                        //Cambiar en base a los productos
    <div>
        {data.map((user, index) => {
            return(
                <div key={index}>
                    <h3>{user.id}-. {user.name}</h3>            
                    
                </div>
            )
        })}
    </div>
  )
}

export default UserInfo

//marca: combobox
//precio: rango
//checkboxes