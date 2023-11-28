import { curry, __ } from "https://unpkg.com/ramda?module";

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const fn = curry((el, evt, color) =>
  el.addEventListener(evt, (e) => (e.target.style.backgroundColor = color))
);

// usaage f(a,b,c) => f(a)(b)(c)

/* fn(box1, "click", "red");
fn(box2, "click", "green");
 */

const boxEl = fn(__, "mouseover", __);

boxEl(box1, "red");
boxEl(box3, "green");
