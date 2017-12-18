import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import faker from 'faker'
import { StyledH1, StyledUl, StyledLi, StyledP, ColorPalette as CP } from '../../theme/globalStyle'
import { ButtonBig } from './Button'

// another hero
// 10 cols
// h1
// p
// button or nobutton
const StyledMainHero = styled.div`
  min-height: 400px;
  grid-column: 2 / span 10;
`
const HeroTitle = StyledH1.extend`
  font-size: 3rem;
  color: ${CP.white};
  span {
    color: ${CP.primary.light};
  }
`
const HeroUl = StyledUl.extend`
  color: ${CP.primary.dark};
  padding: 0.5rem 2rem;
  margin: 0 0 3rem 0;
`
const HeroLi = StyledLi.extend`
  font-size: 1.8rem;
  padding: 1rem;
  margin: 1rem;
`

const MainHero = props => (
  <StyledMainHero>
    <HeroTitle>Welcome to <span>{props.title}</span></HeroTitle>
    <HeroUl>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
    </HeroUl>
  </StyledMainHero>
)

const buttonText = {
  stories: 'add story',
  support: 'add project',
  events: 'add event',
}

const StyledSimpleHero = StyledMainHero.extend`
  min-height: auto;
  height: 260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`
const SimpleHeroTitle = HeroTitle.extend`
  grid-column: 1 / span 12;
  text-align: center;
  text-transform: uppercase;
  font-size: 3.4rem;
  padding: 0.5rem 0 0 0;
`
const SimpleHeroP = StyledP.extend`
  grid-column: 1 / span 12;
  color: ${CP.white};
  padding: 0.5rem 0;
  font-size: 1.4em;
  text-align: center;
`
const ButtonContainer = styled.div`
  grid-column: 6 / span 2;
`
const HeroButton = ButtonBig.extend`
  display: block;
  font-size: 1.6rem;
  margin: 0 auto;
  border-width: 2px;
`

const SimpleHero = props => (
  (props.page === 'stories' || props.page === 'support' || props.page === 'events')
    ?(
      <StyledSimpleHero>
        <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
        <SimpleHeroP>{faker.lorem.sentence()}</SimpleHeroP>
        <ButtonContainer>
          <HeroButton color={CP.white}>
            {buttonText[`${props.page}`] }
          </HeroButton>
        </ButtonContainer>
      </StyledSimpleHero>
    )
    :(
      <StyledSimpleHero>
        <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
        <SimpleHeroP>{faker.lorem.sentence()}</SimpleHeroP>
      </StyledSimpleHero>
    )
)

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background:${props => ((props.bg === 'main')
                        ? CP.secondary.red
                        : CP.secondary.green)
  };
  padding: 0.5rem 0;
`

const Hero = (props) => (
  <StyledHero bg={props.type}>
    {(props.type === 'main')
      ? <MainHero title={props.title} />
      : <SimpleHero page={props.type}/>
    }
  </StyledHero>
)

StyledHero.propTypes = {
  bg: PropTypes.string.isRequired,
}

Hero.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
}

MainHero.propTypes = {
  title: PropTypes.string.isRequired,
}

SimpleHero.propTypes = {
  page: PropTypes.string.isRequired,
}

export default Hero
