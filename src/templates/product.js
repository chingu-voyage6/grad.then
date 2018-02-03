import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Product extends Component {
  render() {
    const {
      productName,
      productDescription,
      image
    } = this.props.data.contentfulProduct

    return (
      <div style={{ padding: '50px' }}>
        <h1>{productName.productName}</h1>

        <img
          src={image[0].responsiveResolution.src}
          alt={productName.productName}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: productDescription.childMarkdownRemark.html
          }}
        />
        <Link to="/example">GO BACK</Link>
      </div>
    )
  }
}

Product.propTypes = {
  data: PropTypes.object.isRequired
}

export default Product

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      productName {
        productName
      }
      slug
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      image {
        responsiveResolution(width: 100, height: 100) {
          src
        }
      }
    }
  }
`
