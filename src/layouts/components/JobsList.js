import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import { StyledH3, StyledP, media } from '../../theme/globalStyle'
import Quote from './Quote'

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary.light};
  margin: 0.5rem 0;
  padding: 0.5rem 0.5rem 0.5rem 0.7rem;
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
  color: ${props => props.theme.primary.light};
  margin: 0rem;
  padding: 0rem;
`

const JobTitle = StyledH3.extend`
  color: ${props => props.theme.primary.light};
  margin: 0.2rem 0.2rem 0.2rem 0;
  padding: 0.2rem 0.2rem 0.2rem 0;
  ${media.desktop`
    font-size: 1.2rem;
  `}
  ${media.tablet`
    font-size: 1rem;
  `}
`
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const JobItem = StyledP.extend`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.text};
  text-transform: capitalize;
  margin: 0.2rem 0.2rem 0.2rem 0;
  padding: 0.2rem 0.2rem 0.2rem 0;
  ${media.tablet`
    font-size: 0.8rem;
  `}
`

const JobText = StyledP.extend`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin: 0.2rem 0.2rem 0.2rem 0;
  padding: 0.2rem 0.2rem 0.2rem 0;
  ${media.tablet`
    font-size: 0.95rem;
  `}
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
            <Quote />
            <Items>
              <JobItem>{`Type: ${this.props.text.type}`}</JobItem>
              <JobItem>{`Role: ${this.props.text.role}`}</JobItem>
              <JobItem>{`Level: ${this.props.text.level}`}</JobItem>
              <JobItem>{`Location: ${this.props.text.location}`}</JobItem>
            </Items>
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
