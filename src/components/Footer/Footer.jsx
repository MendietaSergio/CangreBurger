import React from "react";
import icon_burger from "../../icons/hamburguesa.svg";
export const Footer = () => {
  return (
    <div className="footer">
      <footer className="first_footer pt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-4 col-12 align-left container-icon-social">
              <a href="/" className="navbar-brand">
                <img
                  src={icon_burger}
                  alt="Hamburguesa"
                  className="icon_burger"
                />
                <span className="text-dark h4">Cangre-</span>
                <span className="text-warning h4">Burger</span>
              </a>
              <p className="text-light my-lg-4 my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <ul className="list-inline footer-icons light-300">
                <li className="list-inline-item m-0">
                  <a href="http://facebook.com" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    href="http://whatsapp.com"
                    className="text-success"
                    target="_blank"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    href="http://instagram.com"
                    className="text-danger"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 my-sm-0 mt-4">
              <h2 className="h4 pb-lg-3 text-light light-300">Menu</h2>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i class="fa fa-arrow-right"></i>
                  <a
                    className="text-decoration-none text-light py-1"
                    href="#Home"
                  >
                   {" "} Home
                  </a>
                </li>
                <li className="pb-2">
                  <i class="fa fa-arrow-right"></i>
                  <a className="text-decoration-none text-light py-1" href="#">
                  {" "}Sobre Nosotros
                  </a>
                </li>
                <li className="pb-2">
                  <i class="fa fa-arrow-right"></i>
                  <a className="text-decoration-none text-light py-1" href="#">
                  {" "}Restaurantes
                  </a>
                </li>
                <li className="pb-2">
                  <i class="fa fa-arrow-right"></i>
                  <a className="text-decoration-none text-light py-1" href="#">
                  {" "}Carta
                  </a>
                </li>
                <li className="pb-2">
                  <i class="fa fa-arrow-right"></i>
                  <a className="text-decoration-none text-light py-1" href="#">
                  {" "}Contáctanos
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 my-sm-0 mt-4">
              <h2 className="h4 pb-lg-3 text-light light-300">Atendemos en:</h2>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <a
                    href="tel:010-020-0340"
                    className="text-decoration-none text-light py-1"
                  >
                    {" "}021-2354-4568
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="mailto:info@company.com"
                    className="text-decoration-none text-light py-1"
                  >
                    {" "}info@company.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 second_footer py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300">
                  © Copyright 2021 Cangre-Burger. Todos los derechos reservados.
                </p>
              </div>

              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">                  
                  <a
                    rel="sponsored"
                    className="text-decoration-none text-light"
                    href="https://dev-mendietasergio.com.ar "
                    target="_blank"
                  >
                    <span className="link_porfolio">Mendieta Sergio</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
