// if (condition) {
//   // Code to execute if the condition is true
//   console.log("gereg");
// } else {
//   // Code to execute if the condition is false
// }

// if (condition) console.log('Condition is true')
// else console.log('Condition is false');

// 1. Write a program that determines whether a given number is positive or not.
// const number = 5;
// if (number > 0) console.log('The number is positive');
// if (number < 0) console.log('The number is negative');
// if (number === 0) console.log('the number is 0');

// 2. Write a program that checks if a number is even or odd.
// const number = 12;
// 5/2 = 2 cu rest 1 => numarul este impar
// if (number % 2 === 0) console.log("Numarul este par");
// else console.log("Numarul este impar");

// if (number % 2 === 1) console.log("Numarul este impar");
// else console.log("Numarul este par");

// if (number % 2 === 0) console.log("Numarul este par");
// if (number % 2 === 1) console.log("Numarul este impar");

// 3. Write a program to determine the greater of two numbers

// const number1 = 5;
// const number2 = 10;
// if (number1 > number2) console.log('Number 1 is greater than number 2');
// else if (number1 === number2) console.log("Number 1 is the same as number 2");
// else console.log("Number 2 is greater than number 1");

// femei/barbati/copii/altele
// const input = "femei";

// if (input === "femei") console.log('Haine pentru femei');
// else if (input === 'barbati') console.log('Haine pentru barbati');
// else if (input === 'copii') console.log('Haine pentru copii');
// else console.log('Altele');

// switch (input) {
//     case 'femei':
//         console.log('Haine pentru femei');
//         break;
//     case 'barbati':
//         console.log('Haine pentru barbati');
//         break;
//     case 'copii':
//         console.log('Haine pentru copii');
//         break;
//     default: 
//         console.log('Altele');
// }

// if (input === "femei" || input === 'barbati') console.log('Haine unisex');
// else if (input === 'copii') console.log('Haine pentru copii');
// else console.log('Altele');

// switch (input) {
//     case 'femei':
//     case 'barbati':
//         console.log('Haine pentru oameni maturi');
//         break;
//     case 'copii':
//         console.log('Haine pentru copii');
//         break;
//     default: 
//         console.log('Altele');
// }

// Avem nevoie sa scriem programul pentru fiecare zi a saptamanii
// const day = "Monday";
// switch (day) {
//     case 'Monday':
//     case 'Wednesday':
//     case 'Friday':
//         console.log('Frontend course');
//         break;
//     case 'Tuesday':
//         console.log('Swimming lessons');
//         break;
//     default: 
//         console.log('Relax days');
// }

// 4. Write a program that assigns a letter grade based on a numerical grade.
// const score = 67;
// let grade;

// if (score >= 95) {
//     grade = "A";
// } else if (score >= 85) {
//     grade = "B";
// } else if (score >= 70) {
//     grade = "C";
// } else if (score > 60) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// console.log("Grade: " + grade);

// switch(true) {
//     case score >= 95:
//         grade = "A";
//         break;
//     case score >= 85:
//         grade = "B";
//         break;
//     case score >= 70:
//         grade = "C";
//         break;
//     case score > 60:
//         grade = "D";
//         break;
//     default:
//         grade = "F";
// };

// console.log("Grade: " + grade);

// 5. Write a program that determines if a year is a leap year.
// 1. divibil cu 4 - year % 4 === 0
// 2. Daca se imparte la 400 sau nu se imparte la 100 cu rest
// year % 400 === 0 || year % 100 !== 0

// (year % 4 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
// if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
//     console.log(year + "An bisect");
// } else {
//     console.log(year + "nu este bisect");
// }

// numele de variabile pentru boolean trebuie raspunda la intrebarea da sau nu
// isConnected, isActive, hasChildren, hasPermissions
// Ternary Operator (conditional operator)
// const age = 19;
// const isAdult = age >= 18 ? "Yes": "No";
// console.log(isAdult);

//Ecmascript (ES)
// Deprecated
// Changelog

// LECTIA 4 JS

// La orice numar adauga + 12%
function addTaxes(base) {
    if (base < 2000) {
        return (base * 1.1).toFixed(2);
    } else {
        return (base * 1.12).toFixed(2);
    }
}
// console.log(base); // eroare 

// rent + 12% = 1120
const rent = 1000;
console.log(addTaxes(rent)); // rent + 12%
const salary = 10000;
console.log(addTaxes(salary)); // salary + 12%


// Arrow function
const powerTwo = (base) => {
    return base * base;
}

// console.log(base * base) // 4
console.log(powerTwo(10))

// Built in functions javascript

const firstName = "Iuliana";
console.log(firstName.toUpperCase());

const currentDate = new Date();
console.log(currentDate);

console.log(Math.pow(3, 3));

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// void - tip de date pentru functie cand nu returneaza nimic
const tellFortune = (children, partnerName, location, jobTitle) => {
    if (!children && !partnerName) {
        return `You will be a ${jobTitle} in ${location}`;
    }
    if (children === 1) {
        return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kid.`;
    } 
    return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
}

tellFortune(4, 'Max', 'Australia', 'doctor');
tellFortune(1, 'Max', 'Australia', 'doctor');
console.log(tellFortune(undefined, undefined, 'Australia', 'doctor'));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

const celsiusToFahrenheit = (celsius) => {
    if (celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return `${celsius} grade celsius este echivalent ${fahrenheit} grade fahrenheit`;
    } else {
        return "Nu ati introdus variabila de celsius";
    }
    // return celsius * 9/5 + 32;
}

console.log(celsiusToFahrenheit(-10)); // 14
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const fahrenheitToCelsius = (fahrenheit) => {
    console.log('Far', fahrenheit);
    if (fahrenheit) {
    const celsius = (fahrenheit - 32 )* 5/9;
    console.log('Cel', celsius);
    return `${fahrenheit} grade celsius este echivalent ${celsius} grade fahrenheit`;
    } else {
        return "Nu ati introdus variabila de fahrenheit";
    }
}
// fahrenheit , celsius - variabile locale ale functiei fahrenheitToCelsius
// console.log(fahrenheit);
// console.log(celsius);
console.log(fahrenheitToCelsius(14, 12, 13, 43));

// var, let, const 
// block (curly braces)

// var - function scoped or globally scoped
// var - can be reassigned

if (true) {
    var a = 5;
    console.log(a);
}
console.log(a); // 5

const multiplication = () => {
    a = 7;
    console.log(a);
}
multiplication();

// let - block scoped  
// let - can be reassigned

const exampleFunction = () => {
    let b = 10;

    if (true) {
        let b = 30;
        console.log(b); // 30
    }
    console.log(b); // 10
}

exampleFunction();

// console.log(b); //b is not defined

// const - block scoped
// const - can not be reassigned

const x = 25;
x = 40;
console.log(x);