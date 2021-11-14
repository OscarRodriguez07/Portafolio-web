import React from "react";
import {
  DiFirebase,
  DiReact,
  DiJavascript,
  DiSass,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Tecnologias</SectionTitle>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Lenguaje de <br />
            Prograación
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>
            Libreria de <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size="3rem" />
        <ListContainer>
          <ListTitle>SASS</ListTitle>
          <ListParagraph>
            Preprocesador de <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
          <ListParagraph>
            Plataforma de Google <br />
            para desarrollar <br /> apps de alta calidad
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
            Lenguaje de <br />
            Marcado
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
            Lenguaje de <br />
            diseño
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
