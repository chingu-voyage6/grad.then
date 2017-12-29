import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledH1, media } from '../../theme/globalStyle'
import PageNav from './PageNav.js'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 4.625rem;
  grid-area: hd;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. brand brand . . . nav nav nav nav nav .';
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.primary.light};
  z-index: 101;

  ${media.giant`
    grid-template-areas: '. brand brand . . nav nav nav nav nav nav nav';
  `}
  ${media.desktop`
    grid-template-areas: 'brand brand brand . . nav nav nav nav nav nav nav';
  `}
  ${media.tablet`
    grid-template-areas: 'brand brand brand brand brand brand nav nav nav nav nav nav';
  `}
`

const BrandTitle = StyledH1.extend`
  grid-area: brand;
  color: ${props => props.theme.primary.light};
  font-size: 1.6em;
  padding: 0.5rem;
  ${media.desktop`
    font-size: 1.4em;
  `}
`

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary.red};
  }
`

const Header = props => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">grad.then()</BrandLink>
    </BrandTitle>
    <PageNav header={true} nav={props.navItems} />
  </StyledHeader>
)

Header.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Header
