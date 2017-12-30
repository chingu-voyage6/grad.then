import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import faker from 'faker'

import { StyledH1, StyledUl, StyledLi, StyledP, media } from '../../theme/globalStyle'
import { ButtonBig } from './Button'
import LI from '../../img/list_icon_sm.png'
import BG from '../../img/grad_bg1.jpg'
import BGmob from '../../img/grad_bg2.jpg'

//----------------------MAIN HERO-----------------------------------
const StyledMainHero = styled.div`
  min-height: 600px;
  max-height: 750px;
  grid-column: 2 / span 10;
  ${media.giant`min-height: 500px;`}
  ${media.desktop`
    grid-column: 2 / span 8;
    min-height: 400px;
    display:grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: minmax(40px, auto);
  `}
  ${media.tablet`
    grid-column: none;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  `}
  ${media.phone`
    grid-column: none;
    min-height: 450px;
  `}
`

const HeroTitle = StyledH1.extend`
  font-size: 4rem;
  color: ${props => props.theme.secondary.yellow};
  span {
    color: ${props => props.theme.primary.light};
  }
  ${media.giant`
    font-size: 2.8rem;
    padding: 1.75rem 0;
    margin: 0.5rem 0;
  `}
  ${media.desktop`
    grid-column: 1 / span 2;
    padding: 1rem;
    font-size: 2.4rem;
  `}
  ${media.tablet`
    grid-column: none;
    font-size: 2.2rem;
  `}
  ${media.phone`
    text-align: center;
    padding: 0rem 0.8rem;
    margin-bottom: 1rem;
  `}
`

const HeroUl = StyledUl.extend`
  color: ${props => props.theme.secondary.yellow};
  padding: 0.5rem 1.5rem;
  margin: 0 0 1rem 0;
  list-style: none;
  max-width: 50%;
  ${media.desktop`
    grid-column: 1 / span 1;
    max-width: 80%;
  `}
  ${media.tablet`
    grid-column: none;
    max-width: 65%;
  `}
  ${media.phone`
    max-width: 90%;
    background-color: rgba(69, 52, 99, 0.5);
    border: 1px solid transparent;
    border-radius: 3px;
    margin: 1rem 0;
  `}
`

const HeroLi = StyledLi.extend`
  font-size: 1.8rem;
  padding: 0.5rem;
  margin: 1rem;
  text-indent: -1em;
  &:before {
    content: url(${LI});
    display: inline-block;
    padding: 0.3rem 1.5rem 0.3rem 0;
    vertical-align: middle;
  }
  ${media.giant`
    font-size: 1.6rem;
    padding: 0.5rem;
    margin: 0.5rem;
    &:before {
      padding-right: 0.2rem;
    }
  `} ${media.desktop`
      font-size: 1.2rem;
      padding: 0.2rem;
      margin: 0.2rem;

      &:before {
        padding-right: 0.2rem;
      }
  `} ${media.tablet`
      font-size: 1.3rem;
      padding: 0.2rem;
      margin: 0.2rem;
      text-indent: -0.5em;
      &:before {
        padding-right: 0.2rem;
      }
  `}
  ${media.phone`
    font-size: 1.2rem;
    margin: 0.3rem;
  `}
`

const MainHero = props => (
  <StyledMainHero>
    <HeroTitle>
      Welcome to <span>{props.title}</span>
    </HeroTitle>
    <HeroUl>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
    </HeroUl>
  </StyledMainHero>
)

//-------------------SIMPLE HERO------------------------------------
const buttonText = {
  stories: 'add story',
  support: 'add project',
  events: 'add event'
}

const StyledSimpleHero = StyledMainHero.extend`
  min-height: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  ${media.giant`min-height: 200px;`}
  ${media.desktop`
    grid-column: 2 / span 10;
    min-height: 200px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  `}
  ${media.tablet`
    grid-column: none;
    min-height: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0rem;
  `}
  ${media.phone`
    grid-column: none;
    min-height: 220px;
    height: auto;
    margin-bottom: 1rem;
  `}
`

const SimpleHeroTitle = HeroTitle.extend`
  grid-column: 1 / span 12;
  color: ${props => props.theme.white};
  text-align: center;
  text-transform: uppercase;
  font-size: 3.4rem;
  padding: 0.5rem 0 0 0;
  ${media.giant`
    font-size: 3.4rem;
    padding: 0.5rem 0 0 0;
  `}
  ${media.desktop`
    grid-column: 1 / span 12;
    padding: 0.5rem 0 0 0;
    font-size: 3.4rem;
  `}
  ${media.tablet`
    font-size: 3.4rem;
    padding: 0.5rem 0 1.4rem 0;
  `}
  ${media.phone`
    font-size: 3.4rem;
  `}
`

const SimpleHeroP = StyledP.extend`
  grid-column: 1 / span 12;
  color: ${props => props.theme.white};
  padding: 0.5rem 0;
  font-size: 1.4em;
  text-align: center;
`

const ButtonContainer = styled.div`
  grid-column: 5 / span 4;
`

const HeroButton = ButtonBig.extend`
  display: block;
  font-size: 1.6rem;
  margin: 0 auto;
  border-width: 2px;
`

const SimpleHero = props =>
  props.page === 'stories' ||
  props.page === 'support' ||
  props.page === 'events' ? (
      <StyledSimpleHero>
        <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
        <ButtonContainer>
          <HeroButton color={props => props.theme.white}>
            {buttonText[`${props.page}`]}
          </HeroButton>
        </ButtonContainer>
      </StyledSimpleHero>
    ) : (
      <StyledSimpleHero>
        <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
        <SimpleHeroP>{faker.lorem.sentence()}</SimpleHeroP>
      </StyledSimpleHero>
    )

// --------HERO---------------------------------------------
const StyledHero = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background: ${props =>
    props.bg === 'main' ? `url(${BG})` : props => props.theme.secondary.green};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.5rem 0;
  ${media.tablet`
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
  ${media.phone`
    background: ${props =>
    props.bg === 'main' ? `url(${BGmob})` : props => props.theme.secondary.green};
    background-size: 100% 100%;
  `}
`

const Hero = props => (
  <StyledHero bg={props.type}>
    {props.type === 'main' ? (
      <MainHero title={props.title} />
    ) : (
      <SimpleHero page={props.type} />
    )}
  </StyledHero>
)

StyledHero.propTypes = {
  bg: PropTypes.string.isRequired
}

Hero.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}

MainHero.propTypes = {
  title: PropTypes.string
}

SimpleHero.propTypes = {
  page: PropTypes.string.isRequired,
  theme: PropTypes.object
}

export default Hero
