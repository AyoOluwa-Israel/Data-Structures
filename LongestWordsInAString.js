//Basic Solution.

// const findLongestWord = (str) => {
//   var words = str.split(" ");
//   var maxLength = 0;
//   for(var i = 0; i < words.length; i++) {
//     if(words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength
// }

//Intermediate Solution

// const findLongestWord = (str) => {
//   return str.split(" ").reduce((maxLength, word) => {
//     return Math.max(maxLength, word.length)
//   }, 0)
// }

//Advanced Solution

const findLongestWord = (str) => {
  str = str.split(" ");
  if (str.length == 1) {
    return str[0].length;
  }
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWord(str.join(" "));
  }

  if (str[0].length <= str[1].length) {
    return findLongestWord(str.slice(1, str.length).join(" "));
  }
  return str.length;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(
  findLongestWord("What if we try a super-long such as otorhinolarymngologgmy")
);
