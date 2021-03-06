import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
  color: ${props => props.color};
  font-size: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid ${props => props.border};
  background-color: Transparent;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`

export const ButtonSmall = Button.extend`
  padding: 0.1rem 2rem;
  margin: 0.2rem;
`

export const ButtonBig = Button.extend`
  padding: 0.75rem 2rem;
  margin: 0.5rem;
`

Button.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired
  ])
}
