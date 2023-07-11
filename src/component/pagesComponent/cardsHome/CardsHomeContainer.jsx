import React from "react";
import CardsHome1 from "./CardsHome1";
import CardsHome2 from "./CardsHome2";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import '../cardsHome/cardsHome.css'

const CardsHomeContainer = () => {
  return (
    <>
      <Container className="homeContainer">
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex justify-content-center align-items-center"
        >
          <CardsHome1 />
          <CardsHome2 />
        </Stack>
      </Container>
    </>
  );
};

export default CardsHomeContainer;
