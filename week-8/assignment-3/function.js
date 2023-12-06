// GRADED ASSIGNMENT
// Random Number Guessing Game:
// Develop a program that generates a random number between 1 and 100.
// Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

 
// By the way, please, for the graded Assignment, do not use Prompt else, i will mark as 0.





function randomNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber)
    if (userInput == isNaN || userInput < 1 || userInput > 100) {
        return "Please enter a valid number between 1 and 100"
    } else if (userInput === randomNumber) {
        return `Congratulations! You guessed it right! The correct answer was ${randomNumber}`
    } else if (userInput > randomNumber) {
        return `${userInput} is too high! Try again`
    } else {
        return `${userInput} is too low! Try again`
    }
}

const userInput = 8;
console.log(randomNumberGame(userInput))