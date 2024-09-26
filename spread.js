const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// in this case we will get the array
console.log(numbers);
// when we use three dot before the array it will return only array elements
console.log(...numbers);

// will return an NaN
const arryMax = Math.max(numbers);
console.log(arryMax);
console.log(Math.max(...numbers));

// use sprade operator to copy
const nums = [4, 5, 87, 9];
const num2 = nums;
const num3 = [...nums]; // copy
num2.push(12); // also added 12 in nums

console.log(nums);
console.log(num2);
console.log(num3);

//advanced
const newNum = [...num2, 40];
console.log(newNum);
