import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
Wrapper.propTypes = {
  set: PropTypes.string.isRequired
}

const Divider = props => <Wrapper set={props.justify}>{props.children}</Wrapper>

Divider.propTypes = {
  justify: PropTypes.string.isRequired,
}

export default Divider
