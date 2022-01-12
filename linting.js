let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(" ");
// console.log(storyWords); #1 done

const storyWordCount = (inputText) => {
  return inputText.split(" ").length;
}
// console.log(storyWordCount); #2 done

function arrayRemoveArray(fstArr, sndArr) {
  for(let i = 0; i < fstArr.length; i++) {
    for(let j = 0; j < sndArr.length; j++) {
      if(fstArr[i] === sndArr[j]) {
        fstArr.splice(i,1);
      }
    }
  }
  return fstArr;
}

const betterWords = arrayRemoveArray(storyWords, unnecessaryWords);
// console.log(betterWords); #3 done

function overUsedCount(text, compareArr) {
  let retArr = [];
  for(let i = 0; i < compareArr.length; i++) {
    let count = 0;
    for(let j = 0; j < text.length; j++) {
      if(compareArr[i] === text[j]) {
        count++
      }
    }
    retArr.push([compareArr[i],count]);
  }
  return retArr;
}
/* console.log(overUsedCount(storyWords, overusedWords));
 * Returns a new array with word and word count
 */

function sentenceCount (inputStr) {
  if(typeof inputStr !== "string") {
    return console.log("Not a string imput");
  }
  let count = 0;
  let strToCharToArr = inputStr.split(" ");
  for(let i = 0; i < strToCharToArr.length; i++)
  {
    if(strToCharToArr[i].slice(-1) === '.' || strToCharToArr[i].slice(-1) === '!') {
      count++;
    }    
  }
  return count;
}

/* console.log("story has " + sentenceCount(story) + "   
 * sentences");
 * Takes in an input, checkes if it is a string returns
 * the number or sentences based on a word having a 
 * "." or "!" in the end.
 * #5 done
 */

console.log("Word count: " + storyWordCount(story) + " words");
console.log("Sentence count: " + sentenceCount(story) + " sentences");
console.log(overUsedCount(storyWords, overusedWords));
console.log(betterWords.join(" "));
