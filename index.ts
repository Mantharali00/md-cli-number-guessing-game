#! /usr/bin/env node
import inquirer from "inquirer";
//(1) computer will genrate a random number
//(2) user input for guessing number 
// (3)compare user input with computer generated number and show result






const randomNumber = Math.floor(Math.random()* 10 +1);
console.log("Welcome to Number Guessing Game.");
const answer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message:"please guess a number between 1 to 10:",
    
},]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulation you guessed right number.")
    
} else {
    console.log("you gessed wrong number")
    
}