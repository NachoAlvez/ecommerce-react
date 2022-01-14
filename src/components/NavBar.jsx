import React from "react";
import Carrito from "./CartWidget";




export default function NavBar() {
    return(
       
        <div class="container-bg">

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="a">LUFFE VELAS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="a">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="a">Productos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="a">Customizá tu vela</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="a">Contacto</a>
                            </li>
                            <Carrito />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}