import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/firebaseconfig";
import {
	collection,
	onSnapshot,
	doc,
	deleteDoc,
	updateDoc,
	addDoc,
} from "firebase/firestore";
import TablaEtiqueta from "../../Tablas/TablaEtiqueta";
import GenerarUrl from "../../../Utilidades/GenerarUrl";
// import "./Etiquetas.css";
import { Container, Table, Form, Button } from "react-bootstrap";

const initEtiqueta = {
	nombre: "",
	urlEtiqueta: "",
	descripcion: "",
};

const Etiquetas = () => {
	const [etiquetas, setEtiquetas] = useState([]);
	const [formEtiqueta, setFormEtiqueta] = useState(initEtiqueta);
	const [modoEdicion, setModoEdicion] = useState(false);

	useEffect(() => {
		onSnapshot(collection(db, "Etiquetas"), (snapshot) => {
			setEtiquetas(
				snapshot.docs.map((doc) => ({
					IdEtiqueta: doc.id,
					...doc.data(),
				}))
			);
		});
	}, []);

	const cambiarDatos = (e) => {
		const { name, value } = e.target;
		setFormEtiqueta({
			...formEtiqueta,
			[name]: value,
		});
	};

	const activarEdicion = (etiqueta) => {
		setModoEdicion(true);
		const etiquetaEditada = {
			idEtiqueta: etiqueta.IdEtiqueta,
			nombre: etiqueta.Nombre,
			urlEtiqueta: etiqueta.UrlEtiqueta,
			descripcion: etiqueta.Descripcion,
		};
		setFormEtiqueta(etiquetaEditada);
	};

	function cancelarEditar(e) {
		e.preventDefault();
		setModoEdicion(false);
		setFormEtiqueta(initEtiqueta);
	}

	function onBlur() {
		setFormEtiqueta({
			...formEtiqueta,
			urlEtiqueta: GenerarUrl(formEtiqueta.nombre),
		});
	}

	const eliminarEtiqueta = async (idEtiqueta) => {
		await deleteDoc(doc(db, "Etiquetas", idEtiqueta));
	};

	const editarEtiqueta = async (e) => {
		e.preventDefault();
		const categoriaRef = doc(db, "Etiquetas", formEtiqueta.IdEtiqueta);
		await updateDoc(categoriaRef, {
			Nombre: formEtiqueta.nombre,
			UrIEtiqueta: formEtiqueta.urlEtiqueta,
			Descripcion: formEtiqueta.descripcion,
		});
		setModoEdicion(false);
		setFormEtiqueta(initEtiqueta);
	};

	const crearEtiqueta = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "Etiquetas"), {
				Nombre: formEtiqueta.nombre,
				UrlEtiqueta: formEtiqueta.urlEtiqueta,
				Descripcion: formEtiqueta.descripcion,
			});
		} catch (e) {
			console.error("Error al agregar etiqueta ", e);
		}
		setFormEtiqueta(initEtiqueta);
	};

	return (
		<Container>
			<div>
				<h2> Etiquetas</h2>
				<Form onSubmit={modoEdicion ? editarEtiqueta : crearEtiqueta}>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							required
							type="text"
							name="nombre"
							placeholder="Ej: raytracing"
							value={formEtiqueta.nombre}
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
							defaultValue={GenerarUrl(formEtiqueta.nombre)}
							placeholder="Ej: master-race"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Descripción</Form.Label>
						<Form.Control
							required
							type="text"
							name="descripcion"
							placeholder="Ej: Tecnología utilizada por NVIDIA"
							value={formEtiqueta.descripcion}
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
				{etiquetas?.length === 0 ? (
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
							{etiquetas.map((etiqueta) => (
								<tr>
									<td>{etiqueta.IdEtiqueta}</td>
									<td>{etiqueta.Nombre}</td>
									<td>{etiqueta.Descripcion}</td>
									<td>{etiqueta.UrlEtiqueta}</td>
									<td>
										<Button
											variant="outline-info"
											onClick={() => activarEdicion(etiqueta)}
										>
											Editar
										</Button>
                    <Button
											variant="outline-danger"
											onClick={() => eliminarEtiqueta(etiqueta.IdEtiqueta)}
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

export default Etiquetas;
