import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import { theme } from '../theme/globalStyle'

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

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="grad.then()"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header navItems={data.site.siteMetadata.pages} />

      <Main>{children()}</Main>

      <Footer navItems={data.site.siteMetadata.pages} />
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func
}

export const query = graphql`
  query NavQuery {
    site {
      siteMetadata {
        pages
      }
    }
  }
`

export default TemplateWrapper
