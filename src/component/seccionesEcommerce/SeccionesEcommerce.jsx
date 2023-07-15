import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgSecc from "../img/imgCategoriesdemo.png";
import { Col, Container, Row } from 'react-bootstrap';
import "../seccionesEcommerce/seccionesEcommerce.css"

const SeccionesEcommerce = () => {
  const products = [
    {
      id: 1,
      imagen: { imgSecc },
      nombre: "nombreProducto1",
      precio: "$100",
    },
    {
      id: 2,
      imagen: { imgSecc },
      nombre: "nombreProducto2",
      precio: "$100",
    },
    {
      id: 3,
      imagen: { imgSecc },
      nombre: "nombreProducto3",
      precio: "$100",
    },
    {
      id: 4,
      imagen: { imgSecc },
      nombre: "nombreProducto4",
      precio: "$100",
    },
    {
      id: 5,
      imagen: { imgSecc },
      nombre: "nombreProducto5",
      precio: "$100",
    },
    {
      id: 6,
      imagen: { imgSecc },
      nombre: "nombreProducto6",
      precio: "$100",
    },
    {
      id: 7,
      imagen: { imgSecc },
      nombre: "nombreProducto7",
      precio: "$100",
    },
  ];
  return (
    <>
    <div className="cardsEcommerce">
     <Container>
      <Row xs={1} md={2} lg={3}>
      {products.map((products) => (
        <Col className="mb-4">  
        <Card
            style={{ width: "18rem" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card.Img variant="top" src={imgSecc} />
            <Card.Body className="text-center">
              <Card.Text>{products.nombre}</Card.Text>
              <Card.Title> {products.precio} </Card.Title>

              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>
        </Col>
          
        ))}
      </Row>
    </Container>   
    </div>
    
      
    </>
  );
};

export default SeccionesEcommerce;
