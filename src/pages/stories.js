import React from 'react'

import { StyledH1, StyledP } from '../theme/globalStyle'
import StoryCard from '../layouts/components/StoryCard'

const StoriesPage = () => (
  <div>
    <StyledH1>Stories Page</StyledH1>
    <StyledP>This is the Stories page</StyledP>
    <StoryCard />
  </div>
)

export default StoriesPage
