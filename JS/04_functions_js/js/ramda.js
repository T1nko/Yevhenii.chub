import {
  map,
  pluck,
  pipe,
  uniq,
  pick,
  project,
  filter,
  where,
  lt,
  equals,
  T,
  __,
} from "https://unpkg.com/ramda?module";

const products = [
  { id: 1, name: "Jeans", price: 55, category: "clothes", stock: 100 },
  { id: 2, name: "Samsung", price: 33, category: "TV", stock: 50 },
  { id: 3, name: "Jacket", price: 66, category: "clothes", stock: 20 },
  { id: 4, name: "Panasonic", price: 77, category: "TV", stock: 20 },
  { id: 5, name: "iPhone", price: 99, category: "phones", stock: 150 },
  { id: 6, name: "Grundic", price: 111, category: "TV", stock: 5 },
  { id: 7, name: "Sneakers", price: 120, category: "clothes", stock: 30 },
];

/* ========================= Task 1 =====================  */
/*Отримати новий масив із властивостями name, price */
// const res = products.map((item) => item.category);

/* const getCats = pluck("category");
const res = getCats(products);
console.log(res);
 */

/* const getCats = pipe( pluck("category"), uniq);
console.log(getCats(products));
 */

/*
 const res = products.map((item) => ({
  name: item.name,
  price: item.price,
}));
 */
// const res = products.map(pick(["name", "price"]));

/* const getNameAdnPrice = map(pick(["name", "price"]));
console.log(getNameAdnPrice(products));
 */

/* const getNameAdnPrice = project(["name", "price"]);
console.log(getNameAdnPrice(products)); */

/* ========================= Task 2 =====================  */
/*  Показати фільтрацію продуктів із використанням 
    filter, pluck,  where({...}),  equals(st), lt(__, amont)  
     category ->  clothes, stock < 50, price  < 100
 */

const predicate = where({
  category: equals("clothes"),
  stock: lt(__, 50),
  price: lt(__, 100),
});

// const getResults = pipe(filter(predicate), pluck("name"));
const getResults = pipe(filter(predicate), project(["name", "price", "stock"]));

console.log(getResults(products));
