import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledH3, StyledP, StyledUl, StyledLi } from '../../theme/globalStyle'

import faker from 'faker'

const Wrapper = styled.div`
  width: ${props => props.width || 'auto'};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, auto);
  grid-template-areas:
    'img'
    'text';
  align-content: start;
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
`

const Image = styled.img`
  grid-area: img;
  justify-self: center;
  border-radius: 2px;
  display: block;
  width: 80%;
  margin: 1rem 0.5rem;
`

const Text = styled.div`
  grid-area: text;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 0.5rem;
  margin: 0.3rem;
`

const ProjectTitle = StyledH3.extend`
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0;
  text-align: center;
  display: ${props => props.visibility || 'block'};
`

const ProjectP = StyledP.extend`
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0;
`

const CardUl = StyledUl.extend`
  color: ${props => props.theme.white};
  list-style-type: circle;
  margin: 1rem;
  padding: 0;
`

const CardLi = StyledLi.extend`
  padding: 0;
`

const ProjectLi = () => (
  <CardUl>
    <CardLi>{faker.date.future().toTimeString()}</CardLi>
    <CardLi>{`${faker.address.city()}, ${faker.address.country()}`}</CardLi>
    <CardLi>{faker.company.bs()}</CardLi>
  </CardUl>
)

class ProjectCard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.img} />
        <Text>
          <ProjectTitle visibility={this.props.heading}>
            {this.props.title}
          </ProjectTitle>
          {this.props.type === 'list' ? (
            <ProjectLi />
          ) : (
            <ProjectP>{this.props.text}</ProjectP>
          )}
        </Text>
      </Wrapper>
    )
  }
}

ProjectCard.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
  type: PropTypes.string,
  heading: PropTypes.string
}

export default ProjectCard
