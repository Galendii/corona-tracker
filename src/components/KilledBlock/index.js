import React from "react";
import AnimateNumber from "react-native-animate-number";
import { Container, Title, Amount, Date, Description } from "./styles";

const HealedBlock = () => {
  return (
    <Container
      style={{
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
      }}
    >
      <Title>Healed</Title>
      <Amount>
        <AnimateNumber countBy={45000} value={905321} timing={1000} />
      </Amount>
      <Date>Wed Apr 01 2020</Date>
    </Container>
  );
};

export default HealedBlock;
