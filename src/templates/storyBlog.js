import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Hero from '../components/Hero'

const ArticleContainer = styled.div``

const ArticleContent = styled.article``

const StoryBlog = ({ data }) => {
  console.log(data)
  const {
    title,
    publishDate,
    tags,
    source,
    author,
    content
  } = data.contentfulBlog
  return (
    <div>
      <Hero type="stories" />
      <ArticleContainer>
        <ArticleContent
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
        />
      </ArticleContainer>
    </div>
  )
}

StoryBlog.propTypes = {
  data: PropTypes.object.isRequired
}

export default StoryBlog

export const storyBlogQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM DD, YYYY")
      tags
      source
      author {
        fullName
        contact
        bio {
          bio
        }
      }
      content {
        childMarkdownRemark {
          timeToRead
          html
        }
      }
    }
  }
`
