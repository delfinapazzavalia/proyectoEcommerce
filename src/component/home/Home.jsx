import React from "react";
import "../home/home.css";
import Carrousel from "../carousel/Carrousel";
import Categorias from "../seccionesHome/Categorias";
import Navegador from "../navbar/Navegador";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navegador />
      <div className="homeContent">
        <Carrousel />
        <Categorias />
      </div>
      <Footer />
    </>
  );
};

export default Home;
