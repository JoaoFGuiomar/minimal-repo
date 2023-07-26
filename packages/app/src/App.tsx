import React from "react";
import { Button } from "@repo/components";
import { Container } from "./App.styles";
import { styled } from "@linaria/react";

// Updates styles correctly
export const Dotted = styled.div`
  padding: 30px; // Change this to "20px" and then "30px"
  border: 10px dotted black;
  border-radius: 20px;
`;

const App = () => {
  return (
    <Container>
      <Dotted>
        <Button>Hello</Button>
      </Dotted>
    </Container>
  );
};

export default App;
