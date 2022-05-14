import React,{useState, useEffect} from "react";
import {db} from "../../../firebase/firebaseconfig";
import{collection, onSnapshot, doc, deleteDoc, updateDoc, addDoc}from "firebase/firestore";   
import TablaEtiqueta from "../../Tablas/TablaEtiqueta"
import GenerarUrl from "../../../Utilidades/GenerarUrl";
// import "./Etiquetas.css";

const initEtiqueta = {
  nombre: "",
  urlEtiqueta: "",
  descripcion: "",
};

const Etiquetas = () => {
  const [etiquetas, setEtiquetas]=useState( []);
  const [formEtiqueta, setFormEtiqueta] = useState(initEtiqueta);
  const [modoEdicion, setModoEdicion]= useState(false);

  useEffect (() => {
   onSnapshot (collection (db, "Etiquetas"), (snapshot) =>{
      setEtiquetas(
        snapshot.docs.map((doc) => ({
          IdEtiqueta: doc.id,
           ...doc.data(),
        }))
      );
  });
}, []);

  const cambiarDatos=(e) => {
    const{name, value}=e.target;
    setFormEtiqueta({
      ...formEtiqueta,
      [name]: value,
    });
    };

  const activarEdicion=(etiqueta) =>{
    setModoEdicion(true);
    const etiquetaEditada={
      idEtiqueta: etiqueta.IdEtiqueta,
      nombre: etiqueta.Nombre,
      urlEtiqueta: etiqueta.UrlEtiqueta,
      descripcion: etiqueta.Descripcion,
    };
    setFormEtiqueta(etiquetaEditada);
    };

  function cancelarEditar (e)   {
    e.preventDefault();
    setModoEdicion(false);
    setFormEtiqueta (initEtiqueta);
  }

  function onBlur () {
    setFormEtiqueta({
       ...formEtiqueta,
       urlEtiqueta: GenerarUrl(formEtiqueta.nombre),
     });
    }

    const eliminarEtiqueta=async (idEtiqueta) => {
        await deleteDoc (doc(db, "Etiquetas", idEtiqueta));
    };

    const editarEtiqueta = async (e) => {
       e.preventDefault ();
       const categoriaRef = doc (db, "Etiquetas", formEtiqueta.IdEtiqueta);
       await updateDoc(categoriaRef, {
          Nombre: formEtiqueta.nombre,
          UrIEtiqueta: formEtiqueta.urlEtiqueta,
          Descripcion: formEtiqueta.descripcion,
       });
       setModoEdicion (false);
       setFormEtiqueta (initEtiqueta); 
    }; 

    const crearEtiqueta = async (e) => {
        console.log(formEtiqueta.nombre);
        console.log(formEtiqueta.urlEtiqueta);
        console.log(formEtiqueta.descripcion);
        e.preventDefault();
        try{
          await addDoc(collection (db, "Etiquetas"), {
            Nombre: formEtiqueta.nombre,
            UrlEtiqueta: formEtiqueta.urlEtiqueta,
            Descripcion: formEtiqueta.descripcion,
        });
         }catch (e){
           console.error ("Error al agregar etiqueta ", e);
         }
        setFormEtiqueta(initEtiqueta);
        console.log('REGISTRO EXITOSO');
    };
    

    return(
        <>
          <div className="contenedor-etiqueta">
            <h2> Etiquetas</h2>
            <form onSubmit={modoEdicion ? editarEtiqueta : crearEtiqueta}>
              <div className="contenedor-etiqueta-item">
                <h4> Nombre:</h4>
                <input
                  type="text"
                  required
                  name="nombre"
                  value={formEtiqueta.nombre}
                  onChange={cambiarDatos}
                  placeholder="Escribe el nombre de la etiqueta"
                  onBlur={onBlur}
                />
              </div>
              <div className="contenedor-etiqueta-item">
                <h4> URL:</h4>
                <input
                  type="text"
                  disabled
                  required
                  defaultValue={GenerarUrl(formEtiqueta.nombre)}
                  placeholder="Url de la etiqueta"
                />
              </div>
              <div className="contenedor-etiqueta-item">
                <h4> Descripción:</h4>
                <textarea
                name="descripcion"
                required
                value={formEtiqueta.descripcion}
                onChange={cambiarDatos}
                placeholder="Describe la etiqueta"
                ></textarea>
              </div>
                <div className="contenedor-etiqueta-item">
                <input style={{backgroundColor: "red"}} type="submit" value={modoEdicion ? "Editar" : "Crear"}></input>
                {modoEdicion && <button style={{backgroundColor: "black"}} onClick={cancelarEditar}>Cancelar</button>}
                </div>
            </form>

            {etiquetas?.length === 0 ? (
              <></>
            ) : (
              <TablaEtiqueta
                etiquetas={etiquetas}
                eliminar={eliminarEtiqueta}
                activarEdicion={activarEdicion}
                />
            )}

        </div>
        </>
    );
};

export default Etiquetas;
