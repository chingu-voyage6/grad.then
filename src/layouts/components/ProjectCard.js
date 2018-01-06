import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  StyledH3,
  StyledP,
  StyledUl,
  StyledLi,
  media
} from '../../theme/globalStyle'

import faker from 'faker'

const Wrapper = styled.div`
  flex: 1 0 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
  padding-bottom: 1rem;
  ${media.tablet`
    flex: 1 0 8em;
  `} ${media.phone`
    flex: 1 1 10em;
  `};
`

const Image = styled.img`
  border-radius: 2px;
  display: block;
  width: 80%;
  margin: 1rem 0.5rem;
  ${media.phone`
    width: 65%;
  `};
`

const ProjectTitle = StyledH3.extend`
  min-height: 3.5em;
  color: ${props => props.theme.white};
  margin: 0.5rem;
  margin-bottom: auto;
  padding: 0 0.5rem;
  text-align: center;
  display: ${props => props.visibility || 'block'};
  ${media.giant`
    font-size: 1.25rem;
  `} ${media.desktop`
    font-size: 1.125rem;
  `} ${media.tablet`
    min-height: 1.5em;
    font-size: 1.125rem;
  `} ${media.phone`
    font-size: 1.2rem;
  `};
`

const ProjectP = StyledP.extend`
  color: ${props => props.theme.white};
  margin-top: 0.5rem;
  margin-bottom: auto;
  padding: 0 0.5rem 0.8rem 0.5rem;
  font-size: 1.125rem;
  hyphens: auto;
  ${media.desktop`
    font-size: 1rem;
  `} ${media.phone`
    font-size: 1.125rem;
    padding: 0.5rem 0.5rem 1.2rem 0.5rem;
  `};
`

const CardUl = StyledUl.extend`
  color: ${props => props.theme.white};
  list-style-type: circle;
  margin: 1rem;
  padding: 0 0.5rem;
  margin-bottom: auto;
  ${media.tablet`
    align-self: flex-start;
    margin-left: 10%;
  `} ${media.phone`
    margin-left: 15%;
  `};
`

const CardLi = StyledLi.extend`
  padding: 0;
  font-size: 1.125rem;
  hyphens: auto;
  ${media.desktop`
    font-size: 1rem;
  `};
`

const ProjectLi = props => (
  <CardUl lang="en">
    <CardLi>{props.data[0] || faker.date.future().toTimeString()}</CardLi>
    <CardLi>{`${props.data[1] || faker.address.city()}, ${props.data[2] || faker.address.country()}`}</CardLi>
    <CardLi>{props.text}</CardLi>
  </CardUl>
)

ProjectLi.propTypes = {
  data: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
}

class ProjectCard extends React.Component {
  render() {
    return (
      <Wrapper lang="en">
        <Image src={this.props.img} />
        <ProjectTitle visibility={this.props.heading}>
          {this.props.title}
        </ProjectTitle>
        {this.props.type === 'list' ? (
          <ProjectLi data={this.props.list} text={this.props.text}/>
        ) : (
          <ProjectP>{this.props.text}</ProjectP>
        )}
      </Wrapper>
    )
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, // card heading
  text: PropTypes.string.isRequired, // card text
  img: PropTypes.string, // img src
  type: PropTypes.string, // 'list' or 'text'
  heading: PropTypes.string, // 'none' or 'block'
  list: PropTypes.array
}

export default ProjectCard
