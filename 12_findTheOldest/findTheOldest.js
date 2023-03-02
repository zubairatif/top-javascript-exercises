const findTheOldest = function (persons) {
  let oldestPerson;
  let oldestAge = 0;
  let age;
  for (let i = 0; i < persons.length; i++) {
    "yearOfDeath" in persons[i]
      ? (age = persons[i].yearOfDeath - persons[i].yearOfBirth)
      : (age = new Date().getFullYear() - persons[i].yearOfBirth);
    if (age > oldestAge) {
      oldestPerson = persons[i];
      oldestAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
