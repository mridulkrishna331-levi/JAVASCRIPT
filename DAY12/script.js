// console.log("This is a hello from the external JS file")


// // VARIABLES
// var age = 22;
// var num1 = 23;
// var num2 = 46;
// console.log(num1 + num2);
// console.log(age);


// // if(true){
// //    var tinda = "hello"
// // }
// // console.log(tinda)
// console.log(bhindi)
// var bhindi = 23;





// let age = 22;
// console.log(age)
// if (true) {
//     let bist = "hello there !"
//     console.log(bist)
// }
// // console.log(bist)     it will show error

// const age = 23;
// // age = "piyush"       it willl show error that assignment to the constant variable
// console.log(age)
















// DATATYPES
// numbers
// let num = 2.12;
// let num1 = 10;
// console.log(num + num1)

// // strings
// const name = "manu";
// const next = "tiwari"
// console.log(name + ' ' + next);

// // boolean
// let isloggedin = true;
// console.log(isloggedin)

// // null
// let lastLoginDate = null;
// console.log(lastLoginDate)

// // undefined
// let loginDate = undefined;
// console.log(loginDate);

// // objects
// const person = {
//     FullName:"Mridul Krishna",
//     age : 23,
//     isloggedin:false,
// }
// console.log(person );





// OPERATORS
// let num1 = 10;
// let num2 = 20;
// console.log(num1+num2+49);
// console.log(num1-num2+49);
// console.log(num1*num2+49);
// console.log(num1/num2+49);
// console.log("manu"*1)

// // type of operator
// console.log(typeof("manu"*1))















// CONTIDIONAL STTEMENTS
// const age = 220;

// if (age >= 80) {
//     console.log("too old t vote")
// }
// else if (age >= 18) {
//     console.log("can vote")
// }
// else {
//     console.log("can't vote")
// }

// // // Ternery operators
// // umar = 19;
// // umar>=18 ? console.log('vote kar sakta h '):console.log('nhi kar sakta vote chota h sala  ')


// // #Switch Case Statements

// const option = 2;
// switch (option) {
//     case 1: {
//         console.log("Namaste")
//     }
//         break;
//     case 2: {
//         console.log("Hello")
//     }
//         break
//     case 3: {
//         console.log("konichiwa")
//     }
//         break
//     default: console.log("invalid option")
// }


// let a = 30;
// let opt = '+'
// let b = 40;
// switch (opt) {
//     case '+': {
//         console.log(a + b)
//     }
//         break
//     case '-': {
//         console.log(a - b)
//     }
//         break
//     case '*': {
//         console.log(a * b)
//     }
//         break
//     default: console.log("invalid option choose ")
// }












// LOGICAL OPERATORS
// And -> akk condition must be true (&&)
// const age = 10;
// const gender = "male";
// if (age >= 18 && gender == "male") {
//     console.log("Sigma boi")
// }

// Or -> at least one condition is true(||)
// const age = 10;
// const gender = "male";
// if (age >= 18 || gender == "male") {
//     console.log("Sigma boi")
// }

// Not -> y false ko true kar deta h or true ko false kar deta h ()
// const number = 5;
// if (number % 2 != 0) {
//     console.log("Odd")
// }









// LOOPS

// 1. for loop  :   if you know how many tiems to loop
// for (let i = 1; i <= 10; i = i + 1) {
//     console.log("Mridul")
// }

// 2. while loop   :   jab hume condition pta ho ki yeh task karna h pr y ni pta ki kitna time lgne wla h

// let ip = 0;
// let house = 100;
// while (ip != house) {
//     console.log("step taken")
//     ip += 20;
// }

// 3. do While loop    :    plhe code run karega then conditin check karega
// let ip = 0;
// let house = 100;
// do {
//     console.log("steptaken")
//     ip += 20
// } while (ip <= house)


// guess the number
// let num = 40;
// let guess = 0;
// do {
//     guess = prompt("Guess a number") * 1
//     if (guess == num) {
//         break;
//         alert("winner")
//     }
// } while (guess != 0)











// FUNCTION
// function sayHello() {        //function naming
//     console.log("Hello There")      //execution of code
// }
// sayHello()      //calling the function

// // parameters
// function addingTwoDigitNumber(a,b){
//         console.log("a+b = ",a+b)
// }
// addingTwoDigitNumber(23,45)

// function multiply(a,b){
//     console.log(a*b)
// }
// multiply(12,6)

// We always havve to return the value we dont have to do console.log all the time
// function multiply(a, b) {
//     return a * b;
// }
// let a = multiply(12, 5);

// console.log("multiplication is ", a)


// unlimited arguments ko pass kar sake
// function addNums() {
//     let ans = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         ans = arguments[i] + ans
//     }
//     return ans
// }
// let result = addNums(1, 2, 3, 4, 5);
// console.log(result)


// ARROW FUNCTION

// // 1. Syntax
// const sayHello = () => {
//     console.log("Hello")
// };
// sayHello()

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(212, 34))



// // 2.'arguments' keyword
// // arguments is not defined in arrow function




// // 3.Hoisting(intresting)

// const sayhey = () => {
//     console.log("hey")
// }
// sayhey()



// // 4.This keyword(really important)
// const obj = {
//     value: 1333,
//     myFunction: function () {
//         console.log(this.value)
//     },
// };
// obj.myFunction()












// HIGHER ORDER FUNCTION AND CALL-BACKS
// Higher Order : functin take another function as an argumnts

function add(a, b, cb) {
    let result = a + b;
    cb(result)
}
add(2, 4, (val) =>console.log(val))

// console.log(add(23, 45));
