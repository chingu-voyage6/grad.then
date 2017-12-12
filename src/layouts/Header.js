import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { StyledH1, StyledUl, StyledLi, ColorPalette as CP } from "../theme/globalStyle";
import { PageContainer } from "./index.js";


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

const NavMenu = StyledUl.extend`
  grid-area: nav;
  padding: 0;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
`;

const NavItem = StyledLi.extend`
  display: inline;
  text-transform: uppercase;
  color: ${CP.primary.light};
  padding: 0.5rem;
`;

const NavLink = styled(Link)`
  color: inherit;
  &:visited, &:active {
     color: inherit;
  }
  &:hover {
    color: ${CP.secondary.red};
  }
`;

const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">grad.then()</BrandLink>
    </BrandTitle>

    <NavMenu>
      <NavItem to="/jobs">
        <NavLink>jobs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/learn">learn</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/events">events</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/support">support</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/stories">stories</NavLink>
      </NavItem>
    </NavMenu>

  </StyledHeader>
);

export default Header;
