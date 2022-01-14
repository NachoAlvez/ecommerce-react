import React from "react";
import image from "../images/carrito.png"



export default function Carrito (){
    return (
        <>
        <li>
        <a class="nav-link" href="a">
            <img src={image} alt="carrito compras" style = {{height: "30px"}} ></img>
        </a>
        </li>
        
        </>
    )
}