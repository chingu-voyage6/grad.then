import React from 'react'
import Link from 'gatsby-link'
import faker from 'faker'

import { StyledH1, StyledP } from '../theme/globalStyle'

const IndexPage = () => (
  <div>
    <StyledH1>Hi people</StyledH1>
    <StyledP>{faker.lorem.paragraph()}</StyledP>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
