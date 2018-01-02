import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '../../theme/globalStyle'

// Filter component ------------------------------------
const StyledFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  ${media.desktop`
    max-width: 260px;
    flex-wrap: wrap;
  `} ${media.tablet`
    max-width: 100%;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 0 0.3rem;
  `};
`

const FilterButton = styled.button`
  min-width: 120px;
  padding: 0.5rem;
  margin: 0 0 0.2rem 0.2rem;
  font-size: 1rem;
  background-color: ${props => props.theme.secondary.yellow};
  color: ${props => props.theme.primary.dark};
  text-transform: uppercase;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary.light};
    color: ${props => props.theme.white};
  }
  &.active {
    background-color: ${props => props.theme.secondary.red};
  }
  ${media.giant`
    min-width: 100px;
  `} ${media.desktop`
    min-width: 120px;
  `} ${media.tablet`
    min-width: 110px;
    font-size: 0.9rem;
  `};
`

const Filter = props => {
  const arr = props.menuItems
  const handleClick = e => {
    const data = e.target.innerHTML,
      current = e.target,
      previous = document.getElementsByClassName('active')[0]

    e.preventDefault()
    props.onChange(data)

    previous.classList.remove('active')
    current.classList.add('active')
  }

  return (
    <StyledFilter>
      {arr.map((elem, index) => (
        <FilterButton
          key={index}
          onClick={handleClick}
          className={!index ? 'active' : ''}
        >
          {elem}
        </FilterButton>
      ))}
    </StyledFilter>
  )
}

// Search component----------------------------------
const StyledSearch = styled.div`
  margin-left: 0.2rem;
  justify-self: flex-end;
  ${media.tablet`
    width: auto;
  `};
`

const StyledInput = styled.input`
  padding: 8px 4px;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.secondary.red};
  color: ${({ theme }) => theme.primary.dark};
  ${media.tablet`
    max-width: 75%;
    font-size: 0.9rem;
  `};
`

const StyledButton = styled.button`
  margin: 0;
  padding: 9px 4px;
  border: 1px solid ${({ theme }) => theme.secondary.red};
  border-left-width: 0;
  background-color: ${({ theme }) => theme.secondary.red};
  color: ${({ theme }) => theme.primary.dark};
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary.light};
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.primary.light};
  }
  ${media.tablet`
    font-size: 0.9rem;
  `};
`

// controlled Input
// click on button fires request
const Search = props => {
  const handleInput = e => {
    //console.log(e.target.value)
    props.input(e.target.value)
  }
  const handleClick = e => {
    e.preventDefault()
    //console.log('send search request')
    props.search()
  }
  return (
    <StyledSearch>
      <StyledInput
        type="text"
        placeholder="Enter search term"
        onChange={handleInput}
      />
      <StyledButton onClick={handleClick}>Search</StyledButton>
    </StyledSearch>
  )
}

// Search & Fiter component
// container for search & filter
const StyledForm = styled.form`
  grid-area: ${props => props.area};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1rem;
  margin: 1rem 0 2rem 0;
  ${media.desktop`
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    align-items: center;
  `} ${media.tablet`
    flex-wrap: wrap;
    justify-content: center;
  `};
`

class SearchAndFilter extends Component {
  render() {
    return (
      <StyledForm area={this.props.area}>
        {/* <Filters /> */}
        <Filter
          menuItems={this.props.items}
          onChange={this.props.changeDates}
        />
        <Search search={this.props.search} input={this.props.input} />
      </StyledForm>
    )
  }
}

Filter.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired
}

StyledForm.propTypes = {
  area: PropTypes.string.isRequired
}

SearchAndFilter.propTypes = {
  area: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  changeDates: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired
}

export default SearchAndFilter
