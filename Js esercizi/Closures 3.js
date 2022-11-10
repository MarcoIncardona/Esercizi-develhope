function multiplyByTwo(value) {
  let number = 2;
  value = value
  function inner(){
    let multiply = value * number;
    return multiply
  }
  return inner
}

console.log(multiplyByTwo(4)())
