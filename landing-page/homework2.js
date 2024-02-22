// 1.  Declarati si initializati variabilele
let weightAna = 65;
let weightBob = 93;
let heightAna = 1.75;
let heightBob = 1.89;

// 2.Calculati indicele de masã corporală (bmi) pentru Ana si Bob
let anaBMI = weightAna /
Math.pow(heightAna, 2);
let bobBMI = weightBob /
Math.pow (heightBob, 2);

// 3. Utilizati instructiunile if/else si operatorii logici pentru a evalua bmi-ul si a afisa rezultatele corespunzatoare pentru fiecare persoana
if (anaBMI < 18.5) {
console.log ("Ana is underweight");} 
else if (anaBMI >= 18.5 && anaBMI <= 25) 
{console.log ("Ana is normal weight");}

if (bobBMI < 18.5 || bobBMI > 25) 
{console.log ("Bob is underweight or overweight");}
 else {console.log ("Bob is normal weight");}