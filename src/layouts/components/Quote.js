import React from 'react'
import styled from 'styled-components'

const Quote = styled.blockquote`
  color: ${props => props.theme.primary.dark};
  font-size: 1.5rem;
  font-family: Open Sans;
  margin: 0.75rem 0 0;
  font-style: italic;
`

const Separator = styled.hr`
  height: 5px;
  width: 40px;
  background: ${props => props.theme.primary.dark};
  margin-left: 0;
  border: none;
`

const Wrapper = styled.div`
  margin: 2rem 0;
`

export default props => (
  <Wrapper>
    <Separator />
    <Quote>{props.children}</Quote>
  </Wrapper>
)
