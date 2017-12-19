import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ColorPalette as CP } from '../../theme/globalStyle'

const StyledCardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 1rem;
`

const StyledStories = styled.div`
  grid-column: 3 / span 8;
  display:grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: minmax(100px, auto);
  grid-gap: 0.5rem;
  border: 2px solid ${CP.primary.dark};
  padding: 1rem;
`

const CardContainer = props => (
  <StyledCardContainer>
    <StyledStories cols={props.cols}>
      { props.children }
    </StyledStories>
  </StyledCardContainer>
)

CardContainer.propTypes = {
  cols: PropTypes.number.isRequired
}

export default CardContainer
