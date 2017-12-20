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
const JobLi = StyledLi.extend`
  display: inline;
  color: ${props => props.theme.primary.light};
  margin: 0rem;
  padding: 0rem;
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
  /* margin: 0.5rem; */
  padding: 0.5rem;
`

class JobsList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>
          {this.props.type === 'list' ? (
            <JobLi>
              <JobTitle>
                <JobLink>{this.props.title}</JobLink>
              </JobTitle>
            </JobLi>
          ) : (
            <JobLi>
              <JobTitle>
                <JobLink>{this.props.title}</JobLink>
              </JobTitle>
              <JobText>{this.props.text}</JobText>
            </JobLi>
          )}
        </Text>
      </Wrapper>
    )
  }
}

export default JobsList
