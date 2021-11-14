import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck sixe="3rem" /> <Span>Portafolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Acera</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/OscarRodriguez07?tab=repositories">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/oscar-rodr%C3%ADguez-b50705225">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
