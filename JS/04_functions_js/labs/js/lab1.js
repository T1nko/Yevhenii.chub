/* 
Є кнопка. Треба з'ясувати чи був по неї click чи ні.
Як правило для цього створюється  об'єкт, і в ньому 
можна фіксувати стан кнопки  - наприклад присвоювати
свойству об'єкта clicked = true
Але в даному випадку при обробці події контекст функціх  this
вказує не на об'єкт а на button

ЗАВДАННЯ - написати свою функцію bind яка буде змінбвати 
контекст функціх this при обрабці події.
*/

const ob = {
  clicked: false,

  click: function (msg) {
    this.clicked = true;
    console.log(this);
    console.log(msg, ob.clicked);
  },
};

function bind(ob, meth, msg) {
  return function () {
    return ob[meth].call(ob, msg);
  };
}

const b = document.getElementById("btn");
b.addEventListener("click", bind(ob, "click", "Hello"));
