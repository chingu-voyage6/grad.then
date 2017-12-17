import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledH1, StyledP, ColorPalette as CP } from '../../theme/globalStyle'
import { ButtonBig } from './Button'

// main page hero
// 10 cols
// h1
// list (ul ,li)

// another hero
// 10 cols
// h1
// p
// button or nobutton

const MainHero = () => (
  <div>
    <StyledH1>Welcome to grad.then()</StyledH1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
)

const buttonText = {
  stories: 'add your story',
  support: 'add project',
  events: 'add event',
}


const SimpleHero = props => (
  (props.page === 'stories' || props.page === 'support' || props.page === 'events')
    ?(
      <div>
        <StyledH1>{props.page}</StyledH1>
        <StyledP>hello there</StyledP>
        <ButtonBig color={CP.white}>
          {buttonText[`${props.page}`] }
        </ButtonBig>
      </div>
    )
    :(
      <div>
        <StyledH1>{props.page}</StyledH1>
        <StyledP>hello there</StyledP>
      </div>
    )

)


const StyledHero = styled.div`
  height: 400px;
  background: ${CP.secondary.green};

`


const Hero = (props) => (
  <StyledHero>
    {(props.type === 'main')
      ? <MainHero />
      : <SimpleHero page={props.type}/>}
  </StyledHero>
)

Hero.propTypes = {
  type: PropTypes.string.isRequired,
}

SimpleHero.propTypes = {
  page: PropTypes.string.isRequired,
}

export default Hero
