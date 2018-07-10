import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import StoriesContainer from '../components/StoriesContainer'

// "in page" pagination of stories
// can be changed when the number of stories would grow significantly
// example: https://www.gatsbycentral.com/pagination-in-gatsby
const storiesPerPage = 4

const StoriesPage = ({ data }) => {
  const { site, allContentfulBlog: blog } = data,
    pages = Math.ceil(blog.edges.length / storiesPerPage)

  return (
    <div>
      <Hero type="stories" />
      <StoriesContainer
        menuFilter={site.siteMetadata.filterOptions.stories}
        initialBlog={blog.edges}
        pages={pages}
        numStories={storiesPerPage}
      />
    </div>
  )
}

export const query = graphql`
  query StoriesQuery {
    site {
      siteMetadata {
        filterOptions {
          stories
        }
      }
    }
    allContentfulBlog(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          tags
          author {
            fullName
            lastName
            contact
            bio {
              bio
            }
          }
          content {
            childMarkdownRemark {
              excerpt
              timeToRead
              html
            }
          }
          featureImage {
            resolutions(width: 130, height: 130) {
              src
            }
          }
        }
      }
    }
  }
`

StoriesPage.propTypes = {
  data: PropTypes.object
}

export default StoriesPage
