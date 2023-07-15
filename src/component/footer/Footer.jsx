import React from 'react';
import '../footer/footer.css';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
    <footer className="mt-5 footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2023 Tu Sitio Web. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
    
  );
};

export default Footer;