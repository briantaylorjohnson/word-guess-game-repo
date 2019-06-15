
// Instantiates array of super cool nineties bands for the game
var ninetiesBands = [ 
    "Nirvana", "Three Eleven", "Alanis Morissette", "Alice in Chains", "Bad Religion", "Beastie Boys", "Beck", "Bjork", "Blind Melon", "Blink", "Blur", "Bush", "Butthole Surfers", "Cake", "Candlebox", "Counting Crows", "Cowboy Junkies", "Cracker", "Creed", "Daft Punk", "Dave Matthews Band", "Depeche Mode", "Duran Duran", "Elastica", "EMF", "Eve Six", "Everclear", "Everlast", "Face to Face", "Faith No More", "Fastball", "Fatboy Slim", "Filter", "Fiona Apple", "Folk Implosion", "Foo Fighters", "Garbage", "Gin Blossoms", "Goldfinger", "Goo Goo Dolls", "Gravity Kills", "Green Day", "Harvey Danger", "Hole", "House of Pain", "James", "Jane's Addiction", "Jesus Jones", "Kid Rock", "King Missile", "Korn", "Len", "Lenny Kravitz", "Limp Bizkit", "Lit", "Live", "Lo Fidelity Allstars", "Local H", "Marcy Playground", "Marilyn Manson", "Matchbox Twenty", "Material Issue", "Mazzy Star", "Metallica", "MxPx", "Nine Inch Nails", "No Doubt", "Oasis", "Orgy", "Pearl Jam", "Pennywise", "PJ Harvey", "Primitive Radio Gods", "Primus", "REM", "Radiohead", "Rage Against the Machine", "Rancid", "Red Hot Chili Peppers", "Reel Big Fish", "Rob Zombie", "Save Ferris", "School of Fish", "Semisonic", "Silverchair", "Siouxsie and the Banshees", "Smash Mouth", "Sneaker Pimps", "Social Distortion", "Soul Asylum", "Soundgarden", "Sponge", "Squirrel Nut Zippers", "Stone Temple Pilots", "Sublime", "Sugar Ray", "Temple of the Dog", "The Breeders", "The Cardigans", "The Chemical Brothers", "The Cranberries", "The Crystal Method", "The Cure", "The Lemonheads", "The Living End", "The Mighty Mighty Bosstones", "The Offspring", "The Presidents of the United States of America", "The Primitives", "The Prodigy", "The Smashing Pumpkins", "The Sundays", "The Verve", "The Wallflowers", "Third Eye Blind", "Toadies", "Tool", "Tori Amos", "Weezer", "White Town", "White Zombie", 
];

// Global variable instantiation so that these are available throughout the script; most will be defined in the startGame function
var bandPicked = ""; // Nineties band that is picked at random
var bandPickedLC = ""; // Band picked in all lower case letters to make comparing arrays/strings easier
var blanksOutput = ""; // Array of blanks/spaced display to the player in string format; easier to work with in HTML
var blanksArr = []; // Array of blanks/spaces that will be displayed to player
var playerGuessesArr = []; // Array of all of the player's guesses
var guessesRemaining = 0; // Number of guess the player has until they lose; set to 9 when game starts
var didYouWinCounter = 0; // Number of successful guesses for the player; used to determin when a player wins 
var wins = 0; // Number of wins
var losses = 0; // Number of losses
var numSpaces = 0; // Number of spaces in band name used to calculate the number of correct guesse that equal a win
var gameStarted = false; // Indicates if the game has started or not

// Function to randomly pick a band from the nineties bands array
function bandPicker()
{
    // Generates a random number which is used to pick the nineties band to be guessed by player
    var bandPicker = Math.floor(Math.random() * 123);

    // Picks a nineties band using the band picker
    bandPicked = ninetiesBands[bandPicker];

    // Returns the picked band when the function is invoked
    return bandPicked;
}

// Function to start the game by displaying the blanks to the player and picking a nineties band from the array randomly
function startGame() {

    // Ensures that all game level variables are reset when the game starts
    guessesRemaining = 9;
    playerGuessesArr = [];
    bandPicked = bandPicker(); // Invokes the bandPicker function to pick a nineties band
    blanksArr = [];
    blanksOutput = "";
    didYouWinCounter = 0;
    numSpaces = 0;

    // This loop builds the array and strings which will be displayed/updated for player
    // Initially, it will be all blanks/spaces,but will be updated as player guesses correctly
    for(i = 0; i < (bandPicked.length); i++) {
        
        // Checks each character in the band name for spaces; players are given spaces and do not need to guess them
        if(bandPicked.charAt(i) === " ")
        {
            // Counts the number of spaces in the picked nineties band's name
            numSpaces++;

            // Adds a space to the blanks array which will be displayed to player
            blanksArr.push("&nbsp; &nbsp;");

            // Adds a space to the blanks output which is the blanks array in string form
            blanksOutput = blanksOutput + "&nbsp; &nbsp;";
        }
        // All non-space, alpha characters are assigned a blank which is added to the blanks array and blanks output string
        else
        {
            // Adds a blank to the blanks array which will be displayed to player; only applies for non-space characters
            blanksArr.push("_");

            // Adds a blank to the blanks output which will be display to player; only applies for non-space characters
            blanksOutput = blanksOutput + blanksArr[i] + " ";
        }
    }
    
    // Updates DOM to display the blanks to the player in the browser window
    document.getElementById("band-display").innerHTML = blanksOutput;

    // Updates DOM to reset the guesses remaining to the player in the browser window
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

    // Updates DOM to reset the letters the player has guessed from the last game
    document.getElementById("player-guesses").innerHTML = playerGuessesArr;
    
    // Prints to console to verify band has been picked and provide other additional debugging data
    console.log("Band Picked: " + bandPicked);
    console.log("Band Picked Index: " + ninetiesBands.indexOf(bandPicked));
    console.log("Band Picked Length: " + bandPicked.length);
    console.log("Number of Spaces: " + numSpaces);
    console.log("Blanks Array: " + blanksArr);
    console.log("Blanks String: " + blanksOutput);
    console.log(ninetiesBands);

    // Returns boolean of true to indicate the game has been initialized
    return true;
}

// Function to determine if the player is a winner
function isWinner()
{
    /*
        This conditional statement compares the total number of valid, good guesses possible to the number of good guesses the player has -- didYouWinCounter. If the didyouWinCounter equals the total number of valid, good guesses possible, then the player has won the game.
    */
    if (didYouWinCounter == calculateBandNameLength(bandPicked))
    {
        // Increases the player's session wins by 1
        wins++;

        // Indicates that the game is now over and a new game will need to be started
        gameStarted = false;  

        // Updates the DOM to instruct the player on how to start a new game
        document.getElementById("band-display").innerHTML = "Press any key to play again!";

        // Updates the DOM with the current number of session wins
        document.getElementById("your-wins").innerHTML = wins; 

        // Alerts the player that the game is over because he/she has won
        alert("You win! " + bandPicked + " totally rocks!");      

        return true;
    }
    else
    {
        return false;
    }
}

// Function to determine if the player is a loser
function isLoser()
{
    // Checks to see if the player has any guesses remaining; if not, the game ends and the player loses
    if(guessesRemaining == 0)
    {
        // Increases the player's session losses by 1
        losses++;

        // Indicates that the game is now over and a new game will need to be started
        gameStarted = false;

        // Updates the DOM to instruct the player on how to start a new game
        document.getElementById("band-display").innerHTML = "Press any key to play again!";
        
        // Updates the DOM with the current number of session losses
        document.getElementById("your-losses").innerHTML = losses;

        // Prints to console that the game is over
        console.log("Game over! Player has run out of guesses.");

        // Alerts the player that the game is over because he/she has no more guesses
        alert("Game over! Out of guesses. Game over! Womp. Womp.");
        
        return true;
    }
    else
    {
        return false;
    }
}

// Function to validate that input is only letters, but does not work for shift, alt, ctrl, meta, or return
function inputValidation(input) {
    var regExp = /^[A-Za-z]+$/;

    if(input.match(regExp)) {
        return true;
    }
    else {
        return false;
    }
}

// Function to calculate the length of the band name minus the spaces (if they exist)
function calculateBandNameLength(bandPicked)
{
    var bandPickedLength = bandPicked.length - numSpaces;
    return bandPickedLength;
}

// Prints to console when script is initially run to check that the game has not started
console.log("Game Started: " + gameStarted);

// Begins to track key strokes as the player guesses letters one at a time
// Also validates that only letters are entered and does not allow duplicate guesses
document.onkeyup = function(guess)
{

    // Checks to see if the game has started; starts the game by invoking the startGame function if it has not
    if (gameStarted == false)
    {
        // Starts the game by invoking the startGame function
        if ( startGame() == true)
        {
            // Sets the gameStarted indicator to true
            gameStarted = true;
            
            // Prints to console that the game has started
            console.log("Game Started: " + gameStarted);
        }

        // If the startGame function is invoked, but returns anything other than true, there is a bug in the startGame function
        else
        {
            console.log("Error with starting game. Check your startGame function.");
        }
    }

    // This conditional will be met if the game has started
    else
    {
        // Sets player's keystroke input to be his/her guess
        playerGuess = guess.key;

        // Sets player's guess to lower case for easier comparison with arrays and strings
        playerGuess = playerGuess.toLowerCase();

        // Validates that the player's current guess has not already been used
        if (playerGuessesArr.includes((" " + playerGuess)) == true)
        {
            // Alerts the player that the letter they entered has already been guessed
            alert("You already guessed this letter. Try again!");
        }
        
        // Validates that the player's current guess is only alpha characters - no numbers or other special characters or keystrokes
        else if (inputValidation(playerGuess) == true && playerGuess != "shift" && playerGuess != "meta" && playerGuess != "alt" && playerGuess != "control" && playerGuess != "enter")
        {
            // Sets the band picked to lower case for easier comparison with arrays and strings
            bandPickedLC = bandPicked.toLowerCase();
            console.log("Band Picked LC: " + bandPickedLC);

            // Determines if the player's valid guess is a letter in the band's name
            if (bandPickedLC.includes(playerGuess) == true) {
                // Prints to console that the guess was good
                console.log("Guess Status: Good");

                // Captures the index of the 

                //Loop through band picked (in lowercase) to find the index of matches and put those in an array locally
                for (i = 0; i < bandPickedLC.length; i++)
                {
                    blanksOutput = "";
                    
                    if(playerGuess === bandPickedLC.charAt(i))
                    {
                        // Prints to console the index of the player's guess in the band name for debugging
                        var guessIndex = bandPicked.indexOf(playerGuess);
                        console.log("Index of Player Guess in Band: " + guessIndex);    
                        
                        // This reads the band picked string to update the blanks array for displaying to the player
                        blanksArr[i] = bandPicked.charAt(i);
                        
                        // This reads the blanks array to update the blanks output string for displaying to the player
                        for (j = 0; j < bandPicked.length; j++)
                        {
                            blanksOutput = blanksOutput + blanksArr[j] + " ";
                        }

                        // Updates the DOM in the browser window to display the correct letter guesses for the band
                        document.getElementById("band-display").innerHTML = blanksOutput;

                        // Increases the didYouWinCounter for every good guess 
                        didYouWinCounter++;                  
                    }
                    
                }

                // Prints to console the new blanks array and blanks output string for debugging 
                console.log("New Blanks Arr: " + blanksArr);
                console.log("New Blanks String: " + blanksOutput);

            }

            // If the player's valid guess is not in the band's name then their number of allowed guesses decreases
            else {

                // Decreases the guesses/tries the player has remaining by 1
                guessesRemaining--;

                // Prints to console that the guess was bad along with the guesses remaining
                console.log("Guess Status: Bad");
                console.log("Guesses Remaining: " + guessesRemaining);
                
                // Updates the DOM with player's remaining guesses after a bad guess
                document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

                // Checks to see if the player has lost by calling the isLoser() function
                isLoser();
                
            }

            // Pushes all valid player guesses to an array for validation of future guesses
            playerGuessesArr.push(" " + playerGuess);

            // Updates the DOM to display all his/her guesses for the current game; will reset when a new game is started
            document.getElementById("player-guesses").innerHTML = playerGuessesArr;

            // Prints to console the player's current guess, all guesses for current game, and number of correct guesses for debugging
            console.log("Player's Current Guess: " + playerGuess);
            console.log("All of Player's Guesses: " + playerGuessesArr);
            console.log("Number of Correct Guesses: " + didYouWinCounter);
        
            // Determines if the player has won the game with his/her most recent guess by calling the isWinner() function
            isWinner();
        }
        
        // If the player has entered alpha character, then this alert the player to pick a letter (not a symbol or special character/key
        else {
            alert("You didn't enter a letter. Please only enter letters!");
        }
    }

};