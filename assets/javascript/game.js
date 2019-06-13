
// Instantiate array of super cool nineties bands for the game
var ninetiesBands = [ 
    "Nirvana",
    "Alice In Chains",
    "Soundgarden",
    "Green Day",
    "Radiohead",
    "Pearl Jam",
    "REM",
    "Foo Fighters",
    "Red Hot Chili Peppers",
    "Pantera",
];

// Global variable instantiation so that these are available throughout the program
var bandPicker;
var bandPicked;
var blanksArr = [];
var userGuessesArr = [];
var blanksOutput = "";
var guessesRemaining;

// Function to start the game by displaying the blanks to the user and picking a nineties band from the array randomly
function startGame() {
    guessesRemaining = 9;
    userGuessesArr = [];
    bandPicker = Math.floor(Math.random() * 10);
    bandPicked = ninetiesBands[bandPicker];

    // Calculates the length of the band's name
    var bandPickedLength = bandPicked.length;

    // Console output to check that the array is populated and that a nineties band is being picked
    console.log("Band Picked: " + bandPicked);
    console.log("Band Picked Index: " + bandPicker);
    console.log("Band Picked Length: " + bandPickedLength);
    console.log(ninetiesBands);


    for(i = 0; i < (bandPickedLength); i++) {
        blanksArr.push("_");
        blanksOutput = blanksOutput + blanksArr[i] + " ";
    }
    return blanksOutput, blanksArr;
}

// Validates that input is only letters, but does not work for shift, alt, ctrl, meta
function inputValidation(input) {
    var regExp = /^[A-Za-z]+$/;

    if(input.match(regExp)) {
        return true;
    }
    else {
        return false;
    }
}

// Starts the game with startGame function
startGame();

// Updates DOM to display the blanks to the user in the browser window
document.getElementById("band-display").textContent = blanksOutput;
console.log(blanksArr);

// Begins to track key strokes as the user guesses letters one at a time; also validates that only letters are entered
document.onkeyup = function(guess) {
    userGuess = guess.key;
    userGuess = userGuess.toLowerCase();

    if (inputValidation(userGuess) == true && userGuess != "shift" && userGuess != "meta" && userGuess != "alt" && userGuess != "control" ) {
        console.log("User's guess: " + userGuess);
        userGuessesArr.push(userGuess);
        document.getElementById("user-guesses").textContent = userGuessesArr;
        console.log("User Guesses: " + userGuessesArr);


        bandPicked = bandPicked.toLowerCase();

        if (bandPicked.includes(userGuess) == true) {
            console.log("Good guess!");

            var guessIndex = bandPicked.indexOf(userGuess);
            console.log("Index of User Guess in Band: " + guessIndex);

        }
        else {
            guessesRemaining--;
            console.log("Wrong!");
            console.log("Guesses Remaining: " + guessesRemaining);
            document.getElementById("guesses-remaining").textContent = guessesRemaining;

        }
        
    }
    else {
        alert("You didn't enter a letter. Please only enter letters!");
    }

    if (guessesRemaining == 0) {
        console.log("Game over!");
        alert("Out of guesses. Game over! Womp. Womp.");
        startGame();
    }
} 




