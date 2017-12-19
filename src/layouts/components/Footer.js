import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
`

const Footer = () => (
  <StyledFooter>
    <PageNav header={false} />
    <BearsTeam />
  </StyledFooter>
)

export default Footer
