import React from 'react'
import PropTypes from 'prop-types'
import faker from 'faker'
import styled from 'styled-components'
import Hero from '../components/Hero'
import { withTheme } from 'styled-components'

import { StyledP, media } from '../theme/globalStyle'
import CardContainer from '../components/CardContainer'
import CoursesContainer from '../components/CoursesContainer'
import { addCards } from '../utils/helpers'
import Divider from '../components/Divider'
import { ICONS } from '../theme/constants'
import Icon from '../components/Icon'
import { SectionTitle } from '../components/Titles'

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
  `};
  ${media.tablet`
    width: 6em;
    padding: 0.3rem;
    margin-top: 1rem;
  `};
  ${media.phone`
    width: 4em;
  `};
`
const IconText = StyledP.extend`
  font-size: 1.25rem;
  text-align: center;
  color: ${props => props.theme.primary.dark};
  margin: 0.5rem;
  padding: 0.3rem;
  span {
    font-size: 1.1em;
    font-weight: 600;
    color: ${props => props.theme.white};
  }
  ${media.desktop`
    font-size: 1rem;
  `};
  ${media.tablet`
    font-size: 0.9rem;
  `};
`

const LearnPage = ({ theme, data }) => (
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

    <Divider
      justify={'space-around'}
      background={theme.secondary.green}>
      <IconWrapper>
        <Icon
          icon={ICONS.DISPLAY}
          size={60}
          color={theme.primary.dark}
        />
        <IconText>
          <span>{faker.random.number()}</span> courses start this week
        </IconText>
      </IconWrapper>

      <IconWrapper>
        <Icon
          icon={ICONS.BUBBLES}
          size={60}
          color={theme.primary.dark}
          viewbox="0 0 36 32"
        />
        <IconText>
          <span>{faker.random.number()}</span> interview questions
          available
        </IconText>
      </IconWrapper>

      <IconWrapper>
        <Icon
          icon={ICONS.LIBRARY}
          size={60}
          color={theme.primary.dark}
          viewbox="0 0 34 32"
        />
        <IconText>
          <span>{faker.random.number()}</span> course providers found
        </IconText>
      </IconWrapper>
    </Divider>

    <CoursesContainer
      menuFilter={data.site.siteMetadata.filterOptions.learn}
    />
  </div>
)

LearnPage.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export const query = graphql`
  query LearnQuery {
    site {
      siteMetadata {
        filterOptions {
          learn
        }
      }
    }
  }
`

export default withTheme(LearnPage)
