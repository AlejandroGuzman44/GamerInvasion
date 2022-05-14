import { Link } from "react-router-dom";

function AdminHome () {
    return(
        <>
            <h1>Admin HomePage</h1>
            <nav ><Link to="/Administrador/Etiquetas">ETIQUETAS</Link></nav>
            <nav ><Link to="/Administrador/Categorias">CATEGORIAS</Link></nav>
        </>
        
        
    )
}

export default AdminHome;