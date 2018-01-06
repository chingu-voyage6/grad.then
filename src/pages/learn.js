import React from 'react'
import PropTypes from 'prop-types'
import faker from 'faker'
import styled from 'styled-components'
import Hero from '../layouts/components/Hero'
import { withTheme } from 'styled-components'

import { StyledP, media } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import CoursesContainer from '../layouts/components/CoursesContainer'
import { addCards } from '../layouts/utils/helpers'
import Divider from '../layouts/components/Divider'
import { ICONS } from '../theme/constants'
import Icon from '../layouts/components/Icon'
import SectionTitle from '../layouts/components/SectionTitle'

const IconWrapper = styled.div`
  min-width: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  margin: 1rem 0;
  ${media.desktop`
    min-width: 3em;
    width: 7em;
    margin: 0.3rem 0 0 0;
  `} ${media.tablet`
    width: 6em;
    padding: 0.3rem;
    margin-top: 1rem;
  `} ${media.phone`
    width: 4em;
  `};
`
const IconText = StyledP.extend`
  font-size: 1.25rem;
  text-align: center;
  color: ${props => props.theme.primary.dark};
  margin: 0.5rem;
  padding: 0.3rem;
  ${media.desktop`
    font-size: 1rem;
  `} ${media.tablet`
    font-size: 0.9rem;
  `};
`

const LearnPage = props => (
  <div>
    <Hero type="learn" />
    <SectionTitle>featured courses</SectionTitle>

    <CardContainer cols={5} cards={6}>
      {addCards(6, 'project')}
    </CardContainer>

    <SectionTitle>coding interviews</SectionTitle>

    <CardContainer cols={5} cards={6}>
      {addCards(6, 'project')}
    </CardContainer>

    <Divider justify={'space-around'} background={props.theme.secondary.green}>
      <IconWrapper>
        <Icon icon={ICONS.RULER} size={50} color={props.theme.primary.dark} />
        <IconText>{faker.commerce.productName()}</IconText>
      </IconWrapper>

      <IconWrapper>
        <Icon icon={ICONS.BLOG} size={50} color={props.theme.primary.dark} />
        <IconText>{faker.commerce.productName()}</IconText>
      </IconWrapper>
      <IconWrapper>
        <Icon icon={ICONS.RULER} size={50} color={props.theme.primary.dark} />
        <IconText>{faker.commerce.productName()}</IconText>
      </IconWrapper>
    </Divider>

    <CoursesContainer />
  </div>
)

LearnPage.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
export default withTheme(LearnPage)
