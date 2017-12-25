import React from 'react'
import styled from 'styled-components'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'
import JobsContainer from '../layouts/components/JobsContainer'

import faker from 'faker'


const JobsPage = () => (
  <div>
    <Hero type="jobs" />
    <JobsContainer />
  </div>
)

export default JobsPage
