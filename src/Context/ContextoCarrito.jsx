import { useEffect, useState, createContext } from "react";


export const ContextoCarrito = createContext();

export const ContextoCarritoProvider = ({ children }) => {

    const [productoCarrito, setproductoCarrito] = useState(() => {

        try {

            const productosLocalStorage = localStorage.getItem("productosCarrito");
            return productosLocalStorage ? JSON.parse(productosLocalStorage) : [];


        } catch (error) {
            return [];
        }


    });


    useEffect(() => {
        localStorage.setItem("productosCarrito", JSON.stringify(productoCarrito));
        console.log(productoCarrito);
    }, [productoCarrito]);


    const agregarProductoCarrito = (producto) => {
        const enCarrito = productoCarrito.find((productoEnCarrito) => productoEnCarrito.id === producto.id);

        if (enCarrito) {
            setproductoCarrito(
                productoCarrito.map((productoEnCarrito) => {
                    if (productoEnCarrito.id === producto.id) {
                        return { ...productoEnCarrito, amount: productoEnCarrito.amount + 1 };
                    } else return productoEnCarrito;
                }));

        } else {
            setproductoCarrito([...productoCarrito, { ...producto, amount: 1 }]);
        };


    };

    const eliminarProductoCarrito = (producto) => {
        const enCarrito = productoCarrito.find((productoEnCarrito) => productoEnCarrito.id === producto.id);

        if (enCarrito.amount === 1) {
            setproductoCarrito(
                productoCarrito.filter(productoEnCarrito => productoEnCarrito.id !== producto.id)
            );
        } else {
            setproductoCarrito((productoEnCarrito) => {
                if (productoEnCarrito.id === producto.id) {
                    return { ...enCarrito, amount: enCarrito.amount - 1 }
                } else return productoEnCarrito
            });
        }
    };


    return (
        <ContextoCarrito.Provider value={{ productoCarrito, agregarProductoCarrito, eliminarProductoCarrito }}>
            {children}
        </ContextoCarrito.Provider>
    )

};




