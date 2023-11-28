let app = (function () {
  const users = [];

  function addUser(user) {
    users.push(user);
  }

  function print() {
    console.log(users);
  }
  return {
    addUser,
    print,
  };
})();

// Питання - як отримати доступ до функцій
// addUser, print ?

app.addUser("Bill");
app.addUser("Paul");

app.print();
