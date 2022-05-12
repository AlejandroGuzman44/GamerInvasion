import React from "react";

export const Product_detail = () => {
  return (
    <>
      <div class="card">
        <div class="row no-gutters">
          <aside class="col-md-6">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <a href="#">
                  <img src="./images/items/12.jpg" />
                </a>
              </div>
            </article>
          </aside>
          <main class="col-md-6 border-left" />
          <article class="content-body" />

          <h2 class="title">Nombre del producto</h2>

          <div class="mb-3">
            <var class="price h4">Precio</var>
          </div>

          <p>Descripcion</p>

          <hr />
          <div class="row">
            <div class="item-option-select">
              <h6>Selecciona el color</h6>
              <div
                class="btn-group btn-group-sm btn-group-toggle"
                data-toggle="buttons"
              >
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Color
                </label>
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Color
                </label>
                <label class="btn btn-light active">
                  <input type="radio" name="radio_color checked" /> Color
                </label>
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Color
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="item-option-select">
              <h6>Seleccionar tamaño</h6>
              <div
                class="btn-group btn-group-sm btn-group-toggle"
                data-toggle="buttons"
              >
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Tamaño
                </label>
                <label class="btn btn-light active">
                  <input type="radio" name="radio_color" checked /> Tamaño
                </label>
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Tamaño
                </label>
                <label class="btn btn-light">
                  <input type="radio" name="radio_color" /> Tamaño
                </label>
              </div>
            </div>
          </div>
          <hr />
          <a href="./product-detail.html" class="btn  btn-primary">
            {" "}
            <span class="text">Agregar al carrito</span>{" "}
            <i class="fas fa-shopping-cart"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
};
