// i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// q1
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }

// Q2
let gameNum = 25;
let user = prompt("Guess the number:")
while (user != gameNum) {
    user = prompt(" you entered wrong number Guess the number again:")

}
console.log("you find the number ")