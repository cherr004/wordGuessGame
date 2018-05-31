
//Create variable that prompts user to pick a letter
var userLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Create a random letter and store it in a variable for use
var randomLetter = [Math.floor(Math.random()*userLetter.length)];

//create a variable for counting attempts
var counterAttempts = 0;

//create variable for number of wins
var counterWins = 0;

//Create a variable for max attempts
var maxAttempts = 9;

//Prompt the player to guess a letter
// Created --> var attempts = prompt("Please guess a letter between a-z")
var attempts = prompt("Please guess a letter between a-z");

// check to see if the letter guessed matches the computers random selection - This is the loop

if (userLetter != randomLetter ) {    
    counter ++;
    alert("Guess again")
    var attempts = prompt("Please guess a letter between a-z");
}

if (counter > maxAttempts) {
    break
    alert("Game is over")
}

//If the guess is wrong, prompt the player to guess again until correct, or until the player runs out of guesses
if (userLetter == randomLetter) {
    
}
//If the player picked the correct letter, tell the user what the letter is and let the player know if he/she won the game

//Program Complete
var psychicgame = {
    wins: 0,
    losses: 0,
    guessesLeft: 9,
    guessSoFar: [],
    randomLetters: "a","b", "c", 
}

document.onkeyup = function(event) {};

    for (var i = 0, 1 < 0; i++) {
        
    }
