import faker from 'faker'

// fake API
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
