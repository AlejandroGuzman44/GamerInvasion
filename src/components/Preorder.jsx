import React from "react";

export const Preorder = () => {
  return (
    <>
      <div class="container mt-3">
        <center class="mb-2 text-warning">
          <i
            class="fas fa-check-circle"
            
          ></i>
        </center>
        <h2 class="text-center">El Pago se realizo con exito</h2>
        <br />
        <div class="text-center">
          <a href="{% url 'store' %}" class="btn btn-success">
            Sigue Comprando
          </a>
        </div>
      </div>

      <div class="container my-5 mx-auto w-50 p-3 bg-white text-dark">
        <div class="row invoice row-printable">
          <div class="col-md-12">
            <div class="panel panel-default plain" id="dash_0">
              <div class="panel-body p30">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="invoice-logo">
                      <img
                        src="/images/logo.png"
                        alt="Invoice logo"
                        
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="invoice-from">
                      <ul class="list-unstyled text-right">
                        <li>
                          <strong>Factura a nombre de</strong>
                        </li>
                        <li>Nombre persona</li>
                        <li>Calle</li>
                        <li>Ciudad</li>
                        <li>Pais</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="invoice-details mt25">
                      <div class="well">
                        <ul class="list-unstyled mb0">
                          <li>
                            <strong>Orden</strong> #
                          </li>
                          <li>
                            <strong>Transaccion</strong> #
                          </li>
                          <li>
                            <strong>Fecha de Orden:</strong> Fecha aca
                          </li>
                          <li>
                            <strong>Status:</strong>Estado de la compra
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="invoice-items">
                      <div
                        class="table-responsive"                  
                        tabindex="0"
                      >
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th class="per70 text-center">Descripcion</th>
                              <th class="per5 text-center">Qty</th>
                              <th class="per25 text-center">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                1024MB Cloud 2.0 Server - elisium.dynamic.com
                                (12/04/2014 - 01/03/2015)
                              </td>
                              <td class="text-center">Number</td>
                              <td class="text-center">Price</td>
                            </tr>
                            <tr>
                              <td>Logo design</td>
                              <td class="text-center">1</td>
                              <td class="text-center">Price</td>
                            </tr>
                            <tr>
                              <td>
                                Backup - 1024MB Cloud 2.0 Server -
                                elisium.dynamic.com
                              </td>
                              <td class="text-center">12</td>
                              <td class="text-center">$12.00 USD</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th colspan="2" class="text-right">
                                Sub Total:
                              </th>
                              <th class="text-center">Price</th>
                            </tr>
                            <tr>
                              <th colspan="2" class="text-right">
                                Tax:
                              </th>
                              <th class="text-center">Price</th>
                            </tr>

                            <tr>
                              <th colspan="2" class="text-right">
                                Grand Total:
                              </th>
                              <th class="text-center">Price</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div class="invoice-footer mt25">
                      <p class="text-center">
                        Gracias por confiar en nosotros !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
