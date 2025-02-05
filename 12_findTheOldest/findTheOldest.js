const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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

// с помощью сортировки 

// const findTheOldest = function(people) {
//   people.sort((curr, old) => {
//     thisYear = new Date().getFullYear()
//     oldest = (old.yearOfDeath || thisYear) - old.yearOfBirth
//     current = (curr.yearOfDeath || thisYear) - curr.yearOfBirth
//     return oldest - current
//   })
//   return people[0]
// }

console.log(findTheOldest(people))

// теперь можно и поспать
module.exports = findTheOldest;
