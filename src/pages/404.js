import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { ICONS } from '../theme/constants'
import { StyledH1, StyledH2, media } from '../theme/globalStyle'

const PageTitle = StyledH1.extend`
  color: ${props => props.theme.tints.brightred};
  font-size: 3.5em;
  font-weight: 600;
  padding: 1rem;
  ${media.tablet`
    font-size: 2.5em;
    padding: 0.5rem;
  `} ${media.phone`
    padding-bottom: 0;
  `};
`
const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.primary.light};
  border-radius: 10px;
  ${media.tablet`
    flex-wrap: wrap;
    justify-content: center;
  `} ${media.phone`
    padding: 1rem 0.5rem;
  `};
`

const TextContainer = styled.div`
  display: block;
  border: 2px solid ${props => props.theme.tints.brightred};
  border-radius: 10px;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  margin: 0 1rem;
`

const PageText = StyledH2.extend`
  color: ${props => props.theme.text};
  font-size: 1.4em;
  font-weight: 600;
  padding: 0.5rem;
  span {
    color: ${props => props.theme.primary.dark};
  }
  ${media.desktop`
    font-size: 1.2em;
  `} ${media.phone`
    font-size: 1em;
    padding: 0 0.3rem;
  `};
`

const StyledLink = styled(Link)`
  font-size: 1.4em;
  font-weight: 600;
  padding: 0.5rem;
  color: ${props => props.theme.tints.brightgreen};
  &:visited,
  &:active {
    color: ${props => props.theme.tints.brightgreen};
  }
  &:hover {
    color: ${props => props.theme.primary.light};
  }
  ${media.desktop`
    font-size: 1.2em;
  `} ${media.phone`
    font-size: 1.1em;
  `};
`

const IconsContainer = styled.div`
  flex: 0 0 17em;
  display: block;
  position: relative;
  width: 360px;
  height: 540px;
  margin: 1rem 1.5rem;
  margin-top: -5em;

  svg#cap {
    position: absolute;
    top: 5.8rem;
    left: 4.2rem;
    display: block;
    width: 230px;
    height: 230px;
    stroke-width: 10px;
    stroke: ${props => props.theme.black};
    fill: ${props => props.theme.text};
    z-index: 10;
  }
  svg#bear {
    position: absolute;
    top: 12rem;
    left: 2rem;
    display: block;
    width: 300px;
    height: 350px;
    stroke-width: 6px;
    stroke: ${props => props.theme.white};
    fill: ${props => props.theme.primary.dark};
  }
  ${media.desktop`
    margin-left: 0;
  `} ${media.tablet`
    width: 240px;
    height: 480px;
    flex: 0 0 12em;
    margin: -7em 0 0.5em 0;
    svg#cap {
      width: 184px;
      height: 184px;
      top: 7rem;
      left: 1.8rem;
    }
    svg#bear {
      width: 240px;
      height: 280px;
      top: 12rem;
      left: 0;
    }
  `} ${media.phone`
    height: 466px;
  `};
`

const GradBear = () => (
  <IconsContainer>
    <svg
      id="cap"
      viewBox="0 0 791.803 791.803"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={ICONS.CAP} />
    </svg>

    <svg id="bear" viewBox="0 0 512 496" preserveAspectRatio="xMidYMid meet">
      <path d={ICONS.BEAR_LIGHT} />
    </svg>
  </IconsContainer>
)

const NotFoundPage = () => (
  <div>
    <PageTitle>404</PageTitle>
    <PageContainer>
      <GradBear />
      <TextContainer>
        <PageText>
          <span>Hi there!</span>
        </PageText>
        <PageText>The page you are loking for does not exist!</PageText>
        <StyledLink to="/">Back to Homepage</StyledLink>
      </TextContainer>
    </PageContainer>
  </div>
)

export default NotFoundPage
