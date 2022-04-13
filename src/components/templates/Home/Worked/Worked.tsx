import React from "react";

import { Container } from "../../../_ui";

import { Box, Title, SubTitle, Content } from "./Worked.styles";

export const Worked = () => {
  return (
    <Box>
      <Container>
        <Title>Empresas que trabalhei!</Title>
        <Content>
          <div>
            <Title className="number-title">01</Title>
            <SubTitle>
              <span className="number-subtitle--catho">Catho Online</span>
              desenvolvedor web
            </SubTitle>
            <p>
              Responsável pela área logada do candidato no perido de 2 anos e 10
              meses.
            </p>
          </div>
          <div>
            <Title className="number-title">02</Title>
            <SubTitle>
              <span className="number-subtitle--getninjas">GetNinjas</span>
              desenvolvedor front-end
            </SubTitle>
            <p>
              Atuando no time de growth criando e mantendo paginas web para
              aquisição de novos clientes.
            </p>
          </div>
        </Content>
      </Container>
    </Box>
  );
};
