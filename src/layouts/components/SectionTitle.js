import React from 'react'
import { StyledH2 } from '../../theme/globalStyle'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
`
export default SectionTitle
