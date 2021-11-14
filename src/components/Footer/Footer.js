import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            ¿Quieres que desarrolle tu sitio web?, Contáctame:
          </LinkTitle>
          <LinkItem href="mailto: oscar.rodriguezweb07@gmail.com">
            oscar.rodriguezweb07@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
