import React from "react";
import Logo from "../../icons/hamburguesa.svg";
export const Header = () => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light navbar bg-white shadow">
        <div className="container d-flex justify-content-between aling-items-center">
          <a href="/" className="navbar-brand h1">
            <img src={Logo} alt="Logo-Burger" className="icon_burger" />
            <span className="text-dark h4">
              Cangre-<span className="text-warning h4">Burger</span>{" "}
            </span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler-success"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="align-self-center collapse navbar-collapse flex-fill d-lg justify-content-lg-between"
            id="navbar-toggler-success"
          >
            <div className="flex-fill mx-xl-5 mb-2">
              <ul className="nav navbar-nar d-flex justify-content-between mx-xl-5 text-center text-dark list-mobile">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link btn-outline-warning rounded-pill px-3"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link btn-outline-warning rounded-pill px-3"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link btn-outline-warning rounded-pill px-3"
                  >
                    Restaurantes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link btn-outline-warning rounded-pill px-3"
                  >
                    Carta
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link btn-outline-warning rounded-pill px-3"
                  >
                    Contactens
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex container-icon-social">
              <a href="http://facebook.com" target="_blank">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="http://whatsapp.com"
                className="text-success"
                target="_blank"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a
                href="http://instagram.com"
                className="text-danger"
                target="_blank"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
