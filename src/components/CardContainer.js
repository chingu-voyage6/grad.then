import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { media } from '../theme/globalStyle'

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 1.5rem 0 2rem 0;
  ${media.phone`
    margin: 0.5rem 0 1rem 0;
  `};
`

const StyledStories = styled.div`
  grid-column: 2 / span 10;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  border: ${props => `2px solid ${props.theme.primary.dark}`};
  border-radius: 2px;
  padding: 0.6rem;
  & > div:last-child {
    display: ${props =>
      props.cols < props.cards
        ? 'none'
        : props.story ? 'grid' : 'flex'};
  }
  ${media.giant`
    grid-column: 1 / span 12;
    margin: 0 1.5rem;
  `} ${media.desktop`
    grid-column: 1 / span 12;
    margin: 0 1.5rem;
  `} ${media.tablet`
    margin: 0.5rem 2rem;
    grid-template-columns: ${props =>
      props.cols > 3
        ? `repeat(${Math.floor(props.cols / 2)}, 1fr)`
        : `repeat(${props.cols}, 1fr)`};
    & > div:last-child {
      display: ${props => (props.story ? 'grid' : 'flex')};
    }
  `} ${media.phone`
    margin: 0;
    grid-column: 2 / span 10;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  `};
`
// basic layout (in StyledStories)
// n = props.cols
// - n cards on all big screens
// - Math.floor( n / 2) on a tablet screen
// - 1 column on a phone screen

// example: n = 5
// 5 cards / 2 cards / 1 card

// if n <= 3
// - n cards on big screens & tablets
// - 1 column on the phone screen

// we can supply 6 cards for 5 columns via
// props.cards = 6 and props.col = 5
// result:
// 5 columns / 5 cards - 2 columns / 6 cards - 1 column / 6 cards

const CardContainer = props => (
  <StyledCardContainer>
    <StyledStories
      cols={props.cols}
      cards={props.cards}
      story={props.story}>
      {props.children}
    </StyledStories>
  </StyledCardContainer>
)

CardContainer.propTypes = {
  cols: PropTypes.number.isRequired, //number of columns
  cards: PropTypes.number, // number of cards
  story: PropTypes.bool,
  children: PropTypes.array
}

export default withTheme(CardContainer)
