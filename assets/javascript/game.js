
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
var bandPickedLC;
var blanksArr = [];
var userGuessesArr = [];
var blanksOutput = "";
var guessesRemaining = 9;
var didYouWinCounter = 0;
var gameStarted = false;
var wins = 0
var losses = 0;

// Function to start the game by displaying the blanks to the user and picking a nineties band from the array randomly
function startGame() {
    guessesRemaining = 9;
    userGuessesArr = [];
    bandPicker = Math.floor(Math.random() * 10);
    bandPicked = ninetiesBands[bandPicker];
    blanksArr = [];
    blanksOutput = "";
    didYouWinCounter = 0;
    gameStarted = true;

    // Calculates the length of the band's name
    var bandPickedLength = bandPicked.length;

    // Console output to check that the array is populated and that a nineties band is being picked
    console.log("Game Started: " + gameStarted);
    console.log("Band Picked: " + bandPicked);
    console.log("Band Picked Index: " + bandPicker);
    console.log("Band Picked Length: " + bandPickedLength);
    console.log(ninetiesBands);


    for(i = 0; i < (bandPickedLength); i++) {
        blanksArr.push("_");
        blanksOutput = blanksOutput + blanksArr[i] + " ";
    }

    // Updates DOM to display the blanks to the user in the browser window
    document.getElementById("band-display").textContent = blanksOutput;
    document.getElementById("guesses-remaining").textContent = guessesRemaining;
    document.getElementById("user-guesses").textContent = userGuessesArr;
    
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

console.log("Game Started: " + gameStarted);

// Begins to track key strokes as the user guesses letters one at a time; also validates that only letters are entered
document.onkeyup = function(guess) {

if (gameStarted == false)
{
    // Starts the game by invoking the startGame function
    startGame();
}

else
{
    userGuess = guess.key;
    userGuess = userGuess.toLowerCase();

    if (guessesRemaining != 0)
    {
        if (inputValidation(userGuess) == true && userGuess != "shift" && userGuess != "meta" && userGuess != "alt" && userGuess != "control" && userGuess != "enter" )
        {
            multipleLetters = false;

            // 
            bandPickedLC = bandPicked.toLowerCase();

            if (bandPickedLC.includes(userGuess) == true) {
                console.log("Good guess!");

                var guessIndex = bandPicked.indexOf(userGuess);
                console.log("Index of User Guess in Band: " + guessIndex);

                //Loop through band picked (in lowercase) to find the index of matches and put those in an array locally
                for (i = 0; i < bandPickedLC.length; i++)
                {
                    blanksOutput = "";
                    
                    if(userGuess === bandPickedLC.charAt(i))
                    {
                            
                        blanksArr[i] = bandPicked.charAt(i);
                            
                        for (j = 0; j < bandPicked.length; j++)
                        {
                            blanksOutput = blanksOutput + blanksArr[j] + " ";
                        }

                        document.getElementById("band-display").textContent = blanksOutput;
                        didYouWinCounter++;                  
                    }
                    
                }

                console.log("New Blanks Arr: " + blanksArr);
                console.log("New Blanks: " + blanksOutput);

            }
            else {
                guessesRemaining--;
                console.log("Wrong!");
                console.log("Guesses Remaining: " + guessesRemaining);
                
                document.getElementById("guesses-remaining").textContent = guessesRemaining;

                if(guessesRemaining == 0)
                {
                    losses++;
                    gameStarted = false;

                    document.getElementById("band-display").textContent = "Press any key to play again!";
                    document.getElementById("your-losses").textContent = losses;
                    console.log("Game over! Out of guesses. Game over! Womp. Womp.");
                    alert("Game over! Out of guesses. Game over! Womp. Womp.");
                    
                }

            }
            userGuessesArr.push(userGuess);
            document.getElementById("user-guesses").textContent = userGuessesArr;
            console.log("User's guess: " + userGuess);
            console.log("User Guesses: " + userGuessesArr);
            console.log("Number of Correct Guesses: " + didYouWinCounter);
        
            if (didYouWinCounter == bandPicked.length)
            {
                wins++;
                gameStarted = false;  
                document.getElementById("band-display").textContent = "Press any key to play again!";
                document.getElementById("your-wins").textContent = wins; 
                alert("You win! " + bandPicked + " totally rocks!");      
            }    
        }
        else {
            alert("You didn't enter a letter. Please only enter letters!");
        }
    }
    else
    {

    }
}
};