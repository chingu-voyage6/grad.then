import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import JobsContainer from '../components/JobsContainer'

const JobsPage = ({ data }) => (
  <Layout>
    <Hero type="jobs" />
    <JobsContainer
      menuFilter={data.site.siteMetadata.filterOptions.jobs}
    />
  </Layout>
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
