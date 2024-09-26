const difference = (x, y) => x - y;
const multyply = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;
//Single parameter
const getAge = (person) => person.age;
const student = { name: "Ananta Jalil", age: 45 };
const studentage = getAge(student);
console.log(studentage);
const getThird = (numbers) => numbers[2];
const third = getThird([1, 3, 4, 8, 6]);
console.log(third);
const doubleIt = (num) => num * 2;

// no parameter
const getpi = () => Math.PI;
console.log(getpi());

// learge arrow functon or multiline function
const dotMath = (x, y, z) => {
  const sum = x + y + z;
  const multy = x * y * z;
  const result = sum + multy;
  return result;
};
