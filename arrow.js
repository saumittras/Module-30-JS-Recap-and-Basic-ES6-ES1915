function add(a, b) {
  return a + b;
}

// function expression
const add2 = function (a, b) {
  return a + b;
};

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const mul = (num1, num2) => num1 * num2;

// call add3(a,b)

const sum = add3(5, 95);
console.log(sum);
console.log(add4(22, 22, 34, 22));
console.log(mul(12, 10));

// 3 ways to declear an arrow function

// no 1: empty prenthesis function
const myName = () => console.log("John");
myName();

//No 2: single parameter arrow function
const squre = (a) => a ** 2;
console.log(squre(4));

// No 3: multi parameter arrow function
const add5 = (a, b) => a + b;
console.log(add5(12, 13));
