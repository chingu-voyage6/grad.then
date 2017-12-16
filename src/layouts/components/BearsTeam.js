import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledA, ColorPalette as CP } from '../../theme/globalStyle'
import { ICONS } from '../../theme/constants'
import Icon from './Icon'

const StyledBears = StyledA.extend`
  display: block;
  justify-self: start;
  margin:10px 0 10px 10px;
  padding: 0;
  &:visited, &:active {
     color: inherit;
  }
  &:hover {
    color: ${CP.secondary.green};
  }
`

const BearsTeam = () => (
  <StyledBears href="https://github.com/chingu-voyage3/grad.then#authors">
    <Icon
      icon={ICONS.BEAR_DARK}
      size={34}
      color={CP.white}
      viewbox={`0 0 512 496`}
    />
  </StyledBears>
)

export default BearsTeam
