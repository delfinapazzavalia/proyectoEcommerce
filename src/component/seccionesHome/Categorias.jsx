import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../seccionesHome/categories.css";
import categories from "../img/imgCategoriesdemo.png";

const Categorias = () => {
  return (
    <>
      <Container className="categories">
        <Row className="justify-content-center align-items-center">
          <Col lg={4} className="text-center">
            <img
              src={categories}
              alt="Imagen"
              width="200"
              height="200"
              className="bd-placeholder-img rounded-circle imgCategories"
            />
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </Col>
          <Col lg={4} className="text-center">
            <img
              src={categories}
              alt="Imagen"
              width="200"
              height="200"
              className="bd-placeholder-img rounded-circle imgCategories"
            />
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </Col>
          <Col lg={4} className="text-center">
            <img
              src={categories}
              alt="Imagen"
              width="200"
              height="200"
              className="bd-placeholder-img rounded-circle imgCategories"
            />
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categorias;
