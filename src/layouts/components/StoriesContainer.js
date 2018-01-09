import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import StoryCard from './StoryCard'

import Pagination from './Pagination'
import { fakeStoriesAPI, fakeStoriesAPISearch } from '../utils/api'

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
  display: flex;
  flex-direction: column;
  align-content: center;
`

class StoriesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      query: [
        {
          title: '',
          image: '',
          description: ''
        }
      ]
    }
    this.CARDS = { cols: 2, items: 6 }

    this.changePage = this.changePage.bind(this)
    this.handleDates = this.handleDates.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    fakeStoriesAPI(this.CARDS.items).then(query => this.setState({ query }))
  }

  changePage(num) {
    //for now it immitates querying different pages
    const fakePage = () => {
      const length = this.CARDS.items
      let result
      if (this.state.searchQuery) {
        const searchQuery = this.state.searchQuery
        result = fakeStoriesAPI(length, searchQuery)
      } else {
        result = fakeStoriesAPI(length)
      }
      result.then(query => this.setState({ query }))
    }

    if (num === -1) {
      //get previous page
      fakePage()
    } else if (num === 0) {
      // get next page
      fakePage()
    } else {
      //get page #num
      fakePage()
    }
  }

  handleDates(str) {
    // immitation of new query
    const random = Math.floor(Math.random() * (this.CARDS.items + 1))
    const length =
        str === 'all'
          ? this.CARDS.items
          : ((random % 2 === 0)? random : random + 1)
    let result

    if (this.state.searchQuery) {
      const searchQuery = this.state.searchQuery
      result = fakeStoriesAPI(length, searchQuery)
    } else {
      result = fakeStoriesAPI(length)
    }

    result.then(query => this.setState({ query }))
  }

  handleSearch() {
    //immitation of search query
    if (this.state.searchQuery) {
      const searchStr = this.state.searchQuery
      fakeStoriesAPISearch(searchStr, this.CARDS.items).then(query =>
        this.setState({ query })
      )
    }
  }

  handleInput(val) {
    this.setState({
      searchQuery: val
    })
  }

  render() {
    const arr = [...this.state.query]
    return (
      <Wrapper>
        <FilterAndSearch
          area="fs"
          items={this.props.menuFilter}
          changeDates={this.handleDates}
          search={this.handleSearch}
          input={this.handleInput}
        />
        <Container>
          <CardContainer cols={this.CARDS.cols} story={true}>
            {arr.map((elem, index) => (
              <StoryCard
                key={index}
                title={elem.title}
                text={elem.description}
                img={elem.image}
              />
            ))}
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
export default withTheme(StoriesContainer)

StoriesContainer.propTypes = {
  menuFilter: PropTypes.array.isRequired
}
