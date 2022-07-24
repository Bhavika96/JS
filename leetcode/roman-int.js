//Roman to Integer

/*
1. Convert roman number series to objects
2. Conver string to array using split
3. Loop the array & add the value to result
4. Return result
*/

let value = "III";

let obj = {
    I:1,
    v:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}


value = value.split("");
console.log(value);
let result = 0;
for(let i=0; i<value.length; i++) {
    result = result + obj[value[i]];
}
console.log(result);