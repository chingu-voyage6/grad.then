import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { ColorPalette as CP } from '../../theme/globalStyle'
import PageNav from './PageNav.js'
import BearsTeam from './BearsTeam'

const StyledFooter = styled.footer`
  background: ${CP.primary.dark};
  grid-area: ft;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. nav nav nav nav nav . . . team team .';
  align-items: center;
`

const Team = styled.div`
  grid-area: team;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0.5rem;
  margin: 1rem;
  p {
    display: block;
    justify-self: end;
    color: ${CP.white};
    font-size: 1rem;
    padding:0;
    margin:0;
  }
`

const Footer = () => (
  <StyledFooter>
    <PageNav header={false} />
    <Team>
      <p>made by</p>
      <BearsTeam />
    </Team>

  </StyledFooter>
)

export default Footer
