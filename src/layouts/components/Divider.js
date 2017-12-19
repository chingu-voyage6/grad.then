import React from 'react'
import styled from 'styled-components'

import { StyledH1 } from '../../theme/globalStyle'
const validJustifyValues = [
  'center',
  'flex-end',
  'flex-start',
  'space-between',
  'space-around'
]
const Wrapper = styled.div`
  color: white;
  margin: 7px 0;
  background-color: ${props => props.theme.primary.light};
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: ${props =>
    (validJustifyValues.includes(props.set) && props.set) || 'flex-end'};
`

const Divider = props => <Wrapper set={props.justify}>{props.children}</Wrapper>

export default Divider
