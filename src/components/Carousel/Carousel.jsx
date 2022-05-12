import React from "react";

export const Carousel = () => {
  return (
<div class="carousel">
        <div class="banner-wrapper bg-light">
            <div id="index_banner" class="banner-vertical-center-index container-fluid pt-5">
                <div class="carousel slide" id="carouselExampleIndicators" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="py-5 row d-flex align-items-center">
                                <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        class="banner-heading h1 text-warning display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        Un concepto gastronómico Auténtico</h1>
                                    <p class="banner-body py-3 mx-0 px-0">Queremos que viajes con nuestra carta, que sientas de cerca la cultura de la buena mesa...</p>
                                    <a class="banner-button btn rounded-pill btn-outline-warning btn-lg px-4"
                                        role="button" href="#">Restaurantes</a>
                                    <a class="banner-button btn rounded-pill btn-outline-warning btn-lg px-4"
                                        role="button" href="#">Carta</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="py-5 row d-flex align-items-center">
                                <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        class="banner-heading h1 text-warning display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        Reserva tu mesa</h1>
                                    <p class="banner-body py-3">Ya es posible hacer tu reserca online y no esperar ni un minuto más para disfrutar de tu hamburguesa favorita.</p>
                                    <a role="button" href="#"
                                        class="banner-button btn rounded-pill btn-outline-warning btn-lg px-4">Haz tu reserva</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="py-5 row d-flex align-items-center">
                                <div class="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        class="banner-heading h1 text-warning display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        Servicio a domicilio</h1>
                                    <p class="banner-body py-3">Tú, la manta, una peli y el sofá, tenes una cita con tu hamburguesa favorita. Disfruta de la auténtica hamburguesa  a un click de distancia con nuestro servicio a domicilio.</p>
                                    <a role="button" href="#"
                                        class="banner-button btn rounded-pill btn-outline-warning btn-lg px-4">Servicio a domicilio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#carouselExampleIndicators" class="carousel-control-prev text-decoration-none"
                        role="button" data-bs-slide="prev">
                        <i class="bx bx-chevron-left"></i>
                        <span class="visually-hidden">Ant.</span>
                    </a>
                    <a href="#carouselExampleIndicators" class="carousel-control-next text-decoration-none"
                        role="button" data-bs-slide="next">
                        <i class="bx bx-chevron-right"></i>
                        <span class="visually-hidden">Prox.</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};
