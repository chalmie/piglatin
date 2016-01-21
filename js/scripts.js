// var makeArray = function(word) {
//   return word.split("");
// };

var pigLatin = function(word) {
  var pigWord;
    if (!word.match(/^[aeiou]/i)) {
// !!!Looks like both branches of this if statement execute the same code, I took out the code and copied it below outside of the if else, and it still runs okay, :)
      // if (word.match(/qu/i)) {
      //   for (var index = 0; !word[index].match(/[aeio]/i); index ++) {
      //     var wordFront = word.slice(0, index+1);
      //   }
      //   pigWord = word.slice(index) + wordFront;
      // } else {
      //   for (var index = 0; !word[index].match(/[aeiou]/i); index ++) {
      //     var wordFront = word.slice(0, index+1);
      //   }
      //   pigWord = word.slice(index) + wordFront;
      // }
      for (var index = 0; !word[index].match(/[aeio]/i); index ++) {
        var wordFront = word.slice(0, index+1);
      }
      pigWord = word.slice(index) + wordFront;
    } else {
      return word + "ay";
    }
    return pigWord += "ay";
};
    //   for (var index = 0; !word[index].test(/[aeiou]/i); index ++) {
    //     var wordFront = (word.slice(0, index+1));
    //     return wordFront;
    // }

var pigSentences = function(sentence){
  var words = sentence.split(' ');
  var text = [];

  words.forEach(function(word) {
    text.push(pigLatin(word));
  });
  return text.toString().replace(/,/g, " ");
};
  // for(index = 0; index < words.length; index ++) {
  //   text.push(pigLatin(words));
  // }
//   return text;
// };




// var isVowel = function(word) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var pigLatin = function(word) {
//     if (isVowel(word)) {
//       return (word + "ay");
//     } else if ((!isVowel(word[0])) && (isVowel(word[1]))) {
//       return ((word.substring(1,word.length)) + (word.substring(0,1)) + ("ay"));
//     } else if ((!isVowel(word[0,1])) && (isVowel(word[2]))) {
//       return ((word.substring(2,word.length)) + (word.substring(0,2)) + ("ay"));
//     } else if ((!isVowel(word[0,1,2])) && (isVowel(word[3]))) {
//       return ((word.substring(3,word.length)) + (word.substring(0,3)) + ("ay"));
//     } else if ((!isVowel(word[0,1,2,3])) && (isVowel(word[4]))) {
//       return ((word.substring(4,word.length)) + (word.substring(0,4)) + ("ay"));
//     } else if ((!isVowel(word[0,1,2,3,4])) && (isVowel(word[5]))) {
//       return ((word.substring(5,word.length)) + (word.substring(0,5)) + ("ay"));
//     } else if ((!isVowel(word[0,1,2,3,4,5])) && (isVowel(word[6]))) {
//       return ((word.substring(6,word.length)) + (word.substring(0,6)) + ("ay"));
//     }
// };

//
// for (var i = 0;i < word.length; i++) {
//   letter = word[i];
//   for (var j = 0;j < vowels.length;j++) {
//     if (letter === vowels[j]) {
//       return word.slice(i,word.length) + word.slice(0,i) + "ay";
//     }
//   }
// }
