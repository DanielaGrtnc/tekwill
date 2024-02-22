// 1. Problema calculului mediei
const studentGrades = [
    { nume: "Marina", nota: 6 },
    { nume: "Dumitru", nota: 9 },
    { nume: "Liliana", nota: 8 },
    { nume: "Daniel", nota: 8 },
    { nume: "Eva", nota: 10 }
  ];
  
  const media = studentGrades.reduce((sum, student) => sum + student.nota, 0) / studentGrades.length;
  console.log(media); 


// 2. Problema filtrării și mapării
const products = [
    { nume: "Bluză", preț: 50, stoc: false },
    { nume: "Vestă", preț: 80, stoc: true },
    { nume: "Scurtă", preț: 120, stoc: false },
    { nume: "Rochie", preț: 60, stoc: true },
    { nume: "Fustă", preț: 40, stoc: false }
  ];
  
  const inStockProducts = products.filter(product => product.stoc).map(product => product.nume);
  console.log(inStockProducts); 

// 3. Problema găsirii elementului maxim
const numbers = [1, 45, 18, 15, 3, 201];

const max = numbers.reduce((max, num) => Math.max(max, num), -Infinity);
console.log(max); 

// 4. Calculați rădăcini pătrate
const numbers2 = [81, 5, 8, 16, 3, 100];

const squareRoots = numbers2.map(num => Math.sqrt(num));
console.log(squareRoots); 

// 5. Sarcină: Având în vedere un array de temperaturi în Celsius, creați un nou array cu temperaturile convertite în Fahrenheit
const temperaturesInCelsius = [13, 7, 35, 22, 43];

const temperaturesInFahrenheit = temperaturesInCelsius.map(temp => temp * 1.8 + 32);
console.log(temperaturesInFahrenheit); 