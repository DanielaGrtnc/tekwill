// 1. Declarați un array gol numit fruits
const fruits = [];
fruits.push('apple', 'banana', 'orange');
console.log(fruits.length);
console.log(fruits);

// 2. Declarați un array numit numbers cu următoarele elemente: 1, 2, 3, 4, 5
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

// 3. Declarați un array numit `colors` cu următoarele elemente: "red", "blue", "green", "yellow"
const colors = ["red", "blue", "green", "yellow"];

console.log(colors.indexOf("green"));
console.log(colors.includes("orange"));

//  4. Declarați un array numit `names` cu următoarele elemente: "John", "Jane", "Mike", "Anna"
const names = ["John", "Jane", "Mike", "Anna"];

names.unshift("David");
console.log(names);

console.log(names.indexOf("Mike"));

//  5. Declarați un array numit `numbers` cu următoarele elemente: 2, 4, 6, 8, 10
const numbers2 = [2, 4, 6, 8, 10];

console.log(numbers2.includes(5));

numbers2.push(12);
console.log(numbers2);

// 6. Declarați un array numit `fruits` cu următoarele elemente: "apple", "banana", "orange"
const fruits2 = ["apple", "banana", "orange"];

for (const fruit of fruits2) {
  console.log(fruit);
}