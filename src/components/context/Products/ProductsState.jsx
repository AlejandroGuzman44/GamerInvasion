import React, { useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import ProductContext from './ProductsContext';
import data from '../../useFetch.json';

const filteredData = []   //data de productos filtrada

const ProductsState = (props) => {
    
    const initialState = {
        products: []
    }

    const [state, dispatch] = useReducer(ProductsReducer, initialState)
    
    const getFilteredProducts = async () => {
        //.map del json con los resultados
        // pasarle el json
        console.log('prueba')
        dispatch({
            type: 'GET_FILTERES_PRODUCTS',
            payload: filteredData
        })
    }

    return(
        <ProductContext.Provider value = {{
            products: state.products,
            getFilteredProducts
            }
        }>
            {props.children}
        </ProductContext.Provider>
    )

}

export default ProductsState;