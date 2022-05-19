import React,{useState, useEffect} from "react";
import {db} from "../../../firebase/firebaseconfig";
import{collection, onSnapshot, doc, deleteDoc, updateDoc, addDoc}from "firebase/firestore";   
//import TablaEtiqueta from "../../Tablas/TablaEtiqueta"
import GenerarUrl from "../../../Utilidades/GenerarUrl";
// import "./Categorias.css";
import { Container, Table, Form, Button } from "react-bootstrap";

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
       const categoriaRef = doc (db, "Categorias", formCategoria.idCategoria);
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
      <Container>
			<div>
				<h2> Categorias</h2>
				<Form onSubmit={modoEdicion ? editarCategoria : crearCategoria}>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							required
							type="text"
							name="nombre"
							placeholder="Ej: PC PREBUILD"
							value={formCategoria.nombre}
							onChange={cambiarDatos}
              onBlur={onBlur}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Url</Form.Label>
						<Form.Control
							required
							disabled
							type="text"
							name="url"
							defaultValue={GenerarUrl(formCategoria.nombre)}
							placeholder="Ej: pc-prebuild"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Descripción</Form.Label>
						<Form.Control
							required
							type="text"
							name="descripcion"
							placeholder="Ej: Computadoras pre-ensambladas"
							value={formCategoria.descripcion}
							onChange={cambiarDatos}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						{modoEdicion ? "Editar" : "Crear"}
					</Button>
					{modoEdicion && (
						<Button variant="secondary" onClick={cancelarEditar}>
							Cancelar
						</Button>
					)}
				</Form>
				{categorias?.length === 0 ? (
					<></>
				) : (
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Descripcion</th>
								<th>Url</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{categorias.map((categoria) => (
								<tr>
									<td>{categoria.IdCategoria}</td>
									<td>{categoria.Nombre}</td>
									<td>{categoria.Descripcion}</td>
									<td>{categoria.UrlCategoria}</td>
									<td>
										<Button
											variant="outline-info"
											onClick={() => activarEdicion(categoria)}
										>
											Editar
										</Button>
                    <Button
											variant="outline-danger"
											onClick={() => eliminarCategoria(categoria.IdCategoria)}
										>
											Eliminar
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</div>
		</Container>
    );
};

export default Categorias;
