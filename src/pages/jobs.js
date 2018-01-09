import React from 'react'
import Hero from '../layouts/components/Hero'

import JobsContainer from '../layouts/components/JobsContainer'

const JobsPage = ({ data }) => (
  <div>
    <Hero type="jobs" />
    <JobsContainer menuFilter={data.site.siteMetadata.filterOptions.jobs}/>
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
