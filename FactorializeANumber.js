//1st Solution
const factorial = (num) => {
  var result =  1
  for (var i = num; i > 0; i--) {
    result *= i;
    console.log("i:", i)
    console.log("result:", result)
  }
  return result;
}

//2ND Solution

const factorial2 = (num) => {
  if (num === 0){
    return 1
  }
  return num * factorial2(num-1);
  
}

console.log(factorial(0))