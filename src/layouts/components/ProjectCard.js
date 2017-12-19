import React from 'react'
import styled from 'styled-components'

import { StyledH3, StyledP, StyledUl, StyledLi } from '../../theme/globalStyle'
import { ButtonSmall } from '../components/Button'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'img img img'
    'text text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
`

const Image = styled.img`
  grid-area: img;
  justify-self: center;
  border-radius: 2px;
  width: inherit;
  height: inherit;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
`

const ProjectTitle = StyledH3.extend`
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0rem;
`

const ProjectP = StyledP.extend`
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0rem;
`

const CardUl = StyledUl.extend`
  color: ${props => props.theme.white};
  list-style-type: circle;
  margin: 1rem;
  padding: 0rem;
`

const CardLi = StyledLi.extend`
  padding: 0rem;
`

class ProjectCard extends React.Component {
  render() {
    const ProjectLi = () => (
      <CardUl>
        <CardLi>{this.props.text}</CardLi>
        <CardLi>{this.props.text}</CardLi>
        <CardLi>{this.props.text}</CardLi>
      </CardUl>
    )

    return (
      <Wrapper>
        <Image src={this.props.img} />
        <Text>
          <ProjectTitle>{this.props.title}</ProjectTitle>
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

export default ProjectCard
