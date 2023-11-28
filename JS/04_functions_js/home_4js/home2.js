/*
1. Написати функцію groupVotes, яка буде получати в аргумент
масив votes та повертати масив унікальних значень  
2. Провести сортування отриманого масива за кількістю їх входжень
Результат має бути таким  [react, vue, angular]
*/

const votes = [
  "angular",
  "react",
  "vue",
  "react",
  "angular",
  "react",
  "vue",
  "react",
  "vue",
];

function getVotes(list) {
  return list.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

const votesOb = getVotes(votes);
console.log(votesOb);

const votesArr = Object.keys(votesOb).sort((a, b) => votesOb[b] - votesOb[a]);
console.log(votesArr); // [react, vue, angular]
