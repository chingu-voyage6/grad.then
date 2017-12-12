import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { StyledH1, ColorPalette as CP } from "../../theme/globalStyle";
import PageNav from "./PageNav.js";

const StyledHeader = styled.div`
  grid-area: hd;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". brand brand . . . nav nav nav nav nav .";
`;

const BrandTitle = StyledH1.extend`
  grid-area: brand;
  color: ${CP.primary.light};
  font-size: 1.6em;
  padding: 0.5rem;
`;

const BrandLink = styled(Link)`
  color: inherit;
  &:visited, &:active {
     color: inherit;
  }
`;

const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">grad.then()</BrandLink>
    </BrandTitle>
    <PageNav header={true} />
  </StyledHeader>
);

export default Header;
