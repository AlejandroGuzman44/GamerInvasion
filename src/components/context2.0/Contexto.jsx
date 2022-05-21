import { useEffect, useState, createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = (props) => {

    const [products, setProducts] = useState({});
    

    return (
        <Contexto.Provider value={{products, setProducts}}>
            {props.children}
        </Contexto.Provider>
    )
}
