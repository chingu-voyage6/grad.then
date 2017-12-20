import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2, StyledP } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
`

const StoriesPage = () => (
  <div>
    <Hero type="stories" />
    <SectionTitle>Stories Page</SectionTitle>

    <CardContainer cols={2}>{addCards(4, 'story')}</CardContainer>
  </div>
)

export default StoriesPage
