import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { withTheme } from 'styled-components'

import { StyledUl, StyledLi, StyledA, media } from '../../theme/globalStyle'
import { ICONS } from '../../theme/constants'
import Icon from './Icon'

//same for Header & Footer
const NavMenu = StyledUl.extend`
  grid-area: nav;
  padding: 0;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  ${media.giant`
    grid-template-columns: repeat(5, auto);
  `}
  ${media.desktop`
    margin: 0.5rem;
  `}
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    list-style-type: none;
    &.responsive > li {
      display: block;
      text-align: left;
      padding: 0.5rem;
      justify-self: end;
      &:first-child {
        padding: 0.8rem 0rem;
      }
    }
  `}
`

// different colors for links
const NavItem = StyledLi.extend`
  display: inline;
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  color: ${props =>
    props['data-header']
      ? props => props.theme.primary.light
      : props => props.theme.white};
  padding: 0.5rem 0;
  &.icon {
    display: none;
  }
  ${media.giant`
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
  `}
  ${media.desktop`
    font-size: 1.2rem;
  `}
  ${media.tablet`
    display: none;
    font-size: 1.3rem;
    &.icon {
      display: block;
      justify-self: end;
      margin-right: 0.5rem;
    }
  `}
`

// different colors for hover
const NavLink = styled(Link).attrs({
  color: props =>
    props['data-header']
      ? props => props.theme.secondary.red
      : props => props.theme.secondary.green
})`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.color};
    // border: 1px solid ${props => props.border};
    box-shadow: 0 0 0 1px ${props => props.border};
    transition: all 0.3s ease;
    border-radius: 10px;
    margin: -5px;
    padding: 5px;
  }
  &.activeLink {
    color: ${props => props.theme.secondary.red};
  }
`

NavLink.propTypes = {
  'data-header': PropTypes.bool.isRequired
}

const StyledLink = StyledA.extend`
  color: inherit;
  margin: 0;
  padding: 0;
  &:visited,
  &:active {
    color: inherit;
  }
  svg {
    vertical-align: bottom;
  }
  &:hover {
    svg > path {
      fill: ${props => props.theme.secondary.red}
    }
  }
`

const PageNav = ({ header, nav, theme }) => {
  const arr = nav
  const openNav = (e) => {
    e.preventDefault()
    const menu = document.getElementById('topnav')
    menu.classList.toggle('responsive')
  }
  const closeNav = () => {
    const width = window.innerWidth
    if (width < 769) {
      const menu = document.getElementById('topnav')
      menu.classList.remove('responsive')
    }
  }

  return (
    header ?
      (<NavMenu id="topnav">
        <NavItem data-header={header}
          className='icon'>
          <StyledLink href='' onClick={openNav}>
            <Icon viewbox='0 0 32 32'
              size={32}
              color={theme.primary.light}
              icon={ICONS.BUTTON}
            />
          </StyledLink>
        </NavItem>
        {arr.map((elem, index) => (
          <NavItem key={index} data-header={header}>
            <NavLink
              to={`/${elem}`}
              data-header={header}
              activeClassName="activeLink"
              onClick={closeNav}
            >
              { elem }
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>)
      :
      (<NavMenu>
        {arr.map((elem, index) => (
          <NavItem key={index} data-header={header}>
            <NavLink
              to={`/${elem}`}
              data-header={header}
              activeClassName="activeLink"
            >
              { elem }
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>)
  )
}

PageNav.propTypes = {
  header: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired,
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export default withTheme(PageNav)
