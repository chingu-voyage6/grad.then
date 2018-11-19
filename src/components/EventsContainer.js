import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import ProjectCard from './ProjectCard'
import Pagination from './Pagination'
import { LoadingContent } from './Titles'
import { fakeEventsAPI, fakeEventsAPISearch } from '../utils/api'

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
  `};
  ${media.tablet`
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

class EventsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchQuery: '',
      query: [
        {
          title: '',
          image: '',
          date: '',
          city: '',
          country: '',
          description: ''
        }
      ]
    }
    this.CARDS = { cols: 5, items: 6 }

    this.changePage = this.changePage.bind(this)
    this.handleDates = this.handleDates.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    const loading = false
    fakeEventsAPI(this.CARDS.items).then(query =>
      this.setState({ loading, query })
    )
  }

  changePage(num) {
    //for now it immitates querying different pages
    const fakePage = () => {
      const length = this.CARDS.items
      let result
      if (this.state.searchQuery) {
        const searchQuery = this.state.searchQuery
        result = fakeEventsAPI(
          length,
          undefined,
          undefined,
          searchQuery
        )
      } else {
        result = fakeEventsAPI(length)
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
    const length =
        str === 'all'
          ? this.CARDS.items
          : Math.floor(Math.random() * (this.CARDS.items + 1)),
      city = str === 'my area' ? 'My City' : '',
      country = str === 'my area' ? 'My Country' : ''
    let result

    if (this.state.searchQuery) {
      const searchQuery = this.state.searchQuery
      result = fakeEventsAPI(length, city, country, searchQuery)
    } else {
      result = fakeEventsAPI(length, city, country)
    }

    result.then(query => this.setState({ query }))
  }

  handleSearch() {
    //immitation of search query
    if (this.state.searchQuery) {
      const searchStr = this.state.searchQuery
      fakeEventsAPISearch(searchStr, this.CARDS.items).then(query =>
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
    const loading = this.state.loading
    return (
      <Wrapper>
        <FilterAndSearch
          area="fs"
          items={this.props.menuFilter}
          changeDates={this.handleDates}
          search={this.handleSearch}
          input={this.handleInput}
        />
        {loading ? (
          <LoadingContent area="cont">Loading...</LoadingContent>
        ) : (
          <Container>
            <CardContainer
              cols={this.CARDS.cols}
              cards={this.CARDS.items}>
              {arr.map((elem, index) => (
                <ProjectCard
                  key={index}
                  type="list"
                  title={elem.title}
                  text={elem.description}
                  img={elem.image}
                  list={[elem.date, elem.city, elem.country]}
                />
              ))}
            </CardContainer>
            <Pagination
              onChange={this.changePage}
              background={this.props.theme.white}
              pageNum={2}
            />
          </Container>
        )}
      </Wrapper>
    )
  }
}
export default withTheme(EventsContainer)

EventsContainer.propTypes = {
  menuFilter: PropTypes.array.isRequired,
  theme: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
}
