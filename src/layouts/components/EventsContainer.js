import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import { addCards } from '../utils/helpers'
import Pagination from './Pagination'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-template-areas:
    '. . fs fs fs fs fs fs fs fs . .'
    'cont cont cont cont cont cont cont cont cont cont cont cont';
  margin-top: 2.5rem;
  ${media.giant`
    grid-column-gap: 0.5rem;
    grid-template-areas:
      '. fs fs fs fs fs fs fs fs fs fs .'
      'cont cont cont cont cont cont cont cont cont cont cont cont';
  `} ${media.tablet`
    grid-template-areas:
      'fs fs fs fs fs fs fs fs fs fs fs fs'
      'cont cont cont cont cont cont cont cont cont cont cont cont';
  `};
`

const Container = styled.div`
  grid-area: cont;
`

class EventsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuFilter: ['all', 'featured', 'in my area'],
      searchQuery: '',
      query: [
        {
          title: '',
          date: '',
          period: '',
          level: '',
          topic: '',
          description: ''
        }
      ]
    }
    this.changePage = this.changePage.bind(this)
    this.handleDates = this.handleDates.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  // componentDidMount() {
  //   fakeLearnAPI().then(query => this.setState({ query }))
  // }

  changePage(num) {
    //for now it immitates querying different pages
    // const fakePage = () => {
    //   var result
    //   if (this.state.searchQuery) {
    //     const searchQuery = this.state.searchQuery
    //     result = fakeLearnAPI(undefined, searchQuery)
    //   } else {
    //     result = fakeLearnAPI()
    //   }
    //   result.then(query => this.setState({ query }))
    // }
    //
    // if (num === -1) {
    //   //get previous page
    //   fakePage()
    // } else if (num === 0) {
    //   // get next page
    //   fakePage()
    // } else {
    //   //get page #num
    //   fakePage()
    // }
  }

  handleDates(str) {
    // immitation of new query
    // const currLength =
    //     this.state.query.length < 5 ? 7 : this.state.query.length,
    //   length = str === 'all' ? 7 : Math.floor(Math.random() * (currLength + 1))
    // var result
    //
    // if (this.state.searchQuery) {
    //   const searchQuery = this.state.searchQuery
    //   result = fakeLearnAPI(length, searchQuery)
    // } else {
    //   result = fakeLearnAPI(length)
    // }
    //
    // result.then(query => this.setState({ query }))
  }

  handleSearch() {
    //immitation of search query
    // if (this.state.searchQuery) {
    //   const searchStr = this.state.searchQuery
    //   fakeLearnAPISearch(searchStr).then(query => this.setState({ query }))
    // }
  }

  handleInput(val) {
    this.setState({
      searchQuery: val
    })
  }

  render() {
    return (
      <Wrapper>
        <FilterAndSearch
          area="fs"
          items={this.state.menuFilter}
          changeDates={this.handleDates}
          search={this.handleSearch}
          input={this.handleInput}
        />
        <Container>
          <CardContainer cols={5} cards={6}>
            {addCards(6, 'project', 'list')}
          </CardContainer>
          <Pagination
            onChange={this.changePage}
            background={this.props.theme.white}
            pageNum={2}
          />
        </Container>
      </Wrapper>
    )
  }
}
export default withTheme(EventsContainer)
