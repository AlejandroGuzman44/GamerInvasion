import React, {useState,useEffect,useRef} from"react";
//import{useHistory}from"react-router-dom";
import{
  productoUno,
  //productoEditarCF,
  productoEditarSF,
} from"../../../controllers/Productos";
import {categoriasTodas} from"../../../controllers/Categorias";
import {etiquetasTodas} from"../../../controllers/Etiquetas";
import GenerarUrl from "../../../Utilidades/GenerarUrl"
import {useParams } from 'react-router-dom';

/*ESTADO INICIAL FORMULARIO PRODUCTO*/
const initFormCategoria={
  nombre: "",
  urlProducto: "",
  marca: "",
  precio: 0,
  cantidad: 0,
  descripcion:"",
};

const EditarProductos = () => {
    //const history=useHistory();
    const {idProductoUrl} = useParams();
    const [categorias,setCategorias] = useState([]);
    const [categoriaSelect,setCategoriaSelect] = useState();
    const [estadoEtiqueta,setEstadoEtiqueta] = useState(false);
    const [etiquetas,setEtiquetas] = useState([]);
    const [formEtiqueta,setFormEtiqueta] = useState({});
    const [formProducto,setFormProducto] = useState(initFormCategoria);
    const [fotos,setFotos] = useState([]);
    const [fotosVista,setFotosVista] = useState([]);
    const imagenRef = useRef();

    useEffect(() => {
        (async () => {
            const productoDB = await productoUno(idProductoUrl);
            setFormProducto({
                idProducto: idProductoUrl,
                nombre: productoDB.Nombre,
                urlProducto: productoDB.UrlProducto,
                marca: productoDB.Marca,
                precio: productoDB.Precio,
                cantidad: productoDB.Cantidad,
                descripcion: productoDB.Descripcion,
            });
            setCategoriaSelect (productoDB.Categoria);
            var etiquetaGuardar = productoDB.Etiqueta.reduce((json, value, key) => {
                json[value] = true;
                return json;
            }, {});
            setFormEtiqueta(etiquetaGuardar);
            setFotos(productoDB.ImagenesUrl);
            setFotosVista(productoDB.ImagenesUrl);
            const categoriaDB = await categoriasTodas ();
            setCategorias (categoriaDB);
            const etiquetaDB = await etiquetasTodas ();
            setEtiquetas(etiquetaDB);
            })();
    }, [idProductoUrl]);

    const cambiarDatos = (e) => {
        const {name,value} = e.target;
        setFormProducto({
          ...formProducto,
          [name]: value,
        });
    };

    const cambiarFotos = (e) => {
        if(e.target.files){
            const fotosArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
        );
        const fotosArray2 = Array.from(e.target.files);

        setFotos((prevImages) => prevImages.concat(fotosArray));
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));

        setFotosVista((prevImages) => prevImages.concat(fotosArray2));
        }
    };

    const cambiarCategoria = (e) => {
        setCategoriaSelect(e.target.value);
    };

    const abrirEtiqueta = () => {
        setEstadoEtiqueta(!estadoEtiqueta);
    };

    const cambiarEtiqueta = (event) => {
        setFormEtiqueta({
            ...formEtiqueta,
            [event.target.name]: event.target.checked,
         });
    };

    function escogerEtiqueta(etiquetasSeleccionadas) {
        const etiquetaArray = Object.entries(etiquetasSeleccionadas);
        const etiquetaFiltrada = etiquetaArray.filter(function ([key, value]){
          return value === true;
        });
        const etiquetasEnviar = Object.keys (Object.fromEntries (etiquetaFiltrada));
        return etiquetasEnviar;
    }

    const eliminarFoto = (index) => {
        if (index > -1) {
            const nuevaFotoArray = [...fotos];
            nuevaFotoArray.splice(index, 1);
            setFotos(nuevaFotoArray);

            const nuevaFotoArray2 = [...fotosVista];
            nuevaFotoArray2.splice(index, 1);
            setFotosVista(nuevaFotoArray2);
        }
        imagenRef.current.value = "";
    };

    function igualarEtiqueta(formEtiqueta, etiquetaMap) {
        var verifica = false;
        Object.entries(formEtiqueta).forEach(([key, value]) => {
            if (key === etiquetaMap && value === true) {
                verifica = true;
                return true;
            } else {
                return false;
            }
        });
        return verifica;
    }

    function buscarImg (letra){
        var similar = fotos.filter((objeto) => {
            return objeto.includes(letra);
        });
        return similar;
    }
       
    function onBlur () {
        setFormProducto({
            ...formProducto,
            urlProducto: GenerarUrl(formProducto.nombre),
        });
    }

    const editarProducto = (e) => {
        e.preventDefault();
        const etiquetaFinal = escogerEtiqueta(formEtiqueta);
        const fotosAntiguas = buscarImg("firebasestorage");
        const buscarImgBlob = buscarImg("blob");

        //if(buscarImgBlob.length === 0) {
            productoEditarSF(
                formProducto,
                categoriaSelect,
                etiquetaFinal,
                fotosVista
            );
        // } else if(buscarImgBlob.length !== 0) {
        //     const fotosNuevas = fotosVista.splice(
        //         fotosAntiguas.length,
        //         buscarImgBlob.length
        // );
        // productoEditarCF(
        //     formProducto,
        //     categoriaSelect,
        //     etiquetaFinal,
        //     fotosAntiguas,
        //     fotosNuevas
        // );
        // }
        // setFotos([]);
        // setFotosVista([]);
        // imagenRef.current.value = "";
        // //history.push(`/administrador/Productos`);
    };

    return (
        <>
            <div className="contenedor-crear-categorias">
                <h2>Editar Producto</h2>
                <form onSubmit= {editarProducto}>
                    <h4>Nombre:</h4>
                    <input
                        type="text"
                        required
                        name="nombre"
                        placeholder="Nombre del producto"
                        value={formProducto.nombre}
                        onChange={cambiarDatos}
                        onBlur = {onBlur}
                    />
                    <h4>URL:</h4>
                    <input
                        type = "text"
                        disabled
                        required
                        defaultValue = {GenerarUrl(formProducto.nombre)}
                        placeholder = "URL del producto"
                    />
                    <h4>Categoria:</h4>
                    <select onChange = {cambiarCategoria} value={categoriaSelect}>
                        {categorias?.length === 0 ? (
                            <option defaultValue = {false}>No tiene categorias</option>
                        ):(
                            categorias.map((categoria) => (
                                <option key = {categoria.IdCategoria} value = {categoria.Nombre}>
                                    {categoria.Nombre}
                                </option>
                            ))
                        )}
                    </select>
                    <h4>Etiqueta:</h4>
                    <div>
                        <div className= "contenedor-select" onClick={abrirEtiqueta}>
                            <select>
                                {etiquetas?.length === 0 ? (
                                    <option defaultValue = {false}> No tiene etiquetas</option>
                                ):(
                                    <option> Selecciona una etiqueta</option>
                                )}
                            </select>
                            <div className="ocultar-select"></div>
                        </div>
                        <div
                            className = "contenedor-check"
                            style = {{
                            display:
                                estadoEtiqueta && etiquetas.length !== 0 ? "block" : "none",
                            }}
                        >
                            {etiquetas.map((etiqueta) => (
                                <label key = {etiqueta.IdEtiqueta}>
                                    {etiqueta.Nombre}
                                    <input
                                        type="checkbox"
                                        name = {etiqueta.Nombre}
                                        checked = {igualarEtiqueta(formEtiqueta,etiqueta.Nombre)}
                                        onChange = {cambiarEtiqueta}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                    <h4> Marca:</h4>
                    <input
                        type= "text"
                        required
                        name= "marca"
                        placeholder= "Marca del producto"
                        value = {formProducto.marca}
                        onChange = {cambiarDatos}
                    />
                    <h4> Precio:</h4>
                    <input
                        type="number"
                        required
                        name="precio"
                        placeholder="Precio del producto"
                        step={1}
                        precision={2}
                        min={1}
                        value = {formProducto.precio}
                        onChange={cambiarDatos}
                    />
                    <h4>Cantidad:</h4>
                    <input
                        type= "number"
                        required
                        name= "cantidad"
                        placeholder= "Cantidad de productos"
                        min={1}
                        step={1}
                        value={formProducto.cantidad}
                        onChange={cambiarDatos}
                    />
                    <h4> Descripción:</h4>
                    <textarea
                        name= "descripcion"
                        required
                        cols= "30"
                        rows= "4"
                        placeholder= "Describe el producto"
                        value= {formProducto.descripcion}
                        onChange= {cambiarDatos}
                    ></textarea>
                    <h4> Imagenes:</h4>
                    <input
                        ref={imagenRef}
                        type= "file"
                        id= "file"
                        multiple
                        onChange= {cambiarFotos}
                    />
                    <div className= "cantenedor-imagenes-categorias">
                        <div className= "contenedor-card-categorias">
                            {fotos.map((photo, index) => (
                                <div key={index}>
                                    <img src = {photo} alt= "" />
                                    <div
                                        onClick = {() => eliminarFoto(index)}
                                        className= {"boton-eliminar"}
                                    >
                                        Eliminar
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <input
                        className= "boton-formulario"
                        type= "submit"
                        value="Editar Producto"
                    />     
                    </form>     
            </div>
        </>
    );
};

export default EditarProductos;