import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import { StyledH3, StyledP } from '../../theme/globalStyle'

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary.light};
  margin: 0.5rem 0;
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
const JobLi = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  color: ${props => props.theme.primary.light};
  margin: 0rem;
  padding: 0rem;
`

const JobTitle = StyledH3.extend`
  grid-column: 1 / span 3;
  color: ${props => props.theme.primary.light};
  margin: 0.2rem;
  padding: 0.2rem;
`

const JobItem = StyledP.extend`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.text};
  text-transform: capitalize;
  margin: 0.2rem;
  padding: 0.2rem;
`

const JobText = StyledP.extend`
  grid-column: 1 / span 3;
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin: 0.2rem;
  padding: 0.2rem;
`

class JobsList extends React.Component {
  render() {
    return (
      <Wrapper area={this.props.area}>
        {this.props.type === 'list' ? (
          <JobLi>
            <JobTitle>
              <JobLink to="/">{this.props.title}</JobLink>
            </JobTitle>
          </JobLi>
        ) : (
          <JobLi>
            <JobTitle>
              <JobLink to="/">{this.props.title}</JobLink>
            </JobTitle>
            <JobItem>{`Type: ${this.props.text.type}`}</JobItem>
            <JobItem>{`Role: ${this.props.text.role}`}</JobItem>
            <JobItem>{`Location: ${this.props.text.location}`}</JobItem>
            <JobText>{this.props.text.description}</JobText>
          </JobLi>
        )}
      </Wrapper>
    )
  }
}

export default JobsList

Wrapper.propTypes = {
  area: PropTypes.string.isRequired
}

JobsList.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  type: PropTypes.string,
  area: PropTypes.string.isRequired
}
