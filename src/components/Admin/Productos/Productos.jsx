import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {productoEliminar} from "../../../controllers/Productos";
import {db} from "../../../firebase/firebaseconfig";
import {collection, onSnapshot} from "firebase/firestore";
import TablaProducto from "../../../components/Tablas/TablaProducto";

const Productos = () => {
    const [productos, setProductos] = useState( []);
    useEffect(() => {
        onSnapshot (collection (db, "Productos"), (snapshot) =>{
            setProductos(
                snapshot.docs.map((doc) => ({
                    IdProducto: doc.id,
                    ...doc.data(),
                }))
            );
        });
    }, []);

    const eliminarProducto = (idProducto) =>{
        productoEliminar(idProducto)
    };

    return(
        <>
            <h2> Productos </h2>
            <Link to="/administrador/productos-crear">
                <button className="boton-formulario"> AGREGAR NUEVO PRODUCTO </button>
            </Link>
      {productos?.length === 0?(
         <></>
      ):(
         <TablaProducto productos={productos} eliminar={eliminarProducto} />
      )}
    </>
    );
};
export default Productos