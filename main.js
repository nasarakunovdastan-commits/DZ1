
let name = "Дастан";
let age = 19;
let isStudent = true;
let emptyValue = null;
let notAssigned;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(emptyValue);
console.log(notAssigned);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyValue); 
console.log(typeof notAssigned);

let person = {
  name: name,
  age: age,
  isStudent: isStudent
};

console.log("Меня зовут " + person.name + ", мне " + person.age + " лет.");

let favoriteMovies = ["Гари Поттер", "Матрица", "Фосаж  ", "Дюна", "Аватар"];

console.log(favoriteMovies);
