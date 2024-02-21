// valori / Data types
// string: "Salut", '56776-jjjk'
// number: 123, 4.12, 3467, -19
// boolean: true, faslse
// null: variabila nu are valoare
// let pers = null;
// // // undefined: valoare neatribuita
// let person2;
// NaN - not a number

// const - nu permite modificarea ulterioara a valorii
// let - permite ca variabila sa-si schimbe valoarea pe parcursul programului

// Let/var/const; denumirea_variabilei = (semnul, assign-arii); valoarea_propriu_zisa;
// let animal = "5";
// let masa = 5;
// let masa_unitate = "kg"
// console.log("masa de fructe:", masa, masa_unitate);
// // let viteza = 120;

// const viteza = 120;
// console.log('viteza: ', viteza)

// variabilele pot contine - litere (A-Z, a-z), cifre (0-9)- nu poate incepe cu cifra
// caracterul underscore (_), semnul dolarului($)

// const 1viteza = 1;  (greseala)

// camelCase - toate variabile
// UPPER_SNAKE_CASE - constante
// uppercase - toate sunt majuscule
// Lowercase - toate sunt miniscule

const personAge = 30;

// const MAX_LENGTH = 5;
// const PI = 3.14;
// const MONTHS_IN_YEAR = 12;
// const firstName = "222"

// console.log(typeof MONTHS_IN_YEAR);
// console.log(typeof firstName);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// console.log(firstName*MAX_LENGTH);

//dynamic typing - 
let number = 5; // number
// console.log(typeof number);
// number = "ten"; //string
// console.log(typeof number);
number = false; //boolean
console.log(typeof number);

// reassign (Let)
let firtsName = "Mark";
firstName = "Oleg";

// Template Literals
const message = `My name is ${firstName} and I'm ${personAge} years old`;
console.log(message);

// Operatori
// +. -, *, /, %(modulo, restul impartirii)
console.log(35 % 10);

// const message2 = "My name is " + firstName + " and I`m " + personAge +" years old";
// console.log(message2); (varianta II)
