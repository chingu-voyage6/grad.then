import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import filterOptions from '../utils/filterOptions'

// const StyledSelect = styled.select`
//   padding: 8px 0;
//   width: 100px;
//   background-color: ${({ theme }) => theme.white};
//   border-color: ${({ theme }) => theme.primary.light};
//   color: ${({ theme }) => theme.primary.dark};
// `
//
// const StyledFilter = styled.div`
//   padding: 5px;
// `
//
// const StyledFilters = styled.div`
//   display: flex;
//   margin: 5px;
// `

const StyledInput = styled.input`
  padding: 8px 4px;
  border: 2px solid ${({ theme }) => theme.secondary.red};
  color: ${({ theme }) => theme.primary.dark};
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
    background-color: ${props => props.theme.primary.light};
    color: ${props => props.theme.white};
    border-color: ${({ theme }) => theme.primary.light};
  }
`

const StyledForm = styled.form`
  grid-area: ${props => props.area};
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: auto;
  ${'' /* justify-content: center;
  align-items: center; */}
  font-size: 1rem;
  margin: 1rem 0 2rem 0;
`

const StyledSearch = styled.div`
  grid-column: 4 / span 2;
  justify-self: end;
`
//
// const Filter = ({ term }) => {
//   return (
//     <StyledFilter>
//       <StyledSelect name={term} id={term}>
//         <option value="-1">{term.toUpperCase()}</option>
//         {filterOptions[term].map((filterBy, index) => {
//           return (
//             <option key={index} value={index}>
//               {filterBy}
//             </option>
//           )
//         })}
//       </StyledSelect>
//     </StyledFilter>
//   )
// }
//
// const Filters = () => {
//   const terms = Object.keys(filterOptions)
//
//   return (
//     <StyledFilters>
//       {terms.map((term, index) => {
//         return <Filter key={index} term={term} />
//       })}
//     </StyledFilters>
//   )
// }
const StyledFilter = styled.div`
  grid-column: 1 / span 2;
  justify-self: start;
`
const FilterButton = styled.button`
  min-width: 7rem;
  padding: 0.5rem;
  margin-left: 0.2rem;
  font-size: 1rem;
  background-color: ${props => props.theme.secondary.yellow};
  color: ${props => props.theme.primary.dark};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary.light};
    color: ${props => props.theme.white};
  }
  &.active {
    background-color: ${props => props.theme.secondary.red};
  }
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
      {
        arr.map((elem, index) => (
          <FilterButton key={index}
            onClick={handleClick}
            className={!index? 'active' : ''}>
            {elem}
          </FilterButton>
        ))
      }
    </StyledFilter>
  )
}

const Search = () => {
  return (
    <StyledSearch>
      <StyledInput type="text" placeholder="Enter search term" />
      <StyledButton>Search</StyledButton>
    </StyledSearch>
  )
}

class SearchAndFilter extends Component {
  render() {
    return (
      <StyledForm area={this.props.area}>
        {/* <Filters /> */}
        <Filter menuItems={this.props.items}
          onChange={this.props.onChange}
        />
        <Search />
      </StyledForm>
    )
  }
}

// Filter.propTypes = {
//   term: PropTypes.string.isRequired
// }

Filter.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

StyledForm.propTypes = {
  area: PropTypes.string.isRequired
}

SearchAndFilter.propTypes = {
  area: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchAndFilter
