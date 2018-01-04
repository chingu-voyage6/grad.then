import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '../../theme/globalStyle'

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 1.5rem 0 3rem 0;
  ${media.desktop`
    margin: 0;
  `}
  ${media.phone`
    margin: 0.5rem 0 1rem 0;
  `}
`

const StyledStories = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  border: 2px solid ${props => props.theme.primary.dark};
  border-radius: 2px;
  padding: 0.6rem;
  & > div:last-child {
    display: ${props => (props.cols < props.cards)? `none` : `flex`};
  }
  ${media.desktop`
    grid-column: 1 / span 12;
    margin: 0 1.5rem;
  `}
  ${media.tablet`
    margin: 0.5rem 2rem;
    grid-template-columns: ${props => (props.cols > 3)? `repeat(${Math.floor(props.cols / 2)}, 1fr)`: `repeat(${props.cols}, 1fr)`};
    & > div:last-child {
      display: flex;
    }
  `}
  ${media.phone`
    margin: 0.5rem;
    grid-column: 2 / span 10;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  `}
`

const CardContainer = props => (
  <StyledCardContainer>
    <StyledStories
      cols={props.cols}
      cards={props.cards}
    >
      {props.children}
    </StyledStories>
  </StyledCardContainer>
)

CardContainer.propTypes = {
  cols: PropTypes.number.isRequired, //number of columns
  cards: PropTypes.number, // number of cards
  children: PropTypes.array
}

export default CardContainer
