import React from 'react'
import styled from 'styled-components'

import { media } from '../../theme/globalStyle'
import PageNav from './PageNav.js'
import BearsTeam from './BearsTeam'

const StyledFooter = styled.footer`
  background: ${props => props.theme.primary.dark};
  grid-area: ft;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. nav nav nav nav nav . . . team team .';
  align-items: center;

  ${media.giant`
    grid-template-areas: '. nav nav nav nav nav nav . . team team .';
  `}
  ${media.desktop`
    grid-template-areas: 'nav nav nav nav nav nav nav . . team team team';
  `}
  ${media.tablet`
    grid-template-areas: '. team team team team team team team team team team .';
    & > ul {
      display: none;
    };
  `}
`

const Footer = () => (
  <StyledFooter>
    <PageNav header={false} />
    <BearsTeam />
  </StyledFooter>
)

export default Footer
