import React from 'react'
import faker from 'faker'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { StyledH2, StyledP, media } from '../theme/globalStyle'
import { ICONS } from '../theme/constants.js'
import Icon from '../layouts/components/Icon.js'
import Hero from '../layouts/components/Hero'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 3rem 0;
`

const MainTitle = StyledH2.extend`
  grid-column: 2 / span 10;
  justify-self: center;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
  padding-bottom: 0.5rem;
`

const MainSubtitle = StyledP.extend`
  grid-column: 2 / span 10;
  justify-self: center;
  font-size: 1.6rem;
  text-align: center;
  color: ${props => props.theme.secondary.red};
  margin: 0.5rem;
  padding: 0.3rem;
`

const IconContainer = styled.div`
  grid-column: 2 / span 10;
  padding: 0.5em;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
`

const IconWrapper = styled(Link)`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  margin: 1rem 0;
  &:hover {
    p {
      color: ${props => props.theme.tints.brightgreen};
    }
    svg path {
      fill: ${props => props.theme.tints.brightgreen};
    }
  }
`
const IconText = StyledP.extend`
  font-size: 1.25rem;
  text-align: center;
  color: ${props => props.theme.primary.light};
  margin: 0.5rem;
  padding: 0.3rem;
`


const IndexPage = ({ data }) => (
  <div>
    <Hero type="main" title={data.site.siteMetadata.title} />
    <PageContainer>
      <MainTitle>explore what is next</MainTitle>
      <MainSubtitle>{faker.lorem.sentence()}</MainSubtitle>

    <IconContainer>
      <IconWrapper to={`/${data.site.siteMetadata.pages[0]}`}>
        <Icon
          icon={ICONS.BRIEFCASE}
          size={100}
          color={({ theme }) => theme.primary.dark}
        />
        <IconText>Get a job</IconText>
      </IconWrapper>

      <IconWrapper to={`/${data.site.siteMetadata.pages[1]}`}>
        <Icon
          icon={ICONS.BOOKS}
          size={100}
          color={({ theme }) => theme.primary.dark}
          viewbox={'0 0 36 32'}
        />
        <IconText>Boost skills</IconText>
      </IconWrapper>

      <IconWrapper to={`/${data.site.siteMetadata.pages[2]}`}>
        <Icon
          icon={ICONS.GROUP}
          size={90}
          color={({ theme }) => theme.primary.dark}
          viewbox={'0 0 30 28'}
        />
        <IconText>Find a community</IconText>
      </IconWrapper>

      <IconWrapper to={`/${data.site.siteMetadata.pages[3]}`}>
        <Icon
          icon={ICONS.RULER}
          size={90}
          color={({ theme }) => theme.primary.dark}
        />
        <IconText>Help nonprofits</IconText>
      </IconWrapper>

      <IconWrapper to={`/${data.site.siteMetadata.pages[4]}`}>
        <Icon
          icon={ICONS.BLOG}
          size={90}
          color={({ theme }) => theme.primary.dark}
        />
        <IconText>Share an experience</IconText>
      </IconWrapper>
    </IconContainer>

    </PageContainer>
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.object,
  white: PropTypes.string,
  dark: PropTypes.string
}

// eslint-disable-next-line
export const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
        pages
      }
    }
  }
`

export default IndexPage
