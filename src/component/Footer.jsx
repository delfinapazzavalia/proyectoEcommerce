import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
          <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
  

    </>
  )
}

export default Footer