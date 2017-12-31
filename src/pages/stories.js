import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2 } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'
import Pagination from '../layouts/components/Pagination'

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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
      <Pagination pageNum={5} />
    </div>
  </div>
)

export default StoriesPage
