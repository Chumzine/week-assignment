// Assignment.
// Create a function that checks if the input/parameter is an even number.
// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
// Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
 
 


function evenNumber() {
    const num = prompt("Enter a number: ");
    if (num % 2 === 0){
        console.log(`${num} is an even number`);
    } else{
        console.log(`${num} is not an even number`);
    };
}
evenNumber();


function displayRangeOfNum() {
    let start = prompt('Please enter the starting number of your range');
    let end = prompt('Now please enter the ending number of your range');
    for (let i = start; i <=end ; i++){
        console.log(i);
    }
}
displayRangeOfNum();


function calcFunc(start, end) {
    if (start >= end) {
        console.log("Start value should be less than end value.");
        return;
    }

    let total = 0;
    for (let i = start; i <= end; i++) {
       total += i;
    }
    return total;
}
const result = calcFunc(2, 5);
console.log(result);
