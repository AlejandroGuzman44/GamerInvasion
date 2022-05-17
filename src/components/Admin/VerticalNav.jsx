import { Container, Nav } from "react-bootstrap";
import { RutasAdmin } from "./RutasAdmin";

function VerticalNav() {
	return (
		<>
			<Nav className="flex-column">
				<Nav.Link href="/Administrador/Etiquetas">Etiquetas</Nav.Link>
				<Nav.Link href="/Administrador/Categorias">Categorias</Nav.Link>
			</Nav>
			<RutasAdmin></RutasAdmin>
		</>
	);
}

export default VerticalNav;