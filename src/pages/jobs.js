import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'

import JobsList from '../layouts/components/JobsList'

import faker from 'faker'

const JobsPage = () => (
  <div>
    <Hero type="jobs" />
    <StyledH1>Jobs Page</StyledH1>
    <StyledP>This is the Jobs page</StyledP>
    <JobsList
      title={faker.commerce.productName()}
      text={faker.hacker.phrase()}
    />
  </div>
)

export default JobsPage
