import{
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    getDocs,
  } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL}from "firebase/storage";
import {db} from "../firebase/firebaseconfig";
const coleccion = "Productos";
const rutaFoto = "productos-imagenes";

/* CREAR UN PRODUCTO SIN IMAGEN */
export const productoCrearSF = async(
    formProducto,
    categoriaSelect,
    etiquetaFinal,
    fotosSubir
) => {
    try{
        await addDoc (collection(db, coleccion),{
            Nombre: formProducto.nombre,
            Marca: formProducto.marca,
            UrlProducto: formProducto.urlProducto,
            Descripcion: formProducto.descripcion,
            Precio: formProducto.precio,
            Cantidad: formProducto.cantidad,
            Categoria: categoriaSelect,
            Etiqueta: etiquetaFinal,
            ImagenesUrl: fotosSubir,
        });
    }catch (e) {
        console.error ("Error al agregar producto ", e);
    }
};

/*SUBIR UNA IMAGEN*/
export const productoCrearCF = (
    formProducto,
    categoriaSelect,
    etiquetaFinal,
    fotosVista
) => {
    const promises = fotosVista.map((file) => {
        const fechaAhora = Date.now();
        const rutaCompleta =  file.name + fechaAhora + file.lastModified + file.size;
        const storage = getStorage();   
        const imageRef = ref(storage, `${rutaFoto}/${rutaCompleta}`);
        return uploadBytes(imageRef,file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .catch((error)=>{
                console.error("Error al subir imagenes",error);
            });
    });
    Promise.all(promises)
        .then((linkImagenes) => {
            productoCrearSF(
                formProducto,
                categoriaSelect,
                etiquetaFinal,
                linkImagenes
            );
        })
        .catch(() => {
            return"Hubo un error";
        });
};

/* ELIMINAR UNA PRODUCTO */
export const productoEliminar = async (idProducto) =>{
    await deleteDoc (doc (db, coleccion, idProducto));
};
                    
export const productoUno = async (idProducto) =>{
    const productoRef = doc(db, coleccion, idProducto);
    const docProducto = await getDoc(productoRef);
    if (docProducto.exists()){
        return docProducto.data();
    }else{
      console.log("No existe el documento");
    }
};

/* EDITAR UN PRODUCTO SIN IMAGEN */
export const productoEditarSF = async(
    formProducto,
    categoriaSelect,
    etiquetaFinal,
    fotosAntiguas
) => {
    const productoRef = doc(db, coleccion, formProducto.idProducto)
    await updateDoc(productoRef, {
            Nombre: formProducto.nombre,
            Marca: formProducto.marca,
            UrlProducto: formProducto.urlProducto,
            Descripcion: formProducto.descripcion,
            Precio: formProducto.precio,
            Cantidad: formProducto.cantidad,
            Categoria: categoriaSelect,
            Etiqueta: etiquetaFinal,
            ImagenesUrl: fotosAntiguas,
        });
};