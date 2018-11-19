import React from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import JobsContainer from '../components/JobsContainer'

const JobsPage = ({ data }) => (
  <div>
    <Hero type="jobs" />
    <JobsContainer
      menuFilter={data.site.siteMetadata.filterOptions.jobs}
    />
  </div>
)

export const query = graphql`
  query JobsQuery {
    site {
      siteMetadata {
        filterOptions {
          jobs
        }
      }
    }
  }
`

export default JobsPage
