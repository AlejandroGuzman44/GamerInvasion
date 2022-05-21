import { useEffect, useState, createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = (props) => {

    const [products, setProducts] = useState([]);

    const [filterData, setFilterData] = useState([])

    const filterByMarca = (marca) => {
        setFilterData(products.filter(producto => producto.Marca === marca))
        return filterData
    }

    const emptyFilterData = () => {
        setFilterData([])
    }


    return (
        <Contexto.Provider value={{ products, setProducts, filterByMarca, filterData, emptyFilterData }}>
            {props.children}
        </Contexto.Provider>
    )
}
