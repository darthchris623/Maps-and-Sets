console.log('Maps & Sets exercise');

/*
Quick Question #1
What does the following code return?
*/
new Set([1, 1, 2, 2, 3, 4]) // {1, 2, 3, 4}

/*
Quick Question #2
What does the following code return?
*/
// [...new Set("referee")].join(""); // 'ref'

/*
Quick Questions #3
What does the Map m look like after running the following code?
*/

let m = new Map();
m.set([1,2,3], true); // {{[1,2,3] => true}}
m.set([1,2,3], false); // {{[1,2,3] => true, [1,2,3] => false}}

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array and returns
true or false if that array contains a duplicate
*/

dupesArray = [1, 2, 3, 4, 4, 5, 6, 6,];

// for (let i = 0; i < dupesArray.length; i++){
//     if (dupesArray.lastIndexOf(dupesArray[i]) !== dupesArray.indexOf(dupesArray[i])) {
//         console.log(dupesArray[i], i);
//     }
//     else if (dupesArray.lastIndexOf(dupesArray[i]) === dupesArray.indexOf(dupesArray[i])) {
//         console.log(dupesArray[i], i)
//     }
// }

// TRADITIONAL WAY, JUST FOR REFERENCE
// function hasDuplicate(array) {
//     for (let i = 0; i < array.length; i++){
//         if (array.lastIndexOf(array[i]) !== array.indexOf(array[i])) {
//             return true;
//         };
//     };
//     return false;
// };

// function hasDuplicate(array) {
//     return array.reduce(function (val) {
//         return array.indexOf(val) === array.lastIndexOf(val);
//     });
// };

const hasDuplicate = arr => new Set(arr).size !== arr.length  // Never would have gotten this.

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1, 5, -1, 4]) // false
hasDuplicate([0, 1, 2, 3, 4]);

/*
vowelCount
Write a function called vowelCount which accepts a string and returns a map
where the keys are numbers and the values are the count of the vowels in the string.
*/

let string = 'hello';
const vowels = 'aeiou';

// for (let char of 'aeiou'){
//     if (string.indexOf(char) !== -1) {
//         console.log('true', char);
//     }
//     else {
//         console.log('false', char);
//     }
// };

// function vowelCount(string) {
//     const vowels = 'aeiou';
//     const dictionary = {};
//     for (let i = 0; i < string.length; i++){
//         if (string.indexOf) {
            
//         }
//     }
// };

const vowelCount = (str) => {
    const vowels = 'aeiou'
    const lowerStr = str.toLowerCase();
    const vowelMap = new Map();
    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            if (!vowelMap.has(char)) {
                vowelMap.set(char, 1);
            }
            else {
                vowelMap.set(char, vowelMap.get(char) + 1); 
            }
        }
    }
    return vowelMap;
};

vowelCount('Where in the world is Carmen Sandiego')
// Map {'e' => 5, 'i' => 3, 'o' => 2, 'a' => 2}

vowelCount('May the Force be with you')
// Map { 'a' => 1 ,'e' => 3, 'o' => 2, 'i' => 1, 'u' => 1}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }