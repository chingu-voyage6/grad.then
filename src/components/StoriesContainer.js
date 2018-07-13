import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../theme/globalStyle'
import FilterAndSearch from './FilterAndSearch'
import CardContainer from './CardContainer'
import StoryCard from './StoryCard'
import Pagination from './Pagination'

export const Wrapper = styled.div`
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
      blog: this.props.initialBlog,
      firstItem: 0,
      activePage: 0
    }
    this.CARDS = { cols: 2, items: 6 }

    this.changePage = this.changePage.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  // "in-page" pagination
  changePage(num) {
    const { firstItem, blog, activePage } = this.state,
      { numStories, pages } = this.props

    const maxLength = blog.length - 1

    let previous = firstItem - numStories
    previous = previous < 0 ? 0 : previous

    let next = firstItem + numStories
    next = next > maxLength ? maxLength : next

    switch (num) {
      case -1: //get previous page
        this.setState({
          firstItem: previous,
          activePage: activePage - 1 < 0 ? 0 : activePage - 1
        })
        return
      case 0: //get next page
        this.setState({
          firstItem: next,
          activePage:
            activePage + 2 > pages ? pages - 1 : activePage + 1
        })
        return
      default:
        //get page #num
        this.setState({
          firstItem: numStories * (num - 1),
          activePage: num - 1
        })
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
        this.setState({ blog: this.sortByAuthor(blog) })
        return
      case 'top rated':
        //sort by rating
        return
      default:
        return
    }
  }

  //!!! must be changed for usage of Contentful
  handleSearch() {
    //search in 'this.props.initialBlog'
    const loadedBlog = [...this.props.initialBlog],
      { searchQuery } = this.state

    if (searchQuery) {
      //
    }
  }

  handleInput(val) {
    this.setState({
      searchQuery: val
    })
  }

  // slice the array of stories according the limit(numStories) per page
  setPagination() {
    const { numStories } = this.props,
      { firstItem, blog } = this.state
    return blog.slice(firstItem, firstItem + numStories)
  }

  sortByAuthor(arr) {
    const sorted = arr.sort((a, b) => {
      const authorA = a.node.author.lastName,
        authorB = b.node.author.lastName
      if (authorA < authorB) {
        return -1
      }
      if (authorA > authorB) {
        return 1
      }
      return 0
    })
    return sorted
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
                slug={elem.node.slug}
                author={elem.node.author.fullName}
                date={elem.node.publishDate}
                text={elem.node.content.childMarkdownRemark.excerpt}
                tags={elem.node.tags}
                img={elem.node.featureImage.resolutions.src}
              />
            ))}
          </CardContainer>
          <Pagination
            onChange={this.changePage}
            background={this.props.theme.white}
            pageNum={this.props.pages}
            active={this.state.activePage}
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
