/* 
Програма повинна
1. Вивести для користувача 3 питання з масиву questions 
   (використовувати функцію prompt())
2. За відповідями користувача підрахувати та зберегти 
   кількість правильних та неправильних відповідей
   Підказка: Результати зберігати в масивах 
   rightAnswers, wrongAnswers
3. Вивести результати в div з id="result" так, 
   як показано на відео  task_3.mkv
   Підказка: Тобто треба в циклі по черзі обійти масиви
	rightAnswers, wrongAnswers та сформувати строку з 
    результатами. Цю строку  за допомогою innerHTML
    вивести в div з id="result"
 */
var questions = [
  ["2 + 2", 4], // 2 + 2 -> это вопрос, 4 -> правильный ответ
  ["9 / 3", 3],
  ["5 * 5", 25],
];

//========================= Рішення ==============================

var userAnswers = []; // Масив для збереження відповідей користувача
var rightAnswers = 0; //Змінна правельних відповідей
var wrongAnswers = 0; //Змінна НЕ правельних відповідей

for (var i = 0; i < questions.length; i++) {
  var question = questions[i][0]; // Отримую питання з масиву
  var answer = questions[i][1]; // Отримую правильну відповідь з масиву
  var userAnswer = prompt(question); // відповідь в користувача

  // Перевіряю, чи відповідь правильна
  if (userAnswer !== null && parseInt(userAnswer) === answer) {
    userAnswers.push(1); // це якщо відповідь правильна
  } else {
    userAnswers.push(0);   // а це якщо відповідь НЕ правильна
  }
  console.log('userAnswer - ' + userAnswer);
}
for (var i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i] === 1) {
    rightAnswers++;  // кількість вірних відповідей
  } else {
    wrongAnswers++;  // кількість помилкових відповідей
    console.log("rightAnswers = " + rightAnswers + "  wrongAnswers = " + wrongAnswers);
  }
}

// Формую рядки з результатами для додавання в HTML
var resultString = ""; //змінна яка поки що - пуста строка
if (rightAnswers > 0) {
  resultString += "<h2><i>Вірні відповіді:</i></h2>"; //якщо є хоча б 1 правильна відповідь, то додаємо в HTML код, можна було б написати і (rightAnswers >= 1)
  for (var i = 0; i < questions.length; i++) {
    if (userAnswers[i] === 1) {   // визначаю яка саме "[i]" відповідь масиву є ВІРНОЮ, і виводиться в HTML
      resultString += `<p>${questions[i][0]} \= ${questions[i][1]}</p>`;
    }
  }
}

if (wrongAnswers > 0) {
  resultString += "<h2><i>Помилкові відповіді:</i></h2>"; //якщо є хоча б 1 НЕ правильна відповідь, то додаємо в HTML код, можна було б написати і (wrongAnswers >= 1)
  for (var i = 0; i < questions.length; i++) {
    if (userAnswers[i] === 0) {  // визначаю яка саме "[i]" відповідь масиву є ПОМИЛКОВА, і виводиться в HTML
      resultString += `<p>${questions[i][0]} \= ${questions[i][1]}</p>`;
    }
  }
}

document.getElementById("result").innerHTML = resultString; // Виводимо результати в div
