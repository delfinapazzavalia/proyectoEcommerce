import React from "react";
import Navegador from "../navbar/Navegador";
import Footer from "../footer/Footer";
import SeccionesEcommerce from "../seccionesEcommerce/SeccionesEcommerce";
import "../ecommerce/ecommerce.css"

const Ecommerce = () => {
  return (
    <>
      <Navegador />
      <div className="ecommerceContent">
        <SeccionesEcommerce />
      </div>

      <Footer />
    </>
  );
};

export default Ecommerce;
