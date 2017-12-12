import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { ColorPalette as CP } from "../../theme/globalStyle";
import PageNav from "./PageNav.js";

const StyledFooter = styled.footer`
  background: ${CP.primary.dark};
  grid-area: ft;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". nav nav nav nav nav . . . team team .";
`;

const Team = styled.p`
  grid-area: team;
  color: ${CP.white};
  padding: 0.5rem;
  margin: 1rem;
  font-size: 1rem;
`;

const Footer = () => (
  <StyledFooter>
    <PageNav header={false}/>
    <Team>made by bears-16</Team>
  </StyledFooter>
);

export default Footer;
