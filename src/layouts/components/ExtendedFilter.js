import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { StyledA, StyledH3 } from '../../theme/globalStyle'

const StyledContainer = styled.div`
  ${'' /* width: 300px; */}
  grid-area: filt;
  margin-bottom: 11rem;
`
const StyledFilter = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
`

const FilterTitle = StyledH3.extend`
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
  margin: 0.5rem;
  padding: 0.5rem;
`

const FilterName = styled.button`
  min-width: 10rem;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.primary.light};
  color:${props => props.theme.white};
  text-transform: uppercase;
  border: none;
  &:hover, &:focus {
    background-color: ${props => props.theme.secondary.red};
  }
`

const OptionContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.white};
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  &.show {
    display: block;
  }
`

const FilterOption = StyledA.extend`
  padding: 12px 16px;
  margin: 0;
  display: block;
  color: ${props => props.theme.primary.dark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondary.green};
  }
`

export default class ExtendedFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter:['name1','name2','name3','name4']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  handleClick(e){
    const targetId = e.target.id,
          currOptionId = `opt-cont-${targetId.substr(-1)}`,
          currOption = document.getElementById(currOptionId);
    currOption.classList.toggle("show");
  }

  handleOption(e) {
    const targetId = e.target.parentNode.id,
          num = targetId.substr(-1),
          targetParent = e.target.parentNode,
          targetText = e.target.innerText,
          currFilterId = `filter${num}`,
          currFilter = document.getElementById(currFilterId);
    //console.log(currFilter);
    currFilter.innerHTML = targetText;
    targetParent.classList.remove("show");

    let arr = this.state.filter.slice();
    arr[num-1] = targetText;

    this.setState({
      filter: arr
     });
  }

  render() {
    return (
      <StyledContainer>
        <StyledFilter>
          <FilterTitle>name1</FilterTitle>
          <FilterName id="filter1" onClick={this.handleClick}>
            {this.state.filter[0]}
          </FilterName>
          <OptionContainer id='opt-cont-1'>
            <FilterOption onClick={this.handleOption}>Option1</FilterOption>
            <FilterOption onClick={this.handleOption}>Option2</FilterOption>
            <FilterOption onClick={this.handleOption}>Option3</FilterOption>
            <FilterOption onClick={this.handleOption}>Option4</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>name2</FilterTitle>
          <FilterName id="filter2" onClick={this.handleClick}>
            {this.state.filter[1]}
          </FilterName>
          <OptionContainer id='opt-cont-2'>
            <FilterOption onClick={this.handleOption}>Option1</FilterOption>
            <FilterOption onClick={this.handleOption}>Option2</FilterOption>
            <FilterOption onClick={this.handleOption}>Option3</FilterOption>
            <FilterOption onClick={this.handleOption}>Option4</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>name3</FilterTitle>
          <FilterName id="filter3" onClick={this.handleClick}>
            {this.state.filter[2]}
          </FilterName>
          <OptionContainer id='opt-cont-3'>
            <FilterOption onClick={this.handleOption}>Option1</FilterOption>
            <FilterOption onClick={this.handleOption}>Option2</FilterOption>
            <FilterOption onClick={this.handleOption}>Option3</FilterOption>
            <FilterOption onClick={this.handleOption}>Option4</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>name4</FilterTitle>
          <FilterName id="filter4" onClick={this.handleClick}>
            {this.state.filter[3]}
          </FilterName>
          <OptionContainer id='opt-cont-4'>
            <FilterOption onClick={this.handleOption}>Option1</FilterOption>
            <FilterOption onClick={this.handleOption}>Option2</FilterOption>
            <FilterOption onClick={this.handleOption}>Option3</FilterOption>
            <FilterOption onClick={this.handleOption}>Option4</FilterOption>
        </OptionContainer>
        </StyledFilter>
      </StyledContainer>
    )
  }
}
