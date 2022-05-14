import React,{useState, useEffect} from "react";
import {db} from "../../../firebase/firebaseconfig";
import{collection, onSnapshot, doc, deleteDoc, updateDoc, addDoc}from "firebase/firestore";   
//import TablaEtiqueta from "../../Tablas/TablaEtiqueta"
import GenerarUrl from "../../../Utilidades/GenerarUrl";
// import "./Categorias.css";

const initCategoria = {
  nombre: "",
  urlCategoria: "",
  descripcion: "",
};

const Categorias = () => {
  const [categorias, setCategorias]=useState( []);
  const [formCategoria, setFormCategoria] = useState(initCategoria);
  const [modoEdicion, setModoEdicion]= useState(false);

  useEffect (() => {
   onSnapshot (collection (db, "Categorias"), (snapshot) =>{
      setCategorias(
        snapshot.docs.map((doc) => ({
          IdCategoria: doc.id,
           ...doc.data(),
        }))
      );
  });
}, []);

  const cambiarDatos=(e) => {
    const{name, value}=e.target;
    setFormCategoria({
      ...formCategoria,
      [name]: value,
    });
    };

  const activarEdicion=(categoria) =>{
    setModoEdicion(true);
    const categoriaEditada={
      idCategoria: categoria.IdCategoria,
      nombre: categoria.Nombre,
      urlCategoria: categoria.UrlCategoria,
      descripcion: categoria.Descripcion,
    };
    setFormCategoria(categoriaEditada);
    };

  function cancelarEditar (e)   {
    e.preventDefault();
    setModoEdicion(false);
    setFormCategoria (initCategoria);
  }

  function onBlur () {
    setFormCategoria({
       ...formCategoria,
       urlCategoria: GenerarUrl(formCategoria.nombre),
     });
    }

    const eliminarCategoria=async (idCategoria) => {
        await deleteDoc (doc(db, "Categorias", idCategoria));
    };

    const editarCategoria = async (e) => {
       e.preventDefault ();
       const categoriaRef = doc (db, "Categorias", formCategoria.IdCategoria);
       await updateDoc(categoriaRef, {
          Nombre: formCategoria.nombre,
          UrICategoria: formCategoria.urlCategoria,
          Descripcion: formCategoria.descripcion,
       });
       setModoEdicion (false);
       setFormCategoria (initCategoria); 
    }; 

    const crearCategoria = async (e) => {
        console.log(formCategoria.nombre);
        console.log(formCategoria.urlCategoria);
        console.log(formCategoria.descripcion);
        e.preventDefault();
        try{
          await addDoc(collection (db, "Categorias"), {
            Nombre: formCategoria.nombre,
            UrlCategoria: formCategoria.urlCategoria,
            Descripcion: formCategoria.descripcion,
        });
         }catch (e){
           console.error ("Error al agregar categoria ", e);
         }
        setFormCategoria(initCategoria);
        console.log('REGISTRO EXITOSO');
    };
    

    return(
        <>
          <div className="contenedor-categoria">
            <h2> Categorias</h2>
            <form onSubmit={modoEdicion ? editarCategoria : crearCategoria}>
              <div className="contenedor-categoria-item">
                <h4> Nombre:</h4>
                <input
                  type="text"
                  required
                  name="nombre"
                  value={formCategoria.nombre}
                  onChange={cambiarDatos}
                  placeholder="Escribe el nombre de la categoria"
                  onBlur={onBlur}
                />
              </div>
              <div className="contenedor-categoria-item">
                <h4> URL:</h4>
                <input
                  type="text"
                  disabled
                  required
                  defaultValue={GenerarUrl(formCategoria.nombre)}
                  placeholder="Url de la categoria"
                />
              </div>
              <div className="contenedor-categoria-item">
                <h4> Descripción:</h4>
                <textarea
                name="descripcion"
                required
                value={formCategoria.descripcion}
                onChange={cambiarDatos}
                placeholder="Describe la categoria"
                ></textarea>
              </div>
                <div className="contenedor-categoria-item">
                <input style={{backgroundColor: "red"}} type="submit" value={modoEdicion ? "Editar" : "Crear"}></input>
                {modoEdicion && <button style={{backgroundColor: "black"}} onClick={cancelarEditar}>Cancelar</button>}
                </div>
            </form>

            {/* {categorias?.length === 0 ? (
              <></>
            ) : (
              <TablaEtiqueta
                etiquetas={categorias}
                eliminar={eliminarCategoria}
                activarEdicion={activarEdicion}
                />
            )} */}

        </div>
        </>
    );
};

export default Categorias;
