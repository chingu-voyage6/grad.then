import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  max-width: 200px;
  border: none;
  margin: 1rem auto;
  padding: 0;

`
const Pagination = props => {
  const pageNum = props.pageNum
  const numButtons = Array.from({ length: pageNum }, (v, k) => (
    <PaginationButton
      key={k.toString()}
      background={props.background}
      color={props.color}
      onClick={()=> goPage(k)}>
      {k + 1}
    </PaginationButton>
  ))

  const goPage = num => props.onChange(num + 1)
  const goPrevious = () => props.onChange(-1)
  const goNext = () => props.onChange(0)

  return (
    <PaginationContainer>
      <ButtonLeft
        background={props.background}
        color={props.color}
        onClick={goPrevious}>
        {props.backward || '⏪'}
      </ButtonLeft>
      {numButtons}
      <ButtonRight
        background={props.background}
        color={props.color}
        onClick={goNext}>
        {props.forward || '⏩'}
      </ButtonRight>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  pageNum: PropTypes.number,
  backward: PropTypes.bool,
  forward: PropTypes.bool,
  onChange: PropTypes.func
}

export default Pagination
