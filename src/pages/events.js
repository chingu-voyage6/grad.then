import React from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import EventsContainer from '../components/EventsContainer'
import Layout from '../components/Layout'

const EventsPage = ({ data }) => (
  <Layout>
    <Hero type="events" />
    <EventsContainer
      menuFilter={data.site.siteMetadata.filterOptions.events}
    />
  </Layout>
)

export const query = graphql`
  query EventsQuery {
    site {
      siteMetadata {
        filterOptions {
          events
        }
      }
    }
  }
`

export default EventsPage
