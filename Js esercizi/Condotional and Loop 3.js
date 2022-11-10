function sumUntil(maxValue) {
  let totale = 0;
  for(let num = 0; num <= maxValue; num++){
    totale += num
  }
  return totale
}

console.log(sumUntil(5));