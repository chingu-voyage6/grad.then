import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2 } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'
import Divider from '../layouts/components/Divider'
import { ICONS } from '../theme/constants.js'
import Icon from '../layouts/components/Icon.js'

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


  <Divider justify={'center'}>
    <h3>Hello world!</h3>
  </Divider>
  <Divider justify={'space-around'}>
    <Icon icon={ICONS.RULER} size={50} color={({ theme }) => theme.white} />
    <Icon icon={ICONS.BLOG} size={50} color={({ theme }) => theme.white} />
    <Icon icon={ICONS.RULER} size={50} color={({ theme }) => theme.white} />
  </Divider>

  </div>
)

export default LearnPage
