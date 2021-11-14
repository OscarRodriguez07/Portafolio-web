import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
        Hola, Bienvenido <br />
        Mi Portafolio Personal.
      </SectionTitle>
      <SectionText>Oscar Rodríguez</SectionText>
      <Button onClick={() => (window.location = "#footer")}>Contacto</Button>
    </LeftSection>
  </Section>
);

export default Hero;
