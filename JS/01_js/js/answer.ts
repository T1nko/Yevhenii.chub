const result = document.getElementById("result");

let answer = prompt("Enter your name", "");
if (answer) {
  answer = answer.trim();
}
if (result) {
  result.innerHTML = "<h1>Hello " + answer + "</h1>";
}
