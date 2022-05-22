import { useContext, useState } from "react";
import { ContextoCarrito } from "../../Context/ContextoCarrito";
import { Button, Card } from "react-bootstrap";
import { ProductDetail } from "./ProductDetail"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const ProductCard = (props) => {

  const producto = props.producto;
  const { agregarProductoCarrito } = useContext(ContextoCarrito);

  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirDetalle() {
    setIsOpen(true);
  }

  return (
    <>
      <Card
        className="m-2 p-3 text-center justify-content-center"
        onClick={abrirDetalle}
      >
        <Card.Img
          variant="top"
          src={producto.ImagenesUrl}
          alt={producto.Nombre}
          style={{ width: "15rem", height: "12rem"}}
        />
        <Card.Body>
          <Card.Title style={{ textTransform: "capitalize" , fontWeight: "bold" }}>
            {producto.Nombre}
          </Card.Title>
          <Card.Text>${producto.Precio}</Card.Text>
          <Button
            className="align-self-end"
            variant="cyan"
            onClick={(e) => agregarProductoCarrito(producto,e)}
          >
            Agregar al carrito <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Card.Body>
      </Card>
      {modalIsOpen ? (
            <ProductDetail producto={producto} modalIsOpen={modalIsOpen}></ProductDetail>
          ) : ""}
    </>
  );
};
