import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from "./Header.js";

//import './index.css'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    ". main main main main main main main main main main ."
    "ft ft ft ft ft ft ft ft ft ft ft ft";
`;

const Main = styled.div`
  grid-area: main;
`;

const TemplateWrapper = ({ children }) => (
  <PageContainer>
    <Helmet
      title="grad.then()"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <Main>
      {children()}
    </Main>

  </PageContainer>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
