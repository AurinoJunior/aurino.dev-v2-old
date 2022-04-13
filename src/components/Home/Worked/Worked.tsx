import { Container, Paragraph } from "../../_ui";
import { primary, yellow } from "../../../styles/Tokens";

import {
  WorkedBox,
  WorkedTitle,
  WorkedSubTitle,
  WorkedContent,
} from "./Worked.styles";

export const Worked = () => {
  return (
    <WorkedBox>
      <Container>
        <WorkedTitle>Empresas que trabalhei!</WorkedTitle>
        <WorkedContent>
          <div>
            <WorkedTitle className="number-title">01</WorkedTitle>
            <WorkedSubTitle highlight={primary}>
              <span>Catho Online</span>
              desenvolvedor web
            </WorkedSubTitle>
            <Paragraph>
              Responsável pela área logada do candidato no perido de 2 anos e 10
              meses.
            </Paragraph>
          </div>
          <div>
            <WorkedTitle className="number-title">02</WorkedTitle>
            <WorkedSubTitle highlight={yellow}>
              <span>GetNinjas</span>
              desenvolvedor front-end
            </WorkedSubTitle>
            <Paragraph>
              Atuando no time de growth criando e mantendo paginas web para
              aquisição de novos clientes.
            </Paragraph>
          </div>
        </WorkedContent>
      </Container>
    </WorkedBox>
  );
};
