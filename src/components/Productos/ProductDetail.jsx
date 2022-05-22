import React from "react";
import Modal from 'react-modal';
import { Button, Row, Col, Container, CloseButton } from "react-bootstrap";
import { useContext, useState } from "react";
import "./ProductDetail.css";

import { ContextoCarrito } from "../../Context/ContextoCarrito";

export const ProductDetail = (props) => {
  
  const customStyles = {
    content: {
      top: '20%',
      left: '15%',
      right: 'auto',
      bottom: 'auto',
      width: '70%',
      height: '60%'
    },
  };
  const { agregarProductoCarrito } = useContext(ContextoCarrito);
  const producto = props.producto;

  const [modalIsOpen, setIsOpen] = useState(props.modalIsOpen);

  function cerrarDetalle() {
    setIsOpen(false);
  }

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarDetalle}
        style={customStyles}
        contentLabel="Detalle del producto"
      >
        <Container>
          <Row>
              <h2>{producto.Nombre}</h2>
              <CloseButton className="closeButton" onClick={cerrarDetalle}/>
          </Row>
          <Row>
            <Col sm={6}>
              <img src={producto.ImagenesUrl} width="100%"/>
            </Col>
            <Col>
              <h3>Marca: {producto.Marca}</h3>
              <h4>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus nisl. Vestibulum congue dignissim urna quis blandit. Curabitur ultricies metus sollicitudin nibh auctor, non congue massa scelerisque. Mauris quis efficitur ligula. Quisque id risus et ex vehicula commodo.</h4>
              <h3><b>${producto.Precio}</b></h3>
              <Button
                className="align-self-end"
                variant="cyan"
                onClick={() => agregarProductoCarrito(producto)}
              >
                Agregar al carrito
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal>
      </>
    );
};
