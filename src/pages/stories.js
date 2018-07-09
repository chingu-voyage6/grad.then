import React from 'react'

import Hero from '../components/Hero'
import StoriesContainer from '../components/StoriesContainer'

const StoriesPage = ({ data }) => {
  const { site, allContentfulBlog: blog } = data
  return (
    <div>
      <Hero type="stories" />
      <StoriesContainer
        menuFilter={site.siteMetadata.filterOptions.stories}
        blog={blog.edges}
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
