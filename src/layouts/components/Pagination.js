import React from 'react'
import styled from 'styled-components'

import { StyledH1 } from '../../theme/globalStyle'

const PaginationButton = styled.button`
  border: 1px solid ${props => props.theme.primary.light};
  color: ${props => props.color || props.theme.primary.light};
  background: ${props => props.background || 'lightgrey'};
  font-size: 1.2rem;
  min-width: 3rem;
  min-height: 3rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.background || 'lightgrey'};
    background: ${props => props.color || props.theme.primary.light};
  }
  &:active {
    outline: none;
  }

  &:visited {
    outline: none;
  }
`
const ButtonRight = PaginationButton.extend`
  border-radius: 0px 4px 4px 0px;
`
const ButtonLeft = PaginationButton.extend`
  border-radius: 4px 0px 0px 4px;
`
//⏪⏩
const PaginationContainer = styled.div`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
`
export const Pagination = props => {
  const pageNum = props.pageNum
  const numButtons = Array.from({ length: pageNum }, (v, k) => (
    <PaginationButton key={k.toString()}>{k + 1}</PaginationButton>
  ))
  return (
    <PaginationContainer>
      <ButtonLeft background={props.background} color={props.color}>
        {props.backward || '⏪'}
      </ButtonLeft>
      {numButtons}
      <ButtonRight background={props.background} color={props.color}>
        {props.forward || '⏩'}
      </ButtonRight>
    </PaginationContainer>
  )
}
