import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Page = styled.div`
  color: red;
`

const NotFoundPage = () => (
  <Page>
    <h1>OOPS, PAGE NOT FOUND!</h1>
    <Link to="/">Go to Homepage</Link>
  </Page>
)

export default NotFoundPage
