import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'

const LearnPage = () => (
  <div>
    <Hero type="learn" />
    <StyledH1>Learn Page</StyledH1>
    <StyledP>This is the Learn page</StyledP>
  </div>
)

export default LearnPage
