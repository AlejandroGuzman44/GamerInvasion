import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { ContextoCarrito } from "../../Context/ContextoCarrito";
import styles from "./styles.module.scss";

export const ProductoCarritoMin = ({ item }) => {
  const { agregarProductoCarrito, eliminarProductoCarrito } =
    useContext(ContextoCarrito);

  const { id } = item;

  return (
    <div className={styles.productoCarrito}>
      <div className="m-0">
        <img src={item.ImagenesUrl[0]} alt="producto" />
      </div>

      <div className={styles.contendorDeDatos}>
        <div className={styles.izquierda}>
          <p>{item.Nombre}</p>
          <div className={styles.botones}>
            <Button onClick={() => agregarProductoCarrito(item)}>
              Agregar
            </Button>
            <Button onClick={() => eliminarProductoCarrito(item)}>
              Eliminar
            </Button>
          </div>
        </div>
          <div className={styles.derecha}>
            <div className={styles.numerito}>{item.amount}</div>
            <p style={{fontWeight:"bold"}}>Total</p>
            <p>{item.amount * item.Precio}$</p>
          </div>
      </div>
    </div>
  );
};
