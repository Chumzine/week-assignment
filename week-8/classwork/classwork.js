// 1. Number Pyramid: Create a script that prints a number pyramid pattern, where each row contains numbers in ascending order.
// 2. Greatest Common Divisor (GCD) Calculator:Write a function that calculates the greatest common divisor (GCD) of two numbers.
// 3. Pattern Printing:Implement a program that prints the following pattern:
// 4. Temperature Conversion:Write a program that converts temperatures between Fahrenheit and Celsius. Ask the user for the temperature and the desired conversion.


// Done personally
function temperatureConverter() {
    let temperature = prompt("Enter Temperature");
    let scale = prompt("Enter Temperature scale, 'C' or 'F'");

    if(scale == 'F') {
        return (temperature - 32) * 5/9;
    } else (scale == 'C') 
    { 
        return (temperature * 9/5) + 32;
    }
}
console.log(temperatureConverter())






// Done with group
// function temptConverter() {
//     let temperature= prompt("Enter Temperature")
//     let conversion= prompt("Enter 'F' if Fahrenheit then 'C' if Celsius")
 
//     if(conversion == 'F') {
//         let F = temperature;
//         return (F - 32) * 5/9;
//     } else(conversion == 'C')
//     {
//         let C = temperature;
//        return (C * 9/5) + 32;
//     }
// }
// console.log(temptConverter())



function numberPyramid(rows) {
    let rows = "";
    for (let i = 1; i <= rows; i++) {
        rows = i
        for (let j = i; j < rows; j++) {
            console.log(rows);
        }
    }
}
console.log(numberPyramid(5))



function patternPrint() {
    let n = 4; // you can change the value of n to print different patterns
    for (let i = star; i < n; i++) {
        let star = "*";
        star += 1
    }
    console.log(star);
}
console.log(patternPrint(4))
