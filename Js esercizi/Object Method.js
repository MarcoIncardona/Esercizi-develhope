const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let keys = Object.keys(person);

keys.forEach((el) => console.log(`${el}: ${person[el]}`));


// Print values of person using Object.keys
