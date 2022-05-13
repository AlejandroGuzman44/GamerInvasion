import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Store } from "./Store";
import { Rutas } from "./Rutas";

export const Navbar = () => {
  return (
    <div>




      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-3 col-6">
              <a href="./" class="brand-wrap">
                <img class="logo" src="./images/logo01.png" />
              </a>
            </div>
            <div class="col-lg col-sm col-md col-6 flex-grow-0">
              <div class="dropdown">
                <button
                  class="btn btn-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <NavLink class="dropdown-item" to="/OptionSelected" >
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/OptionSelected">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/OptionSelected">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink class="btn btn-outline-primary" to="/store">
              Tienda
            </NavLink>
            <div class="col-lg  col-md-6 col-sm-12 col">
              <form action="#" class="search">
                <div class="input-group w-100">
                  <input
                    type="text"
                    class="form-control"
                    // style="width:60%;"
                    placeholder="Search"
                  />

                  <div class="input-group-append">
                    <NavLink class="btn btn-primary" type="submit" to="/store">
                      <i class="fa fa-search"></i>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
              <div class="d-flex justify-content-end mb-3 mb-lg-0">
                {/* <div class="widget-header">
                    <small class="title text-muted">Bienvenido visitante!</small>
                   <div>
                      <NavLink href="./signin.html">Login</NavLink>{" "}
                      <span class="dark-transp"> | </span>
                      <NavLink href="./register.html"> Registrar</NavLink>
                    </div> 
                  </div> */}
                <NavLink class="widget-header pl-3 ml-3" to="/carrito">
                  <div class="icon icon-sm rounded-circle border">
                    <i class="fa fa-shopping-cart"></i>
                  </div>
                  <span class="badge badge-pill badge-danger notify">0</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>



  );
};
