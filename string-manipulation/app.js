/**
 *  DESCRIPTION:

Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples

input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
 */

// function separateEvenOdd(s){
//     let evenChars = '';
//     let oddChars = '';

//     for (let i = 0; i<s.length;i++){
//         if(i%2 === 0){
//             evenChars +=s[i]
//         }else{
//             oddChars += s[i]
//         }
//     }
//     return evenChars + ' ' + oddChars;
// }

// console.log(separateEvenOdd("CodeWars"));

/**
 * 
 * @param {Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.} str 
 * @returns 
 */

// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("This website is for losers LOL!"));

// const number = [4,2,1,4,5]

// const sort = number.sort((a,b)=>
//      b-a)

// console.log(sort)

/**
 * DESCRIPTION:

Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

Add digits in random places within the message.

Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...
 */
// function interweave(s1, s2) {
//     const isDigit = '0123456789';
//     let result = '';

//     for (let i = 0; i < s1.length; i++) {
//       let char1 = '';
//       let char2 = '';
//       if (s1[i] && !isDigit.includes(s1[i])) {
//         char1 += s1[i];
//       }
//       if (s2[i] && !isDigit.includes(s2[i])) {
//         char2 += s2[i];
//       }
//       console.log(char1);
//       console.log(char2)
//       result += char1 + char2;
//     }

//     return result;
//   }

// console.log(interweave("hlo", "el"));
// console.log(interweave("h3lo", "el4"));

// function manipulateString(str1,str2) {
//   // the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
//     const inverted = str1.split('').map(char => {
//         if (char === char.toUpperCase()) {
//           return char.toLowerCase();
//         } else {
//           return char.toUpperCase();
//         }
//       }).join('');

//       const mirrored = inverted.split('').reverse().join('');
//       const result1 = mirrored + str1.toUpperCase();
//       console.log(result1)
//       //the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
//   const result2 = str2.split("").reverse().map(char=>{
//     if(char === char.toUpperCase()){

//         return char.toLowerCase();

//     }else {
//         return char.toUpperCase()
//     }
//   }).join('')
// console.log(result2)

// const bothTwo = result2 + '@@' + result1;
// return bothTwo

// //   const reversed =  result1 + '@@' + result2
// //   return reversed

// }
// console.log( manipulateString("Water","Fish"))
// function getMiddle(word) {
//     const length = word.length;
//     const middleIndex = Math.floor(length / 2);

//     if (length % 2 === 0) {
//       return word.substring(middleIndex - 1, middleIndex + 1);
//     } else {
//       return word.charAt(middleIndex);
//     }
//   }

//   // Test cases
//   console.log(getMiddle("test")); // Output: "es"
//   console.log(getMiddle("testing")); // Output: "t"
//   console.log(getMiddle("middle")); // Output: "dd"
//   console.log(getMiddle("A")); // Output: "A"

// function replaceSubstring(S, S1, S2) {
//     const modifiedString = S.replace(new RegExp(S1, 'g'), S2);
//     return modifiedString;
// }

// // Test cases
// console.log(replaceSubstring("abababa", "aba", "a")); // Output: "aba"
// console.log(replaceSubstring("geeksforgeeks", "eek", "ok")); // Output: "goksforgoks"

// Rotation of a string

// function printRotatedString(str) {
//   const rotation = [];
//   for (let i = 0; i < str.length; i++) {
//     const rotatedString = str.substring(i) + str.substring(0, i);
//     rotation.push(rotatedString);

//   }
//   return rotation
// }

// console.log(printRotatedString("geek").join('\n'));

// function largestAlph(str){
//     let largest = -1;
//     for(let i = 0; i < str.length; i++){
//         if(str.includes(str[i].toUpperCase()) && str.includes(str[i].toLowerCase())){
//             if (largest === -1 || str[i].toUpperCase() > largest) {
//                largest = str[i].toUpperCase();
//             }
//         }
//     }
//     if (largest === -1) {
//         return -1;
//     } else {
//         return largest;
//     }
// }

// console.log(largestAlph("admeDCAB"));
// console.log(largestAlph("dAeB"));

// min and max words

// function minMaxWord(str) {
//   const words = str.split(" ");
//   let minLength = Infinity
//   let maxLength = 0;
//   let minWord ='';
//   let maxWord='';

//   words.forEach(word => {
//     if(word.length < minLength ){
//         minLength = word.length
//         minWord = word;
//     }if(word.length > maxLength){
//         maxLength = word.length;
//         maxWord = word;
//     }
//   });

//   return [minWord, maxWord];

// }

// console.log(minMaxWord("This is a test string"));

// function removeLeadingTrailingSpaces(str) {
//     return str.trim();
// }

// // Test cases
// console.log(removeLeadingTrailingSpaces("   Hello World   "));
// console.log(removeLeadingTrailingSpaces("      Hey  there    Joey!!!      "));

// function countVowel(str) {
//     const matches = str.toLowerCase().match(/[aeiou]/g);
//     return matches.length;
//   }

//   console.log(countVowel("geeksforgeeks portal"));

// function reverseAlphabetFromPosition(str, n) {
//     const reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba";
//     let mirrorStr = "";

//     for (let i = 0; i < n; i++) {
//       mirrorStr += str[i];
//     }

//     for (let i = n; i < str.length; i++) {
//       mirrorStr += reverseAlphabet[str[i].charCodeAt() - 'a'.charCodeAt()];
//     }

//     return mirrorStr;
//   }

//   console.log(reverseAlphabetFromPosition('paradox', 3)); // Output: parzywlc
//   console.log(reverseAlphabetFromPosition('pneumonia', 6)); // Output: pnezlmrhz

// function shiftByK(S, shiftedS, N, K) {
//     // Iterate through the length of given string
//     for (let i = 0; i < N; i++) {
//         // Find the index for this current character in shiftedS[]
//         const idx = (i + K) % N;
//         // Copy that character at the found index idx
//         shiftedS[idx] = S[i];
//     }
//     // Add a NULL character to mark the end of string
//     shiftedS[N] = '\0';
// }

// // Example usage:
// const S = "hacker";
// const N = S.length;
// const K = 2;
// const shiftedS = Array(N + 1); // Allocate space for the shifted string
// shiftByK(S, shiftedS, N, K);
// console.log("Shifted string:", shiftedS.join("")); // Output: "erhack"


