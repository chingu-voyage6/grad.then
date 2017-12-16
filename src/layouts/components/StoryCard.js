import React from 'react'
import styled from 'styled-components'

import faker from 'faker'

import { StyledH3, StyledP, ColorPalette as CP } from '../../theme/globalStyle'

const img = faker.image.imageUrl()

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${CP.primary.light};
  border-radius: 4px;
`

const StoryTitle = StyledH3.extend`
  color: ${CP.text};
  margin: 0.05rem;
  padding: 0.05rem;
`

const StoryText = StyledP.extend`
  color: ${CP.text};
  margin: 0.05rem;
  padding: 0.05rem;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${CP.text};
`

const Image = styled.div`
  grid-area: img;
  justify-self: center;
  padding: 1.75rem;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  background-image: url(${img});
  background-size: 100px;
  width: 40px;
  height: 40px;
`

export const StoryCard = () => (
  <Wrapper>
    <Image />
    <Text>
      <StoryTitle>{faker.commerce.productName()}</StoryTitle>
      <StoryText>{faker.lorem.paragraph()}</StoryText>
    </Text>
  </Wrapper>
)

export default StoryCard
