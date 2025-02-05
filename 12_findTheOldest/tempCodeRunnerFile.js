const people = [
    {
      name: "Carly",
      yearOfBirth: 2020,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(people) {
  const person = people.reduce((theOldest, current) => {
    const theOldestAge = (theOldest.yearOfDeath || new Date().getFullYear()) - theOldest.yearOfBirth
    const currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth
    if (theOldestAge > currentAge)
      return theOldest
    else
    return current
  })
  return person
}


console.log(findTheOldest(people))