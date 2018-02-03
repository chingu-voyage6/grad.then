const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('src/templates/product.js')

    resolve(
      graphql(
        `
          {
            allContentfulProduct(limit: 100) {
              edges {
                node {
                  id
                  slug
                  productName {
                    productName
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulProduct.edges.forEach(({ node }) => {
          const slug = node.slug
          createPage({
            path: slug,
            component: productTemplate,
            context: {
              slug
            }
          })
        })
      })
    )
  })
}
