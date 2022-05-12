import React from "react";
import ubicacion from '../../icons/ubicacion.png'
import ubicacion_comida from '../../icons/ubicacion_comida.png'
export const Location = () => {
  return (
    <div className="tabajos">
      <section className="ubication">
        <div className="container py-5">
          <div className="row d-flex justify-content-center text-center align-items-center">
            <div className="col-lg-2 col-12">
              <img
                className="icon_ubication"
                src={ubicacion}
                alt="ubicacion"
              />
            </div>
            <div className="col-lg-7 col 12 text-light pt-2">
              <h3 className="h4 light-800">¡¡ Encontranos !!</h3>
              <p className="light 800">
                Si estas de paso, podes acercarte a alguno de nuestros locales
              </p>
            </div>
            <div className="col-lg-3 col-12 ">
              <img
                className="icon_ubication"
                src={ubicacion_comida}
                alt="Icono ubicacion"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mb-5">
        <div className="container">
          <div className="recent-work-header row text-center pb-5">
            <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Ubicación</h2>
          </div>
          <div className="row gy-5 g-lg-5 mb-4">
            <div className="col-md-4 mb-3 text-center">
              <a
                href="#"
                className="recent-work card border-0 shadow-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276845!2d-58.38375908560909!3d-34.60373888045951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1622420109523!5m2!1ses!2sar"
                  width="600"
                  height="280"
                //   style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                <h3 className="card-title light-300">
                  Centro - Capital Federal
                </h3>
                <p className="card-text">
                  Obelisco, Avenida 9 de Julio, Buenos Aires
                </p>
              </a>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <a
                href="#"
                className="recent-work card border-0 shadow-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.8127704712717!2d-58.26015937081978!3d-34.724064996516105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e6a58691515%3A0x6e238073310b398d!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20646%2C%20B1878%20FNN%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1622420544563!5m2!1ses!2sar"
                  width="600"
                  height="280"
                //   style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                <h3 className="card-title light-300">Zona sur, Buenos Aires</h3>
                <p className="card-text">
                  Quilmes Oeste, Av. Hipólito Yrigoyen 646
                </p>
              </a>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <a
                href="#"
                className="recent-work card border-0 shadow-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1627224094896!2d-58.418487585194505!3d-34.625327966147935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbdd9ded8891%3A0xe3fc1307e41d3df0!2sSan%20juan%20y%20boedo!5e0!3m2!1ses!2sar!4v1622420609156!5m2!1ses!2sar"
                  width="600"
                  height="280"
                //   style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                <h3 className="card-title light-300">CABA</h3>
                <p className="card-text">San Juan y Boedo, </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
