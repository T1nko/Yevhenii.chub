/* ===== closures features */

/* 
5. Приклад closure функцфх на глобальну змінну
*/

let out;

function fn() {
  out = function (name) {
    console.log(`Hello ${name}`);
  };
}

fn();
fn = null;
out("Bill"); // Error - почему ?
