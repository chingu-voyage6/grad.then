import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header.js'
import Footer from './Footer.js'

import { theme, GlobalStyle } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'hd hd hd hd hd hd hd hd hd hd hd hd'
    'main main main main main main main main main main main main'
    'ft ft ft ft ft ft ft ft ft ft ft ft';
`

const Main = styled.div`
  grid-area: main;
  margin-top: 4.625rem;
`

const Layout = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <PageContainer>
      <Helmet
        title="grad.then()"
        meta={[
          { name: 'description', content: 'grad.then' },
          {
            name: 'keywords',
            content:
              'web-development, jobs, courses, open-source, events, first-dev-job, stories'
          }
        ]}
      />
      <Header navItems={data.site.siteMetadata.pages} />

      <Main>{children}</Main>

      <Footer navItems={data.site.siteMetadata.pages} />
    </PageContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func
}

export default props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            pages
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
