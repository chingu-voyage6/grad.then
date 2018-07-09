import React from 'react'

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
          publishDate
          author {
            fullName
            lastName
            contact
            bio {
              bio
            }
          }
          excerpt {
            excerpt
          }
          content {
            content
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

export default StoriesPage
