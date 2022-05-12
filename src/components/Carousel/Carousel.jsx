import React from "react";

export const Carousel = () => {
  return (
<div className="carousel">
        <div className="banner-wrapper bg-light">
            <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">
                <div className="carousel slide" id="carouselExampleIndicators" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        className="banner-heading h1 text-warning display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        Un concepto gastronómico Auténtico</h1>
                                    <p className="banner-body py-3 mx-0 px-0">Queremos que viajes con nuestra carta, que sientas de cerca la cultura de la buena mesa...</p>
                                    <a className="banner-button btn rounded-pill btn-outline-warning btn-lg px-4"
                                        role="button" href="#">Restaurantes</a>
                                    <a className="banner-button btn rounded-pill btn-outline-warning btn-lg px-4"
                                        role="button" href="#">Carta</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        className="banner-heading h1 text-warning display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        Reserva tu mesa</h1>
                                    <p className="banner-body py-3">Ya es posible hacer tu reserca online y no esperar ni un minuto más para disfrutar de tu hamburguesa favorita.</p>
                                    <a role="button" href="#"
                                        className="banner-button btn rounded-pill btn-outline-warning btn-lg px-4">Haz tu reserva</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        className="banner-heading h1 text-warning display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        Servicio a domicilio</h1>
                                    <p className="banner-body py-3">Tú, la manta, una peli y el sofá, tenes una cita con tu hamburguesa favorita. Disfruta de la auténtica hamburguesa  a un click de distancia con nuestro servicio a domicilio.</p>
                                    <a role="button" href="#"
                                        className="banner-button btn rounded-pill btn-outline-warning btn-lg px-4">Servicio a domicilio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#carouselExampleIndicators" className="carousel-control-prev text-decoration-none"
                        role="button" data-bs-slide="prev">
                        <i className="bx bx-chevron-left"></i>
                        <span className="visually-hidden">Ant.</span>
                    </a>
                    <a href="#carouselExampleIndicators" className="carousel-control-next text-decoration-none"
                        role="button" data-bs-slide="next">
                        <i className="bx bx-chevron-right"></i>
                        <span className="visually-hidden">Prox.</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};
