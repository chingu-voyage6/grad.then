import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2 } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
`
const EventsPage = () => (
  <div>
    <Hero type="events" />
    <SectionTitle>featured events</SectionTitle>

    <CardContainer cols={4} cards={4}>
      {addCards(4, 'project', 'list')}
    </CardContainer>
  </div>
)

export default EventsPage
