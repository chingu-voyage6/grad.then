import React from 'react'
import styled from 'styled-components'

import { StyledH3, StyledP } from '../../theme/globalStyle'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 3fr;
  grid-template-rows: auto;
  grid-template-areas: 'text text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
`

const JobTitle = StyledH3.extend`
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const JobText = StyledP.extend`
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
`

class JobsList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <JobTitle>{this.props.title}</JobTitle>
          <JobText>{this.props.text}</JobText>
        </Text>
      </Wrapper>
    )
  }
}

export default JobsList
