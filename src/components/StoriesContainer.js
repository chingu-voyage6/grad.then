import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import StoryCard from './StoryCard'
import Pagination from './Pagination'
import { fakeStoriesAPISearch } from '../utils/api'

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
      blog: this.props.initialBlog,
      firstItem: 0,
      currPage: 1
    }
    this.CARDS = { cols: 2, items: 6 }

    this.changePage = this.changePage.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  changePage(num) {
    const { firstItem, blog } = this.state,
      { numStories } = this.props

    let previous = firstItem - numStories
    previous = previous < 0 ? 0 : previous

    let next = firstItem + numStories
    next = next > blog.length - 1 ? blog.length - 1 : next

    switch (num) {
      case -1: //get previous page
        this.setState({ firstItem: previous })
        return
      case 0: //get next page
        this.setState({ firstItem: next })
        return
      default:
        //get page #num
        this.setState({ firstItem: numStories * (num - 1) })
        return
    }
  }

  // handles sort by 'all', 'by author', and 'top rated'
  ///!!! implement the case for 'top rated'
  handleSort(str) {
    const blog = [...this.state.blog],
      loadedBlog = [...this.props.initialBlog]

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

  setPagination() {
    const { numStories } = this.props,
      { firstItem, blog } = this.state
    return blog.slice(firstItem, firstItem + numStories)
  }

  render() {
    const arr = this.setPagination()
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
            pageNum={this.props.pages}
          />
        </Container>
      </Wrapper>
    )
  }
}

export default withTheme(StoriesContainer)

StoriesContainer.propTypes = {
  initialBlog: PropTypes.array,
  menuFilter: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  numStories: PropTypes.number.isRequired,
  theme: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
}
