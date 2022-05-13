import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Product_detail } from './Product_detail';
import { Checkout } from './Checkout';
import { Store } from './Store';
import { Rutas } from "./Rutas";

export const Cart = () => {
	return (

		<div>



			<section class="section-content padding-y bg">
				<div class="container">

					<div class="row">
						<aside class="col-lg-9">
							<div class="card">
								<table class="table table-borderless table-shopping-cart">
									<thead class="text-muted">
										<tr class="small text-uppercase">
											<th scope="col">Product</th>
											<th scope="col" width="120">Cantidad</th>
											<th scope="col" width="120">Precio</th>
											<th scope="col" class="text-right" width="200"> </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<figure class="itemside align-items-center">
													<div class="aside"><img src="./images/items/11.jpg" class="img-sm" /></div>
													<figcaption class="info">
														<NavLink class="title text-dark" to="/producto_detalle">Producto</NavLink>

													</figcaption>
												</figure>
											</td>
											<td>
												<div class="col">
													<div class="input-group input-spinner">
														<div class="input-group-prepend">
															<button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
														</div>
														<input type="text" class="form-control" value="1" />
														<div class="input-group-append">
															<button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="price-wrap">
													<var class="price">Precio</var>
													<small class="text-muted">Monto </small>
												</div>
											</td>
											<td class="text-right">
												<a class="btn btn-danger">Eliminar</a>
											</td>
										</tr>
										<tr>
											<td>
												<figure class="itemside align-items-center">
													<div class="aside"><img src="./images/items/10.jpg" class="img-sm" /></div>
													<figcaption class="info">
														<NavLink class="title text-dark" to="/producto_detalle">ADATA Premier ONE microSDXC</NavLink>
														<p class="text-muted small">Size: 256 GB  <br /> Brand: ADATA </p>
													</figcaption>
												</figure>
											</td>
											<td>

												<div class="col">
													<div class="input-group input-spinner">
														<div class="input-group-prepend">
															<button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
														</div>
														<input type="text" class="form-control" value="1" />
														<div class="input-group-append">
															<button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="price-wrap">
													<var class="price">$149.97</var>
													<small class="text-muted"> $75.00 each </small>
												</div>
											</td>
											<td class="text-right">
												<a class="btn btn-danger"> Eliminar</a>
											</td>
										</tr>
										<tr>
											<td>
												<figure class="itemside align-items-center">
													<div class="aside"><img src="./images/items/9.jpg" class="img-sm" /></div>
													<figcaption class="info">
														<NavLink class="title text-dark" to="/producto_detalle">Logitec headset for gaming</NavLink>
														<p class="small text-muted">Version: CUH-ZCT2E  <br /> Brand: Sony</p>
													</figcaption>
												</figure>
											</td>
											<td>
												<div class="col">
													<div class="input-group input-spinner">
														<div class="input-group-prepend">
															<button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
														</div>
														<input type="text" class="form-control" value="1" />
														<div class="input-group-append">
															<button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div class="price-wrap">
													<var class="price">$98.00</var>
													<small class="text-muted"> $578.00 each</small>
												</div>
											</td>
											<td class="text-right">
												<a class="btn btn-danger"> Eliminar</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</aside>
						<aside class="col-lg-3">

							<div class="card">
								<div class="card-body">
									<dl class="dlist-align">
										<dt>Precio total:</dt>
										<dd class="text-right">Precio</dd>
									</dl>
									<dl class="dlist-align">
										<dt>Tax:</dt>
										<dd class="text-right">Precio</dd>
									</dl>
									<dl class="dlist-align">
										<dt>Total:</dt>
										<dd class="text-right text-dark b"><strong>Monto total</strong></dd>
									</dl>
									<hr />
									<p class="text-center mb-3">
										<img src="./images/misc/payments.png" height="26" />
									</p>
									<NavLink class="btn btn-primary btn-block" to="/pedido"> Checkout </NavLink>
									<NavLink class="btn btn-light btn-block" to="/store">Seguir comprando</NavLink>
								</div>
							</div>

						</aside>


					</div>


				</div>
			</section>



		</div>


	)
}
