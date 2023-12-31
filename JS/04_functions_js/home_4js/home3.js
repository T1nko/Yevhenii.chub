/*
 * Створити функцію filter(arr, fn), яка
 *  - приймає в аргумент масив arr та  функцію fn
 *  - повертає новий масив, який містить тількі ті елементи arr,
 *    для яких fn повертає true
 */

const list = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, fn) {
  const out = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn.call(arr, arr[i])) {
      out.push(arr[i]);
    }
  }
  return out;
}

// Перевірка - повернути масив з елементами значення якіх більше 50
const filteredArr = filter(list, (item) => item > 50);

console.log(filteredArr); //   [66, 55]]
