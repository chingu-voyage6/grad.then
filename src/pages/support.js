import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2, StyledP, media } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'
import Divider from '../layouts/components/Divider'
import { ICONS } from '../theme/constants.js'
import Icon from '../layouts/components/Icon.js'

import faker from 'faker'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
`
const SectionP = StyledP.extend`
  color: ${props => props.theme.text};
  ${media.tablet`
    font-size: 1rem;
    padding: 0.5rem;
  `};
`

const SupportPage = ({ data }) => (
  <div>
    <Hero type="support" />
    <CardContainer cols={3}>
      <SectionP>{faker.lorem.paragraph()}</SectionP>
      {addCards(2, 'project', undefined, 'none')}
    </CardContainer>

    <Divider justify={'center'}>
      <h3>Hello world!</h3>
    </Divider>

    <SectionTitle>featured projects</SectionTitle>

    <CardContainer cols={5} cards={6}>
      {addCards(6, 'project')}
    </CardContainer>

    <SectionTitle>search &#38; filter here</SectionTitle>

    <CardContainer cols={5}>{addCards(10, 'project')}</CardContainer>
  </div>
)

// inject data.site.siteMetadata.filterOptions.support into
// SupportContainer and pass to FilterAndSearch component to
// form filter menu

export const query = graphql`
  query SupportQuery {
    site {
      siteMetadata {
        filterOptions {
          support
        }
      }
    }
  }
`

export default SupportPage
