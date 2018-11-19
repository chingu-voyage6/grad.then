const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyPostTemplate = path.resolve(
      'src/templates/storyBlog.js'
    )

    resolve(
      graphql(
        `
          {
            allContentfulBlog(limit: 100) {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulBlog.edges.forEach(edge => {
          const slug = edge.node.slug
          createPage({
            path: `stories/${slug}`,
            component: storyPostTemplate,
            context: {
              slug
            }
          })
        })
        return
      })
    )
  })
}
