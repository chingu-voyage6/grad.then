import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'

import {
  StyledH3,
  StyledH4,
  StyledP,
  StyledUl,
  StyledLi,
  media
} from '../theme/globalStyle'
import { ButtonBig } from '../components/Button'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
  ${media.tablet`
    grid-template-areas:
    'img img img'
    'text text text';
    //grid-template-rows: 30% minmax(17em, auto);
  `} ${media.phone`
    margin: 0;
  `};
`
const Image = styled.img`
  grid-area: img;
  justify-self: center;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid ${props => props.theme.secondary.yellow};
  width: 8rem;
  height: 8rem;
  ${media.desktop`
    width: 6rem;
    height: 6rem;
  `};
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${media.desktop`
    justify-content: space-between;
  `} ${media.tablet`
    padding-top: 0;
    margin-top: 0.5rem;
    //margin-bottom: auto;
  `} ${media.phone`
    padding: 0 0.3rem;
    margin-top: 0;
  `};
`

const StoryTitle = StyledH3.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.white};
  margin: 0.5rem 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  ${media.desktop`
    font-size: 1.2rem;
  `} ${media.phone`
    padding: 0.5rem 0.5rem 0 0.5rem;
    font-size: 1.25rem;
  `};
`

const StoryAuthor = StyledH4.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.secondary.green};
  margin: 0.25em;
  padding: 0;
  font-size: 1.1rem;
  text-align: center;
  ${media.desktop`
    font-size: 1rem;
  `} ${media.phone`
    margin: 0.5rem;
  `};
`

const StoryDate = StyledP.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.secondary.yellow};
  padding: 0;
  margin: 0.25rem;
  font-size: 1rem;
  text-align: center;
`

const StoryTime = StoryDate.extend`
  color: ${props => props.theme.black};
  font-size: 0.9rem;
`

const StoryText = StyledP.extend`
  grid-column: 1 / span 4;
  color: ${props => props.theme.white};
  margin: 0.7rem 0.2rem;
  padding: 0 0.5em;
  font-size: 1.125rem;
  min-height: 4.375rem;
  ${media.giant`
    font-size: 1.1rem;
  `} ${media.desktop`
    font-size: 1rem;
  `} ${media.phone`
    padding: 0 0.25rem;
    font-size: 1.05rem;
  `};
`

const ButtonContainer = styled.div`
  grid-column: 1 / span 4;
  align-self: center;
  justify-self: center;
  margin-top: auto;
  ${media.desktop`
    margin-bottom: 1rem;
  `} ${media.tablet`
    margin-bottom: 0.5rem;
    & > button {
      padding: 0.75rem 1.5rem;
    }
  `};
`
const StyledTagContainer = StyledUl.extend`
  align-self: start;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 1em;
  list-style-type: none;
`
const StyledTag = StyledLi.extend`
  font-size: 0.9rem;
  color: ${props => props.color || props.theme.secondary.yellow};
  padding: 0.2rem 0.25rem;
  margin: 0.25rem;
  border: 1px solid
    ${props => props.color || props.theme.secondary.yellow};
  border-radius: 2px;
  ${media.phone`
    font-size: 0.8rem;
  `};
`

export const Tag = ({ tags, color, className }) => (
  <StyledTagContainer className={className}>
    {tags.map(elem => (
      <StyledTag key={elem} color={color}>
        {elem.toLowerCase()}
      </StyledTag>
    ))}
  </StyledTagContainer>
)

Tag.propTypes = {
  tags: PropTypes.array,
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string
}

class StoryCard extends React.Component {
  readStory() {
    navigateTo(`/stories/${this.props.slug}`)
  }

  render() {
    const { img, title, author, date, text, tags, time } = this.props
    return (
      <Wrapper>
        <Image src={img} alt={title} />
        <Text>
          <StoryTitle>{title}</StoryTitle>
          <StoryAuthor>{`Author: ${author}`}</StoryAuthor>
          <StoryDate>{date}</StoryDate>
          <StoryTime>{`Time to read: ${time} min`}</StoryTime>
          <StoryText>{text}</StoryText>
          <Tag
            tags={tags}
            color={props => props.theme.secondary.yellow}
          />
          <ButtonContainer>
            <ButtonBig
              color={props => props.theme.white}
              border={props => props.theme.white}
              onClick={() => this.readStory()}>
              read more
            </ButtonBig>
          </ButtonContainer>
        </Text>
      </Wrapper>
    )
  }
}

StoryCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.array,
  img: PropTypes.string,
  time: PropTypes.number
}

export default StoryCard
