import { useEffect, useState } from 'react'

export const ProductCard = (props) => {
    const { Nombre, ImagenesUrl, Precio, coincidencias } = props.product
    return (
        <div style={{"background-color": "black", width: "300px"} }>
            <h2>{Nombre}</h2>
            <h3>{Precio}$</h3>
            <img src={ImagenesUrl[0]}></img>
            <p>Coincidencias: {coincidencias}</p>
        </div>
    )
}