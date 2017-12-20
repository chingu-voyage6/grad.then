import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import { theme } from '../theme/globalStyle'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'hd hd hd hd hd hd hd hd hd hd hd hd'
    'main main main main main main main main main main main main'
    'ft ft ft ft ft ft ft ft ft ft ft ft';
`

// min-height is just for the purpose of nice looking page
const Main = styled.div`
  grid-area: main;
  min-height: 800px;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="grad.then()"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />

      <Main>{children()}</Main>

      <Footer />
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
