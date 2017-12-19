import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'

const SupportPage = () => (
  <div>
    <Hero type="support" />
    <StyledH1>Support Page</StyledH1>
    <StyledP>This is the Support page</StyledP>
  </div>
)

export default SupportPage
