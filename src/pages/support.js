import styled from "styled-components";
import React from 'react'
import { graphql } from 'gatsby'
import faker from 'faker'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { StyledH3, StyledP, media } from '../theme/globalStyle'
import CardContainer from '../components/CardContainer'
import { addCards } from '../utils/helpers'
import Divider from '../components/Divider'
import { SectionTitle } from '../components/Titles'
import SupportContainer from '../components/SupportContainer'

const DividerText = styled(StyledH3)`
  font-size: 1.5em;
  text-align: center;
  margin: 1rem;
  ${media.giant`
    padding: 1.25rem 1rem;
  `};
  ${media.desktop`
    padding: 1rem;
  `};
  ${media.tablet`
    font-size: 1.5rem;
    margin: 0.5rem 0;
    padding: 0.75rem;
  `};
  ${media.phone`
    font-size: 1.25rem;
    padding: 0.5rem;
  `};
`

const SectionP = styled(StyledP)`
  color: ${props => props.theme.text};
  ${media.tablet`
    font-size: 1rem;
    padding: 0.3rem;
  `};
  ${media.phone`
    font-size: 1.125rem;
    padding: 0.25rem;
  `};
`

const SupportPage = ({ data }) => (
  <Layout>
    <Hero type="support" />

    <SectionTitle> how to support</SectionTitle>

    <CardContainer cols={3} cards={2}>
      <SectionP>{faker.lorem.paragraph()}</SectionP>
      {addCards(2, 'project', undefined, 'none')}
    </CardContainer>

    <Divider justify={'center'}>
      <DividerText>{faker.hacker.phrase()}</DividerText>
    </Divider>

    <SectionTitle>featured projects</SectionTitle>

    <CardContainer cols={5} cards={6}>
      {addCards(6, 'project')}
    </CardContainer>

    <Divider justify={'center'}>
      <DividerText>{faker.hacker.phrase()}</DividerText>
    </Divider>

    <SupportContainer
      menuFilter={data.site.siteMetadata.filterOptions.support}
    />
  </Layout>
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
