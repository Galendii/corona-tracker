import React from "react";
import {
  Container,
  TitleContainer,
  Title,
  RowContainer,
  GraphContainer,
  ScrollContainer,
} from "./styles";

import HealedBlock from "../../components/HealedBlock";
import InfectedBlock from "../../components/InfectedBlock";
import KilledBlock from "../../components/KilledBlock";
import Chart from "../../components/Chart";

const MainScreen = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>GLOBALLY</Title>
      </TitleContainer>
      <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
        <RowContainer>
          <HealedBlock />
          <InfectedBlock />
          <KilledBlock />
        </RowContainer>
        <GraphContainer>
          <Chart />
        </GraphContainer>
      </ScrollContainer>
    </Container>
  );
};

export default MainScreen;
