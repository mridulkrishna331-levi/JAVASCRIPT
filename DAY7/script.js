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
// let gameNum = 25;
// let user = prompt("Guess the number:")
// while (user != gameNum) {
//     user = prompt(" you entered wrong number Guess the number again:")

// }
// console.log("you find the number ")


// let str = "Mridul Krishna";
// len = str.length;
// console.log(len);
// console.log(str[3])



// template literals
// let sentence = `this is a template liiterals `

// let str = "     Mridul Krishna  ";
// i = str.trim();
// console.log(i)

// let str1 = "Mridul";
// let str2 = " Krishna";
// console.log(str1.concat(str2))

// let str = "Hello";
// console.log(str.replace("H","L"))


// let heores = ["ironman", "spiderman", "thor", "chota bheem"];
// let marks = [45, 56, 24, 74, 86, 98];
// marks[0] = 33
// console.log(marks)

// let heroes = ["spiderman", "ironman", "superman", "doremon", "sinchan", "leon"];
// for (let idx = 0; idx < heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let sum = 0; sum <= marks[sum]; sum++) {
//     console.log(sum / marks.length)
// }

// let items = [250, 645, 300, 900, 50];
// for (i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items)

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips", "burger");
// foodItems.pop();
// console.log(foodItems);
// console.log(foodItems.toString());

// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dc_heroes = ["superman", "batman"];
// sum = marvel_heroes.concat(dc_heroes);
// console.log(sum)

// let heroes = ["spiderman", "ironman", "antman", "thor", "loki", "hulk", "wanda"];
// console.log(heroes.slice(1, 4));
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2,1,10,11);
console.log(arr)