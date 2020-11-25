const fatorial = (num) => {
  let fatorial = 1;
  if (num > 0) {
  for (let index = 1; index <= num; index += 1) {
    fatorial *= index }
  }
  return fatorial
}

console.log(fatorial(0))
