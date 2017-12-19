import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'

const JobsPage = () => (
  <div>
    <Hero type="jobs" />
    <StyledH1>Jobs Page</StyledH1>
    <StyledP>This is the Jobs page</StyledP>
  </div>
)

export default JobsPage
