import React from 'react'
import styled from 'styled-components'

import { StyledH3, StyledP } from '../../theme/globalStyle'
import { ButtonSmall } from '../components/Button'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
`

const StoryTitle = StyledH3.extend`
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const StoryText = StyledP.extend`
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
`

const Image = styled.img`
  grid-area: img;
  justify-self: center;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  width: 6.25rem;
  height: 6.25rem;
`

class StoryCard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.img} />
        <Text>
          <StoryTitle>{this.props.title}</StoryTitle>
          <StoryText>{this.props.text}</StoryText>
          <ButtonSmall color={props => props.theme.white} border={props => props.theme.white}>
            read more
          </ButtonSmall>
        </Text>
      </Wrapper>
    )
  }
}

export default StoryCard
