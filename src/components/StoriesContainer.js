import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import StoryCard from './StoryCard'
import { LoadingContent } from './Titles'
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

const sortByAuthor = arr => {
  const sorted = arr.sort((a, b) => {
    const authorA = a.node.author.lastName,
      authorB = b.node.author.lastName
    console.log(authorA, authorB)
    if (authorA < authorB) {
      return -1
    }
    if (authorA > authorB) {
      return 1
    }
    return 0
  })
  console.log(sorted)
  return sorted
}

class StoriesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      blog: this.props.blog
    }
    this.CARDS = { cols: 2, items: 6 }

    this.changePage = this.changePage.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  changePage(num) {
    //for now it imitates querying different pages
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

  // handles sort by 'ALL', 'BY AUTHOR', and 'TOP RATED'
  handleSort(str) {
    const blog = [...this.state.blog],
      loadedBlog = [...this.props.blog]

    switch (str) {
      case 'all':
        //show all cards
        this.setState({ blog: loadedBlog })
        return
      case 'by author':
        // sort by author
        this.setState({ blog: sortByAuthor(blog) })
        return
      case 'top rated':
        //sort by rating
        return
      default:
        return
    }
  }

  handleSearch() {
    //imitation of search query
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
    const arr = [...this.state.blog]
    //console.log(arr)
    return (
      <Wrapper>
        <FilterAndSearch
          area="fs"
          items={this.props.menuFilter}
          changeDates={this.handleSort}
          search={this.handleSearch}
          input={this.handleInput}
        />
        <Container>
          <CardContainer cols={this.CARDS.cols} story={true}>
            {arr.map(elem => (
              <StoryCard
                key={elem.node.id}
                title={elem.node.title}
                author={elem.node.author.fullName}
                date={elem.node.publishDate}
                text={elem.node.excerpt.excerpt}
                img={elem.node.featureImage.resolutions.src}
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
  blog: PropTypes.array,
  menuFilter: PropTypes.array.isRequired,
  theme: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
}
