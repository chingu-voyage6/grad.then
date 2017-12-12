import React from 'react'
import Link from 'gatsby-link'

import {
  ColorPalette as CP,
  StyledH1,
  StyledUl,
  StyledLi,
  StyledP
} from '../theme/globalStyle'

const BrandTitle = StyledH1.extend`
  grid-area: brand;
  color: ${CP.primary.light};
  font-size: 1.6em;
  padding: 0.5rem;
`

const IndexPage = () => (
  <div>
    <BrandTitle>Hi people</BrandTitle>
    <StyledP>Welcome to your new Gatsby site.</StyledP>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
