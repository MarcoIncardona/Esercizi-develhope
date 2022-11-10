const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);
person2.firstName = "Simon"

/*
ALTERNATIVA 

const person2 = {}

for(let key in person1){
  person2[key] = person1[key]
}

person2.firstName = "Simon"
*/

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


/*
mettendo che person2 è uguale a person1 andiamo a dire che person2 fa riferimento 
a person1, quindi non crea una copia ma semplicemente ci indirizza alla fonte 
originale */