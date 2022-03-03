const isPrime = (num) => {
  var divisor = 2;
  while (num > divisor) {
    if (num % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
};

console.log(isPrime(138));
