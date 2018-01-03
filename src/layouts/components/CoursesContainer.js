import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import JobsList from './JobsList'
import Pagination from './Pagination'
import { fakeLearnAPI, fakeLearnAPISearch } from '../utils/api'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-template-areas:
    '. . fs fs fs fs fs fs fs fs . .'
    '. . lst lst lst lst lst lst lst lst . .';
  margin-top: 2.5rem;
  ${media.giant`
    grid-column-gap: 0.5rem;
    grid-template-areas:
      '. fs fs fs fs fs fs fs fs fs fs .'
      '. lst lst lst lst lst lst lst lst lst lst .';
  `} ${media.tablet`
    grid-template-areas:
      'fs fs fs fs fs fs fs fs fs fs fs fs'
      '. lst lst lst lst lst lst lst lst lst lst .';
  `} ${media.phone`
    grid-template-areas:
      'fs fs fs fs fs fs fs fs fs fs fs fs'
      '. lst lst lst lst lst lst lst lst lst lst .';
  `};
`

const List = styled.div`
  grid-area: lst;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  padding: 0;
`

class CoursesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuFilter: ['all', 'new', 'popular'],
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

  componentDidMount() {
    fakeLearnAPI().then(query => this.setState({ query }))
  }

  changePage(num) {
    //for now it immitates querying different pages
    const fakePage = () => {
      var result
      if (this.state.searchQuery) {
        const searchQuery = this.state.searchQuery
        result = fakeLearnAPI(undefined, searchQuery)
      } else {
        result = fakeLearnAPI()
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
    const currLength =
        this.state.query.length < 5 ? 7 : this.state.query.length,
      length = str === 'all' ? 7 : Math.floor(Math.random() * (currLength + 1))
    var result

    if (this.state.searchQuery) {
      const searchQuery = this.state.searchQuery
      result = fakeLearnAPI(length, searchQuery)
    } else {
      result = fakeLearnAPI(length)
    }

    result.then(query => this.setState({ query }))
  }

  handleSearch() {
    //immitation of search query
    if (this.state.searchQuery) {
      const searchStr = this.state.searchQuery
      fakeLearnAPISearch(searchStr).then(query => this.setState({ query }))
    }
  }

  handleInput(val) {
    this.setState({
      searchQuery: val
    })
  }

  render() {
    const arr = this.state.query
    return (
      <Wrapper>
        <FilterAndSearch
          area="fs"
          items={this.state.menuFilter}
          changeDates={this.handleDates}
          search={this.handleSearch}
          input={this.handleInput}
        />
        <List>
          {arr.map((elem, index) => (
            <JobsList
              key={index}
              area="lst"
              type="list"
              title={elem.title}
              text={elem}
            />
          ))}
          <Pagination
            onChange={this.changePage}
            background={this.props.theme.white}
            pageNum={2}
          />
        </List>
      </Wrapper>
    )
  }
}

export default withTheme(CoursesContainer)

CoursesContainer.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
