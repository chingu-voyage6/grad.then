require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: '/grad.then',
  siteMetadata: {
    title: 'grad.then()',
    pages: ['jobs', 'learn', 'events', 'support', 'stories'],
    filterOptions: {
      jobs: ['all', 'latest', 'last week', 'last month'],
      learn: ['all', 'new', 'courses', 'interviews'],
      events: ['all', 'by country', 'by location', 'annual'],
      support: ['all', 'popular', 'latest'],
      stories: ['all', 'newest', 'popular', 'rated']
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
      }
    }
  ]
}
