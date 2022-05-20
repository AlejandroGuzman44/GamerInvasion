import { db } from '../firebase/firebaseconfig';
import { getDocs, collection, doc, getDoc, query, where } from "firebase/firestore";


const collectionProductos = "Productos"

const getAllProducts = async () => {

    let products = [];

    const q = collection(db, collectionProductos);

    await getDocs(q).then((data) => {
        data.docs.forEach((element) => {
            products.push({ id: element.id, ...element.data() });
        });
    })
        .catch((error) => {
            console.log(error);
        });
    return products
}

const getNamesAllProducts = async () => {

    let products = [];

    const q = collection(db, collectionProductos);

    await getDocs(q).then((data) => {
        data.docs.forEach((element) => {
            products.push({ nombre: element.data().Nombre });
        });
    })
        .catch((error) => {
            console.log(error);
        });
    return products
}

const getProductsByName = async (product) => {

    const q = query(collection(db, collectionProductos), where("Nombre", "==", product));
    let products = [];

    await getDocs(q)
        .then((data) => {

            data.docs.forEach((element) => {
                products.push({ id: element.id, ...element.data(), });
            });
        })
        .catch((error) => {
            console.log(error);
        });;
    return products;
}

// const getCategoryID = async (category) => {
//     const q = query(collection(db, collectionCategorias), where("Nombre", "==", category));
//     let categoryID = 0;

//     await getDocs(q)
//         .then((data) => {
//             categoryID = data.docs[0].id
//         })
//         .catch((error) => {
//             console.log(error);
//         });;

//     return categoryID;
// }

const getProductsByCategory = async (category) => {
    const q = query(collection(db, collectionProductos), where("Categoria", "==", category));
    const products = [];

    await getDocs(q)
        .then((data) => {
            data.docs.forEach((element) => {
                products.push({ id: element.id, ...element.data(), });
            });
        })
        .catch((error) => {
            console.log(error);
        });;

    return products;
}

const getProductsByEtiqueta = async (searchInput) => {
    const q = query(collection(db, collectionProductos), where("Etiqueta", "array-contains-any", searchInput));
    let products = [];

    await getDocs(q)
        .then((data) => {

            data.docs.forEach((element) => {
                products.push({ id: element.id, ...element.data(), });
            });
        })
        .catch((error) => {
            console.log(error);
        });;

    return products
}

const getProductsByKeywords = async (searchInput) => {
    const q = query(collection(db, collectionProductos), where("Keywords", "array-contains-any", searchInput));
    let products = [];

    await getDocs(q)
        .then((data) => {

            data.docs.forEach((element) => {
                products.push({ id: element.id, ...element.data(), });
            });
        })
        .catch((error) => {
            console.log(error);
        });;
        
    return products
}

export { getAllProducts, getProductsByName, getProductsByEtiqueta, getProductsByCategory, getNamesAllProducts, getProductsByKeywords };




