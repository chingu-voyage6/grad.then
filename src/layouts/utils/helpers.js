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

export function fakeCallToAPI(length = 7, data = ['any', 'any', 'any', 'any'], title='') {
  // data: type, role, level, location
  const response = Array.from({ length: length }, () => {
    return {
      title: title? title : faker.commerce.productName(),
      type: data[0],
      role: data[1],
      level: data[2],
      location: data[3],
      description: faker.hacker.phrase()
    }
  })
  return response
}

// fake API for search

export const fakeAPISearch = str => {
  const random = Math.floor(Math.random()*11)
  return fakeCallToAPI(random, undefined, str)
}
