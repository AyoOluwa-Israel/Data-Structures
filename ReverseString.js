//1st Solution

const reverseString = (str) => {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");

  return str;
};

//2nd Solution
const reverseString2 = (str) => {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

//3RD Solution
const reverseString3 = (str) => {
  var rev = "";
  str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};


//4TH Solution

const reverseString4 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings From Earth"));
