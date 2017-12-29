import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../../theme/globalStyle'
import logo from '../../img/favicon.png'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.secondary.yellow};
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
`

// min-height is just for the purpose of nice looking page
const Main = styled.div`
  margin: 50% 0;
  text-align: center;
  grid-column: 4/10;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="grad.then()"
        meta={[
          { name: 'description', content: 'error page' },
          { name: 'keywords', content: 'error, 404, path not found' }
        ]}
      />
      <Main>{children()}</Main>
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
