import React, { useEffect, useState } from "react";
import { products } from "../../Mock/Products";
import envio from "../../icons/envio.svg";
export const Services = () => {
  const [todo, setTodo] = useState(true);
  const [carne, setCarne] = useState(false);
  const [pollo, setPollo] = useState(false);
  const [vegetariana, setVegetarina] = useState(false);
  const [filter, setFilter] = useState(true);
  const [viewProduct, setViewProduct] = useState(products);
  useEffect(() => {
    if (filter) {
    }
  }, [filter]);
  const getProducts = async (select) => {
    if (select !== "Todo") {
      setViewProduct(
        products.filter((productFilter) => productFilter.categorie === select)
      );
    } else {
      setViewProduct(products);
    }
  };
  const changeOption = (select) => {
    setFilter(false);
    getProducts(select);
    if (select === "Todo") {
      setTodo(true);
      setCarne(false);
      setPollo(false);
      setVegetarina(false);
    }
    if (select === "Carne") {
      setCarne(true);
      setTodo(false);
      setPollo(false);
      setVegetarina(false);
    }
    if (select === "Pollo") {
      setPollo(true);
      setTodo(false);
      setCarne(false);
      setVegetarina(false);
    }
    if (select === "Vegetariana") {
      setVegetarina(true);
      setTodo(false);
      setCarne(false);
      setPollo(false);
    }
    setFilter(true);
  };
  return (
    <div className="servicos">
      <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
          <div className="row">
            <h2 className="h2 text-center col-12 py-5 semi-bold-600">
              Envíos a Domicilio
            </h2>
          </div>
          <div className="row">
            
              <div className="service-header col-12 col-md-4 col-lg-3 text-center  light-300">
                <img className="icon_envios" src={envio} alt="Envios" />
              </div>
              <div className="service-heading col-12 col-md-8 col-lg-9 text-start float-end light-300">
                <h2 className="h3 pb-4 typo-space-line">
                  Te llevamos tu burger a casa
                </h2>
              </div>
            
          </div>
          <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb--3 text-muted px-2">
            Tú, la manta, una peli y el sofá, tenes una cita con la hamburguesa
            que más te gusta ♥
          </p>
        </div>
        <div className="service-tag py-5" name="#carta">
          <div className="col-md-12">
            <ul className="nav d-flex justify-content-center">
              <li className="nav-item mx-lg-4">
                <span
                  onClick={() => changeOption("Todo")}
                  className={`filter-btn nav-link btn-outline-warning ${
                    todo ? "active shadow" : null
                  } rounded-pill text-light px-4 light-300`}
                >
                  Todo
                </span>
              </li>
              <li className="nav-item mx-lg-4">
                <span
                  onClick={() => changeOption("Carne")}
                  className={`${
                    carne ? "active shadow" : null
                  } filter-btn nav-link btn-outline-warning rounded-pill text-light px-4 light 300`}
                >
                  Carne
                </span>
              </li>
              <li className="nav-item mx-lg-4">
                <span
                  onClick={() => changeOption("Pollo")}
                  className={`${
                    pollo ? "active shadow" : null
                  }filter-btn nav-link btn-outline-warning rounded-pill text-light px-4 light 300`}
                >
                  Pollo
                </span>
              </li>
              <li className="nav-item mx-lg-4">
                <span
                  onClick={() => changeOption("Vegetariana")}
                  className={`${
                    vegetariana ? "active shadow" : null
                  }filter-btn nav-link btn-outline-warning rounded-pill text-light px-4 light 300`}
                >
                  Vegetariana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 proyects">
          {viewProduct.map((product) => (
            <div
              className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding"
              key={product.id}
            >
              <a
                href="#"
                className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
              >
                <img
                  className="card-img"
                  src="../../img/carrousel.jpeg"
                  alt="Card image"
                />
                <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="service-work-content text-left text-light">
                    <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                      {product.categorie}
                    </span>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
