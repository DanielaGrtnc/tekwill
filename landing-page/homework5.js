// 1.	Numărul de proprietăți
const persoana = { nume: 'John', prenume: 'Doe', varsta: 30, ocupatie: 'Programator' };
console.log(Object.keys(persoana).length);

// 2. Problema: Calcularea sumei elementelor
const numbers = [5, 7, 2, 8, 16];
let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum);

// 3.Problema: Generarea unui șir de numere
const n = 8;
const numbers2 = [];
for (let i = 0; i <= n; i++) {
  numbers2.push(i);
}
console.log(numbers2);

// 4. Problema: Găsirea celui mai mare număr
const numbers3 = [15, 88, 9, 24, 3];
let theBiggestNumber = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
  if (numbers3[i] > theBiggestNumber) {
    theBiggestNumber = numbers3[i];
  }
}
console.log(theBiggestNumber);