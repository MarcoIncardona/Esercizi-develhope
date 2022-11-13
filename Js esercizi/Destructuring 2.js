const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;

console.log(id, firstName, lastName, age);

const [id2, firstName2, lastName2, age2] = [person.id, person.firstName, person.lastName, person.age] 

console.log(id2, firstName2, lastName2, age2)