import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../theme/globalStyle'
import { ICONS } from '../../theme/constants'
import Icon from './Icon'

const PaginationIcon = styled(Icon)`
  ${media.tablet`
    width: 24px;
    height: 24px;
  `};
`

const PaginationButton = styled.button`
  border: 1px solid ${props => props.theme.primary.light};
  color: ${props => props.color || props.theme.primary.light};
  background: ${props => props.background};
  font-size: 1.2rem;
  min-width: 3rem;
  min-height: 3rem;
  padding: 1px 8px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  &:hover {
    color: ${props => props.background};
    background: ${props => props.color || props.theme.primary.light};
    svg path {
      fill: ${props => props.theme.white};
    }
  }
  &:active {
    outline: none;
  }
  &:visited {
    outline: none;
  }
  ${media.desktop`
    font-size: 1rem;
    min-width: 2rem;
    min-height: 2rem;
  `};
  ${media.phone`
  padding: 1px 6px;
  `};
`
const ButtonRight = PaginationButton.extend`
  display: flex;
  align-items: center;
  border-radius: 0px 4px 4px 0px;
  padding: 2px 6px;
  ${media.phone`
    padding: 0 6px;
  `};
`
const ButtonLeft = PaginationButton.extend`
  display: flex;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  padding: 2px 6px;
  ${media.phone`
    padding: 0 6px;
  `};
`

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
      onClick={() => goPage(k)}>
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
        <PaginationIcon
          icon={ICONS.LEFT_ARROW}
          color={({ theme }) => theme.primary.light}
          size={30}
        />
      </ButtonLeft>
      {numButtons}
      <ButtonRight
        background={props.background}
        color={props.color}
        onClick={goNext}>
        <PaginationIcon
          icon={ICONS.RIGHT_ARROW}
          color={({ theme }) => theme.primary.light}
          size={30}
        />
      </ButtonRight>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  pageNum: PropTypes.number,
  backward: PropTypes.bool,
  forward: PropTypes.bool,
  onChange: PropTypes.func
}

export default Pagination
