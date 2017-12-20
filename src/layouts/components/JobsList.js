import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { StyledH3, StyledP, StyledLi } from '../../theme/globalStyle'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  /* grid-template-columns: 3fr;
  grid-template-rows: auto; */
  grid-template-areas: 'text text text';
  background: ${props => props.theme.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary.light};
`

const JobLink = styled(Link).attrs({
  color: props => props.theme.secondary.red
})`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.color};
  }
`
const JobItem = StyledLi.extend`
  display: inline;
  text-transform: uppercase;
  color: ${props =>
    props['data-header']
      ? props => props.theme.primary.light
      : props => props.theme.white};
  padding: 0.5rem;
`

const JobTitle = StyledH3.extend`
  color: ${props => props.theme.primary.light};
  margin: 0.05rem;
  padding: 0rem;
`

const JobText = StyledP.extend`
  color: ${props => props.theme.primary.light};
  margin: 0.05rem;
  padding: 0rem;
`

const Text = styled.div`
  /* grid-area: text; */
  padding: 0.5rem;
  margin: 0.5rem;
`

class JobsList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <JobLink>hello</JobLink>
          <JobTitle>{this.props.title}</JobTitle>
          <JobText>{this.props.text}</JobText>
        </Text>
      </Wrapper>
    )
  }
}

export default JobsList
