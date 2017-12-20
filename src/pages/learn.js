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

const LearnPage = () => (
  <div>
    <Hero type="learn" />
    <SectionTitle>featured courses</SectionTitle>

    <CardContainer cols={5}>{addCards(5, 'project')}</CardContainer>

    <SectionTitle>coding interviews</SectionTitle>

    <CardContainer cols={5}>{addCards(5, 'project')}</CardContainer>
  </div>
)

export default LearnPage
