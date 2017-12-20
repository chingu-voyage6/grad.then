import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'
import ProjectCard from '../layouts/components/ProjectCard'
import faker from 'faker'

const EventsPage = () => (
  <div>
    <Hero type="events" />
    <StyledH1>Events Page</StyledH1>
    <StyledP>This is the Events page</StyledP>
    <ProjectCard
      type="list"
      title={faker.commerce.productName()}
      text={faker.hacker.phrase()}
      img={faker.image.imageUrl()}
    />
  </div>
)

export default EventsPage
