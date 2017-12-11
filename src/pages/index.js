import React from 'react'
import Link from 'gatsby-link'

import { StyledH1, StyledP } from "../theme/globalStyle";

const IndexPage = () => (
  <div>
    <StyledH1>Hi people</StyledH1>
    <StyledP>Welcome to your new Gatsby site.</StyledP>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
