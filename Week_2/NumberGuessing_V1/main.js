/*eslint-env browser*/
function playGame() {
alert("First enter a low number, then a high number. Then, guess a random between them.");

//get the low and high bounds
//uses parseInt() to make sure we have numbers not strings
var from = parseInt(prompt("Enter the lower bound."));
while(from < 0 || from > 1000){
   from = parseInt(prompt("Enter a number greater than 0"));
}
while (isNaN(from)){
   from = parseInt(prompt("You must enter a number."));
}
// must enter a number not letter     
var to = parseInt(prompt("Enter the higher bound."));   
while (isNaN(to)){
  to = parseInt(prompt("You must enter a number."));
} 
// higher bound must be higher than lower bound
while(to <= from){
    to = parseInt(prompt("Your higher bound must be greater then your lower bound."));
}
//get an integer between [from,to]
//Math.random() returns decimals, used Math.round() to get whole number
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
// user may only enter guess between from and to.
var totalGuesses = 1;

// guesses must be only numbers
while (isNaN(currentGuess)){
    currentGuess = parseInt(prompt("You must enter a number."));
}
// loop until user guesses correct number
while(currentGuess != target){
     if (currentGuess < target){
    currentGuess = parseInt(prompt("Enter a higher number"));
    
    totalGuesses++;
}else if (currentGuess > target){
    currentGuess = parseInt(prompt("Enter a lower number"));
    
    totalGuesses++; 
}else if (currentGuess < from || currentGuess > to){
    currentGuess = parseInt(prompt("You can only guess between your lower and higher bound."))
}
}

alert("It took " + totalGuesses + " tries to guess the correct number.");
}