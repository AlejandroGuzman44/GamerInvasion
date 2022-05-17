import{
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
    getDocs,
} from "firebase/firestore";
import {db} from "../firebase/firebaseconfig";
const coleccion = "Etiquetas";

/* TRAER UN DOCUMENTO */
export const etiquetaUna = async (idEtiqueta) => {
    const etiquetaRef = doc (db, coleccion, idEtiqueta);
    const docEtiqueta = await getDoc (etiquetaRef);
        if (docEtiqueta.exists()){
            return docEtiqueta.data();
        } else{
            console.log("No existe el documento");
        }
};

/* TRAER UN DOCUMENTO */
export const etiquetasTodas = async () => {
    const etiquetaRef = collection(db , coleccion);
    const etiquetasDB = await getDocs(etiquetaRef);
    return etiquetasDB.docs.map((doc) => {
        const id = doc.id;
        return{
            IdEtiqueta: id,
            Nombre: doc.data().Nombre,
        };
    });
};