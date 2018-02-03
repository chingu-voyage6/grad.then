import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Product = ({ data }) => (
  <ul>
    {data.allContentfulProduct.edges.map(({ node }) => (
      <li key={node.id}>
        <Link to={`/${node.slug}`}>
          {node.productName.productName}
        </Link>

        <img
          src={node.image[0].responsiveResolution.src}
          alt={node.productName.productName}
        />

        <div>
          {node.productDescription.childMarkdownRemark.excerpt}
        </div>
      </li>
    ))}
  </ul>
)

Product.propTypes = {
  data: PropTypes.object
}

export default Product

export const pageQuery = graphql`
  query pageQuery {
    allContentfulProduct {
      edges {
        node {
          id
          productName {
            productName
          }
          slug
          productDescription {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
          image {
            responsiveResolution(width: 100, height: 100) {
              src
            }
          }
        }
      }
    }
  }
`
