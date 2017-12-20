import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledA } from '../../theme/globalStyle'
import { ICONS } from '../../theme/constants'
import Icon from './Icon'

const StyledLink = StyledA.extend`
  display: block;
  justify-self: start;
  margin: 10px 0 10px 10px;
  padding: 0;
  &:visited,
  &:active {
    color: inherit;
  }
`

class Bears extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props => props.theme.white,
      swap: props => props.theme.secondary.green
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    const { color, swap } = this.state

    this.setState({
      color: swap,
      swap: color
    })
  }

  render() {
    return (
      <StyledLink
        href="https://github.com/chingu-voyage3/grad.then#authors"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
      >
        <Icon
          icon={ICONS.BEAR_DARK}
          size={34}
          color={this.state.color}
          viewbox={`0 0 512 496`}
        />
      </StyledLink>
    )
  }
}

const Team = styled.div`
  grid-area: team;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0.3rem;
  margin: 0.5rem;
  p {
    display: block;
    cursor: pointer;
    justify-self: end;
    color: ${props => props.theme.white};
    font-size: 1rem;
    padding: 0;
    margin: 0;
    &:hover {
      color: ${props => props.theme.secondary.green};
    }
  }
`

const BearsTeam = () => (
  <Team>
    <p>made by</p>
    <Bears />
  </Team>
)

export default BearsTeam
