function add(num1, num2) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
// const sum = add(5, 7);
const sum1 = add(1);
const sum2 = add();

function add2(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
const ssss = add2(1);

function fullName(first, last = "") {
  const full = first + " " + last;
  return full;
}

console.log(fullName("saumittra"));
