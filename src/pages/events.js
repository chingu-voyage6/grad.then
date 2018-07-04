import React from 'react'
import Hero from '../components/Hero'
import EventsContainer from '../components/EventsContainer'

const EventsPage = ({ data }) => (
  <div>
    <Hero type="events" />
    <EventsContainer
      menuFilter={data.site.siteMetadata.filterOptions.events}
    />
  </div>
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
