//Везде используем forEach.
// 1Переберите массив и запишите каждый элемент в консоль.
// 2Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.
// 3Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям.
// 4Выполните итерацию по массиву и обновите каждый элемент до нового значения.
// 5Найдите максимальное или минимальное значение в массиве, используя forEach
// 6Создайте новый массив, выбрав определенные свойства объектов в существующем массиве.

//1
const arrray = [0, 1, 2, 3, 4, 5];

arrray.forEach((element) => {
  console.log(element);
});
//2
const secondArray = [0, 1, 2, 3, 4, 5];
const multiply = 10;
const newArray = [];

secondArray.forEach((element) => {
  newArray.push(element * multiply);
});

console.log(newArray);
//3
const array = [0, 1, 2, 3, 4, 5];
const limit = 5;

const filter = [];

array.forEach((element) => {
  if (element >= limit) {
    filter.push(element);
  }
});

console.log(filter);

//4
const Arrayy = [0, 1, 2, 3, 4, 5];
const increse = 2;

Arrayy.forEach((element, index, array) => {
  array[index] = element + increse;
});

console.log(Arrayy);

//5
const aarray = [0, 1, 2, 3, 4, 5];
let max = -Infinity;

aarray.forEach((element) => {
  if (element > max) {
    max = element;
  }
});

console.log(`Maximum value ${max}`);

//6
const cities = [
  { city: "Boston", population: 12344556 },
  { city: "Minsk", population: 123556 },
  { city: "Tokyo", population: 3453211545 },
];

const namesOfCities = [];

cities.forEach((town) => {
  namesOfCities.push(town.city);
});

console.log(namesOfCities);
