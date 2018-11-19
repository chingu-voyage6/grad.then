import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import Hero from '../components/Hero'
import { Wrapper } from '../components/StoriesContainer'
import { Tag } from '../components/StoryCard'
import { ButtonSmall, Button } from '../components/Button'
import {
  StyledH1,
  StyledH3,
  StyledP,
  StyledA,
  media
} from '../theme/globalStyle'

import contentStyles from '../css/storyBlog-module.css'

const ArticleButton = ButtonSmall.withComponent('a')
const FollowButton = ArticleButton.extend`
  padding: 0.25rem;
  margin-left: 0.3rem;
  text-transform: none;
  font-size: 0.85rem;
  vertical-align: top;
  &:hover {
    color: ${props => props.theme.secondary.green};
    transform: none;
  }
  ${media.phone`
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    vertical-align: middle;
  `};
`
const BackButton = Button.extend`
  padding: 0.5rem;
  border-width: 2px;
  font-size: 1.25em;
  &:hover {
    color: ${props => props.theme.secondary.red};
  }
  ${media.phone`
    font-size: 1em;
  `};
`
const BackButtonContainer = styled.div`
  grid-area: btn;
  display: flex;
  justify-content: center;
  margin: 1rem 0.5rem 2rem 0.5rem;
`

const ArticleContainer = Wrapper.extend`
  grid-template-areas:
    '. panel panel panel panel panel panel panel panel panel panel.'
    '. . cont cont cont cont cont cont cont cont . .'
    '. btn btn btn btn btn btn btn btn btn btn.';
  ${media.giant`
  grid-template-areas:
  '. panel panel panel panel panel panel panel panel panel panel .'
  '. cont cont cont cont cont cont cont cont cont cont .'
  '. btn btn btn btn btn btn btn btn btn btn.';  
  `};
  ${media.tablet`
  grid-template-areas:
  'panel panel panel panel panel panel panel panel panel panel panel panel'
  'cont cont cont cont cont cont cont cont cont cont cont cont'
  'btn btn btn btn btn btn btn btn btn btn btn btn';
  `};
`

const ArticlePanel = styled.div`
  grid-area: panel;
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.theme.primary.light};
  border-radius: 2px;
  margin-bottom: 1.5rem;
  ${media.tablet`
    margin: 0 0.75rem;
  `};
`

const ArticleTitle = StyledH1.extend`
  text-align: center;
  color: ${props => props.theme.primary.light};
  padding: 0.5rem;
  ${media.desktop`
    font-size: 2.125rem;
    padding-bottom: 0;
  `};
  ${media.tablet`
    font-size: 2rem;
    padding: 0 0.5rem;
  `};
`

const ArticleAuthor = StyledH3.extend`
  padding: 0 0.5rem;
  text-align: center;
  ${media.desktop`
    font-size: 1.375rem;
    margin: 0.25rem;
  `};
  ${media.tablet`
    font-size: 1.25rem;
  `};
  ${media.phone`
    line-height: 1.35;
  `};
`

const AuthorBio = StyledP.extend`
  padding: 0 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: ${props => props.theme.shades.dark};
  ${media.tablet`
    font-size: 0.95rem;
    margin: 0.25rem;
  `};
`

const ArticleDate = StyledP.extend`
  padding: 0 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  ${media.desktop`
    font-size: 1rem;
    margin: 0.25rem;
  `};
  ${media.tablet`
    font-size: 1rem;
  `};
`

const ArticleSource = ArticleDate.extend`
  ${media.desktop`
    margin: 0.25rem;
  `};
  ${media.tablet`
    font-size: 0.95rem;
  `};
`

const StyledLink = StyledA.extend`
  padding: 0 0.25rem;
  color: ${props => props.theme.tints.brightgreen};
  &:active,
  &:hover,
  &:focus {
    color: ${props => props.theme.secondary.red};
    text-decoration: underline;
  }
`

const ArticleTag = styled(Tag)`
  align-self: center;
`

const ArticleContent = styled.article`
  grid-area: cont;
  padding: 0.8em;
`

const StoryBlog = ({ data, location }) => {
  //console.log(data)
  const goBack = () => navigateTo('/stories')
  const {
    title,
    publishDate,
    tags,
    author,
    content
  } = data.contentfulBlog
  let { source } = data.contentfulBlog
  source = source ? source : location.pathname
  return (
    <div>
      <Hero type="stories" />
      <ArticleContainer>
        <ArticlePanel>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleAuthor>
            {author.fullName}
            <FollowButton
              color={props => props.theme.secondary.red}
              href={`https://twitter.com/${author.contact.trim()}`}>
              Follow
            </FollowButton>
          </ArticleAuthor>
          <AuthorBio>{author.bio.bio}</AuthorBio>
          <ArticleDate>{publishDate}</ArticleDate>
          <ArticleSource>
            Originally published in:
            <StyledLink href={source}>{source}</StyledLink>
          </ArticleSource>
          <ArticleTag
            tags={tags}
            color={props => props.theme.primary.dark}
          />
        </ArticlePanel>
        <ArticleContent
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
          className="user-article"
        />
        <BackButtonContainer>
          <BackButton
            color={props => props.theme.secondary.green}
            onClick={goBack}>
            Back to Stories
          </BackButton>
        </BackButtonContainer>
      </ArticleContainer>
    </div>
  )
}

StoryBlog.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
  theme: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ])
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
