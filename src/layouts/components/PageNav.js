import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { StyledUl, StyledLi, ColorPalette as CP } from "../../theme/globalStyle";

//same for Header & Footer
const NavMenu = StyledUl.extend`
  grid-area: nav;
  padding: 0;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
`;

// different colors for links
const NavItem = StyledLi.extend`
  display: inline;
  text-transform: uppercase;
  color: ${ props => props['data-header']
          ?CP.primary.light
          :CP.white };
  padding: 0.5rem;
`;

// different colors for hover
const NavLink = styled(Link).attrs({
  color: props => props['data-header']
    ?CP.secondary.red
    :CP.secondary.green
})`
  color: inherit;
  &:visited, &:active {
     color: inherit;
  }
  &:hover {
    color: ${ props => props.color }
`;

const PageNav = (props) => (
  <NavMenu>
    <NavItem data-header={props.header}>
      <NavLink to="/jobs" data-header={props.header}>jobs</NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink to="/learn">learn</NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink to="/events" data-header={props.header}>events</NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink to="/support" data-header={props.header}>support</NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink to="/stories" data-header={props.header}>stories</NavLink>
    </NavItem>
  </NavMenu>
);

export default PageNav;
