// Factorial Calculator: Write a function that calculates the factorial of a given number. 
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE


function calcFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else if (num < 0) {
        return "Sorry! Factorial does not exist for negative numbers";
    }
    else if (isNaN(num)) {
        return "Invalid input type. Please enter a number.";
    }
    else {
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}
const inputNum = 5;
const factorial = calcFactorial(inputNum);
console.log(`The factorial of ${inputNum} is: ${factorial}`);
