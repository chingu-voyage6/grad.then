import React from 'react'

import Hero from '../layouts/components/Hero'
import StoriesContainer from '../layouts/components/StoriesContainer'

const StoriesPage = ({ data }) => (
  <div>
    <Hero type="stories" />
    <StoriesContainer
      menuFilter={data.site.siteMetadata.filterOptions.stories}
    />
  </div>
)

export const query = graphql`
  query StroiesQuery {
    site {
      siteMetadata {
        filterOptions {
          stories
        }
      }
    }
  }
`

export default StoriesPage
