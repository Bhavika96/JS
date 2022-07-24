
//To print all the prime numbers from 2 to 100
/*
1. One loop from 2 to 100
2. Other loop from 1 to i
3. Check if i%j == 0
4. it will happen only in 2 conditions if its divided by 1 or no. itself then its prime
5. Maintain a counter
6. if counter = 2, rint the no. & set the counter to 0

*/


let count = 0;
for(let i=2; i<=100; i++) {
    for (let j=1; j<=i; j++) {
        if(i%j==0) {
            count++;
        }
    }
        if(count == 2) {
            console.log(i);
        }
        count = 0;
}




