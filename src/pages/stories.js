import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH1, StyledP } from '../theme/globalStyle'
import StoryCard from '../layouts/components/StoryCard'

import faker from 'faker'

const StoriesPage = () => (
  <div>
    <Hero type="stories" />
    <StyledH1>Stories Page</StyledH1>
    <StyledP>This is the Stories page</StyledP>
    <StoryCard
      title={faker.commerce.productName()}
      text={faker.hacker.phrase()}
      img={faker.image.imageUrl()}
    />
  </div>
)

export default StoriesPage
