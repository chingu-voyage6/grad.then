import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import filterOptions from '../utils/filterOptions'

const StyledSelect = styled.select`
  padding: 8px 0;
  width: 100px;
  background-color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.primary.dark};
`

const StyledFilter = styled.div`
  padding: 5px;
`

const StyledFilters = styled.div`
  display: flex;
  margin: 5px;
`

const StyledInput = styled.input`
  padding: 8px 4px;
  border: 1px solid ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.primary.dark};
`

const StyledButton = styled.button`
  margin: 0;
  padding: 9px 4px;
  border: 1px solid rgb(169, 169, 169);
  border-left-width: 0;
  background-color: ${({ theme }) => theme.primary.light};
  color: white;
  cursor: pointer;
`

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

const Filter = ({ term }) => {
  return (
    <StyledFilter>
      <StyledSelect name={term} id={term}>
        <option value="-1">{term.toUpperCase()}</option>
        {filterOptions[term].map((filterBy, index) => {
          return (
            <option key={index} value={index}>
              {filterBy}
            </option>
          )
        })}
      </StyledSelect>
    </StyledFilter>
  )
}

const Filters = () => {
  const terms = Object.keys(filterOptions)

  return (
    <StyledFilters>
      {terms.map((term, index) => {
        return <Filter key={index} term={term} />
      })}
    </StyledFilters>
  )
}

const Search = () => {
  return (
    <div>
      <StyledInput type="text" placeholder="Enter search term" />
      <StyledButton>Search</StyledButton>
    </div>
  )
}

class SearchAndFilter extends Component {
  render() {
    return (
      <StyledForm style={{ display: 'flex' }}>
        <Filters />
        <Search />
      </StyledForm>
    )
  }
}

Filter.propTypes = {
  term: PropTypes.string.isRequired
}

export default SearchAndFilter
