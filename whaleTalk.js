/*
 * Whale Talk Exercise from CodeCademy
 *
 *
 *
 */

let input = "a whale of a deal!";
const vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = [];
const textToArray = (input.toUpperCase()).split('');

for(let i = 0; i < textToArray.length; i++) {
  for(let j = 0; j < vowels.length; j++) {
    if(textToArray[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      if(vowels[j] === 'U' || vowels[j] === 'E') {
        resultArray.push(vowels[j]);
      }
    }
  }
}
console.log(resultArray.join(''));
