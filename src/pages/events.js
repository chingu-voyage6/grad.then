import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'

const EventsPage = () => (
  <div>
    <Hero type="events" />
    <StyledH1>Events Page</StyledH1>
    <StyledP>This is the Events page</StyledP>
  </div>
)

export default EventsPage
