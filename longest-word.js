// To find longest word from a string using custom code

/*
1. Convert the str to array using split
2. Initialize the length & longest word
3. Check in for loop & return the longestwordlength & longest word
*/

let str = "My name is bhavika"

let newArr = str.split(" ");
let longestwordLength = 0;
let longestWord = "";

for(let i=0; i<newArr.length; i++) {
    if(newArr[i].length > longestwordLength) {
        longestwordLength = newArr[i].length;
        longestWord = newArr[i];
    }
}
console.log(longestwordLength)
console.log(longestWord)

//Using Function

function longestWord(str) {
    str = str.split(" ");
    let longestLength = 0;
    let longestWord = "";
    for(let i=0; i<str.length; i++) {
        if(str[i].length > 0) {
            longestLength = str[i].length;
            longestWord = str[i]
        }
    }
    console.log(longestLength, longestWord)
}
longestWord("My name is bhavika")