import faker from 'faker'

// fake jobs API
export function fakeAPI(
  length = 7,
  data = ['any', 'any', 'any', 'any'],
  title = ''
) {
  // Returns a promise that's resolved after 2 seconds.
  // By default, it will resolve an array of objects
  // data: type, role, level, location
  return new Promise(resolve => {
    const response = Array.from({ length: length }, () => {
      return {
        title: title ? title : faker.commerce.productName(),
        type: data[0],
        role: data[1],
        level: data[2],
        location: data[3],
        description: faker.hacker.phrase()
      }
    })
    setTimeout(() => {
      resolve(response)
    }, 2000)
  })
}

// seaching the fake API
export const fakeAPISearch = str => {
  const random = Math.floor(Math.random() * 11)
  return fakeAPI(random, undefined, str)
}

// fake learn API
const getDate = () => {
  const date = faker.date.future()
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export function fakeLearnAPI(length = 5, title = '') {
  const getPeriod = () => {
    const number = Math.floor(Math.random() * 13),
      noun = Math.random() < 0.49 ? 'week' : 'month'
    return number === 1 ? `${number} ${noun}` : `${number} ${noun}s`
  }
  // Returns a promise that's resolved after 1 seconds.
  // By default, it will resolve an array of objects
  return new Promise(resolve => {
    const response = Array.from({ length: length }, () => {
      return {
        title: faker.commerce.productName(),
        date: getDate(),
        period: getPeriod(),
        level: faker.company.catchPhraseAdjective(),
        topic: title ? title : faker.company.catchPhraseNoun(),
        description: faker.hacker.phrase()
      }
    })
    setTimeout(() => {
      resolve(response)
    }, 1000)
  })
}

// seaching the fake LEARN API
export const fakeLearnAPISearch = str => {
  const random = Math.floor(Math.random() * 6)
  const title = str.slice(0, 1).toUpperCase() + str.slice(1)
  return fakeLearnAPI(random, title)
}

// fake events API
export function fakeEventsAPI(length, city, country, title = '') {
  // Returns a promise that's resolved after 1 seconds.
  // By default, it will resolve an array of objects
  return new Promise(resolve => {
    const response = Array.from({ length: length }, () => {
      return {
        title: title || faker.commerce.productName(),
        image: faker.image.imageUrl(),
        date: getDate(),
        city: city || faker.address.city(),
        country: country || faker.address.country(),
        description: faker.company.bs()
      }
    })
    setTimeout(() => {
      resolve(response)
    }, 1000)
  })
}

export const fakeEventsAPISearch = (str, items) => {
  const random = Math.floor(Math.random() * (items + 1))
  const title = str.slice(0, 1).toUpperCase() + str.slice(1)
  return fakeEventsAPI(random, undefined, undefined, title)
}
