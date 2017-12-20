import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  margin: 1.5rem 0 3rem 0;
`

const StyledStories = styled.div`
  grid-column: 3 / span 8;
  display:grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  border: 2px solid ${props => props.theme.primary.dark};
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
  cols: PropTypes.number.isRequired,
}

export default CardContainer
