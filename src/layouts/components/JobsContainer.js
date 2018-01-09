import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../theme/globalStyle'
import JobsFilter from './JobsFilter'
import JobsList from './JobsList'
import Pagination from './Pagination'
import FilterAndSearch from './FilterAndSearch'
import { fakeAPI, fakeAPISearch } from '../utils/api'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-template-areas:
    '. fs fs fs fs fs fs fs fs fs fs .'
    '. filt filt filt lst lst lst lst lst lst lst .';
  margin-top: 2.5rem;
  ${media.tablet`
    grid-column-gap: 0.5rem;
    grid-template-areas:
      'fs fs fs fs fs fs fs fs fs fs fs fs'
      'filt filt filt filt lst lst lst lst lst lst lst .';
  `} ${media.phone`
    grid-column-gap: 0.5rem;
    grid-template-areas:
      'fs fs fs fs fs fs fs fs fs fs fs fs'
      'filt filt filt filt filt filt filt filt filt filt filt filt'
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

class JobsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      filter: ['any', 'any', 'any', 'any'],
      query: [
        {
          title: '',
          type: '',
          role: '',
          location: '',
          description: ''
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitQuery = this.submitQuery.bind(this)
    this.changePage = this.changePage.bind(this)
    this.handleDates = this.handleDates.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    fakeAPI().then(query => this.setState({ query }))
  }

  handleChange(num, data) {
    let arr = this.state.filter.slice()
    arr[num - 1] = data

    this.setState({
      filter: arr
    })
  }

  submitQuery() {
    const data = this.state.filter
    fakeAPI(10, data).then(query => this.setState({ query }))
  }

  changePage(num) {
    //for now it immitates querying different pages
    const fakePage = () => {
      var result
      if (this.state.searchQuery) {
        const searchQuery = this.state.searchQuery
        result = fakeAPI(undefined, undefined, searchQuery)
      } else {
        result = fakeAPI()
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
    const data = this.state.filter
    const currLength =
        this.state.query.length < 5 ? 7 : this.state.query.length,
      length = str === 'all' ? 7 : Math.floor(Math.random() * (currLength + 1))
    var result

    if (this.state.searchQuery) {
      const searchQuery = this.state.searchQuery
      result = fakeAPI(length, undefined, searchQuery)
    } else {
      result = fakeAPI(length, data)
    }

    result.then(query => this.setState({ query }))
  }

  handleSearch() {
    //immitation of search query
    if (this.state.searchQuery) {
      const searchStr = this.state.searchQuery
      fakeAPISearch(searchStr).then(query => this.setState({ query }))
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
          items={this.props.menuFilter}
          changeDates={this.handleDates}
          search={this.handleSearch}
          input={this.handleInput}
        />
        <JobsFilter
          titles={this.state.filter}
          onChange={this.handleChange}
          onSubmit={this.submitQuery}
        />
        <List>
          {arr.map((elem, index) => (
            <JobsList key={index} area="lst" title={elem.title} text={elem} />
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

export default withTheme(JobsContainer)

JobsContainer.propTypes = {
  menuFilter: PropTypes.array.isRequired,
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
