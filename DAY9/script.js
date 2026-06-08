let nums = [2, 4, 6, 7];
// nums.forEach((nums) => {
//     console.log(nums * nums)
// });

let newArr = nums.map((val) => {
    return val;
});
console.log(newArr)

let newarr = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(newarr);


let arr = [1, 2, 3, 4];
arr.reduce((res, current) => {
    return res + current
})