import { useContext, useState } from "react";
import { ContextoCarrito } from "../../Context/ContextoCarrito";
import {
  Button,
  Row,
  Col,
  Container,
  CloseButton,
  Card,
} from "react-bootstrap";
import { ProductDetail } from "./ProductDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "./ProductDetail.css";

export const ProductCard = (props) => {
  const producto = props.producto;
  const { agregarProductoCarrito } = useContext(ContextoCarrito);

  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirDetalle() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: "20%",
      left: "15%",
      right: "auto",
      bottom: "auto",
      width: "70%",
      height: "auto",
    },
  };

  function cerrarDetalle() {
    setIsOpen(false);
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
          style={{ width: "15rem", height: "12rem" }}
        />
        <Card.Body>
          <Card.Title
            style={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            {producto.Nombre}
          </Card.Title>
          <Card.Text>${producto.Precio}</Card.Text>
          <Button
            className="align-self-end"
            variant="cyan"
            onClick={(e) => agregarProductoCarrito(producto, e)}
          >
            Agregar al carrito <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Card.Body>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarDetalle}
        style={customStyles}
        contentLabel="Detalle del producto"
      >
        <Container md={9}>
          <Row>
            <CloseButton className="closeButton" onClick={cerrarDetalle} />
          </Row>
          <Row>
            <Col sm={5} className="text-center">
              <img src={producto.ImagenesUrl} alt="producto" height="100%" width="auto" object-fit="contain"/>
            </Col>
            <Col className="justify-content-center">
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                }}
              >
                {producto.Nombre}
              </h2>
              <h3 style={{ textTransform: "capitalize" }}>
                Marca: {producto.Marca}
              </h3>
              <h4 style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in tellus nisl. Vestibulum congue dignissim urna quis
                blandit. Curabitur ultricies metus sollicitudin nibh auctor, non
                congue massa scelerisque. Mauris quis efficitur ligula. Quisque
                id risus et ex vehicula commodo.
              </h4>
              <div className="text-center">
                <h3>
                  <b>${producto.Precio}</b>
                </h3>
                <Button
                  className="align-self-end"
                  variant="cyan"
                  onClick={() => agregarProductoCarrito(producto)}
                >
                  Agregar al carrito
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};
