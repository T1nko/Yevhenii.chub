// Rest оператор => застосовується при декларуванні функції
// Його завдання - зібрати (gather) аргументи в масив

// Spread оператор - дозволяє перетворювати значення
// масивів та об'єктів у кілька змінних
// Наприклад, у кілька аргументів (при викликах функції)

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = [0].concat(arr1, arr2, [7]);
console.log(res);

// А можно сделать так
res = [0, 7, ...arr1, ...arr2];
console.log(res);

//arr1.push(arr2);
// console.log(arr1); //[1,2,3, [4,5,6]] - не то что хотели

//arr1.push(...arr2); // 4,5,6
//console.log(arr1); // [1,2,3,4,5,6]

//res = [...arr2, ...arr1];
// console.log(res);

function sum(a, b, c) {
  return a + b + c;
}
var arr = [10, 20, 30];

var res = sum(...arr);
console.log(res); // 60

function print({ name }) {
  console.log(name);
}

print({ name: "Bill", age: 22, phone: 111 });
