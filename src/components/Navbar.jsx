import React from "react";

export const Navbar = () => {
  return (
    <>
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
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="./store.html" class="btn btn-outline-primary">
              Tienda
            </a>
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
                    <button class="btn btn-primary" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
              <div class="d-flex justify-content-end mb-3 mb-lg-0">
                <div class="widget-header">
                  <small class="title text-muted">Bienvenido visitante!</small>
                  <div>
                    <a href="./signin.html">Login</a>{" "}
                    <span class="dark-transp"> | </span>
                    <a href="./register.html"> Registrar</a>
                  </div>
                </div>
                <a href="./cart.html" class="widget-header pl-3 ml-3">
                  <div class="icon icon-sm rounded-circle border">
                    <i class="fa fa-shopping-cart"></i>
                  </div>
                  <span class="badge badge-pill badge-danger notify">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
