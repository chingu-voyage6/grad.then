import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { theme, media } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.secondary.yellow};
`

const Main = styled.div`
  margin: 0 0 34% 0;
  text-align: center;
  grid-column: 3 / span 8;
  ${media.giant`
    grid-column: 2 / span 10;
    margin: 0 0 25% 0;
  `}
  ${media.tablet`
    margin: 0 0 10% 0;
  `}
  ${media.phone`
    grid-column: 1 / span 12;
    margin: 0 1rem 18% 1rem;
  `}
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
