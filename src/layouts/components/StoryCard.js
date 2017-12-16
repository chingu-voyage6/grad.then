import React from 'react'
import styled from 'styled-components'

import faker from 'faker'

import { StyledH2, StyledP, ColorPalette as CP } from '../../theme/globalStyle'

const img = faker.image.imageUrl()

const Card = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 4px;
  color: ${CP.text};
  background: ${CP.primary.light};
`

const Image = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  background-image: url(${img});
  background-size: 100px;
  width: 40px;
  height: 40px;
`

export const StoryCard = () => (
  <Card>
    <StyledH2>This is the Story Card</StyledH2>
    <StyledP>This is the p</StyledP>
    <Image />
  </Card>
)

export default StoryCard
