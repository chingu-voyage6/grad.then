import React from 'react'
import faker from 'faker'

import ProjectCard from '../components/ProjectCard'
import StoryCard from '../components/StoryCard'

export const addCards = (num, cardType, projectCardType, titleVisibility) => {
  if (cardType === 'project') {
    return Array.from({ length: num }, (e, i) => (
      <ProjectCard
        key={i}
        type={projectCardType}
        title={faker.commerce.productName()}
        text={faker.hacker.phrase()}
        img={faker.image.imageUrl()}
        heading={titleVisibility}
      />
    ))
  } else {
    return Array.from({ length: num }, (e, i) => (
      <StoryCard
        key={i}
        title={faker.commerce.productName()}
        text={faker.hacker.phrase()}
        img={faker.image.imageUrl()}
      />
    ))
  }
}

export function fakeCallToAPI(length = 7, data = ['any', 'any', 'any', 'any']) {
  // data: type, role, location, interval
  const response = Array.from({ length: length }, () => {
    return {
      title: faker.commerce.productName(),
      type: data[0],
      role: data[1],
      location: data[2],
      description: faker.hacker.phrase()
    }
  })
  return response
}
