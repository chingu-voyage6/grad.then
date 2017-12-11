import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { StyledH1, StyledUl, StyledLi } from "../theme/globalStyle";


const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`;


const BrandTitle = StyledH1.extend`
  color: #755f9f;
  font-size: 1.6em;
`;

const BrandLink = styled(Link)`
  &:visited, &:active {
     color: inherit;
  }
`;

const NavMenu = StyledUl.extend`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0;
`;

const NavLink = StyledLi.extend`
  display: inline;
  text-transform: uppercase;
  color: #755f9f;
`;


const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">grad.then()</BrandLink>
    </BrandTitle>

    <NavMenu>
      <NavLink>jobs</NavLink>
      <NavLink>learn</NavLink>
      <NavLink>events</NavLink>
      <NavLink>support</NavLink>
      <NavLink>stories</NavLink>
    </NavMenu>

  </StyledHeader>
);

export default Header;
