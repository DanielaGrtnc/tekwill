// 1. Funcția calculateSupply:

const calculateSupply = (age, dailyAmount) => {
    const maxAge = 100;
    const remainingYears = maxAge - age;
    const totalAmount = remainingYears * dailyAmount;
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
  }
  
  calculateSupply(25, 2);
  calculateSupply(30, 3);
  calculateSupply(40, 4);


// 2.  Funcția checkOddEven:

function checkOddEven(number) {
  if (number % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

checkOddEven(5); 
checkOddEven(10); 
checkOddEven(15); 


// 3. Funcția fizzBuzz:

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
  
  for (let i = 1; i <= 50; i++) {
    fizzBuzz(i);
  }