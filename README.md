# T's 90s Band Guess Game 
--------------------------------------------------------------------------------------------------------------------

This project was created by Taylor Johnson for the Georgia Tech Coding Boot Camp - Homework #3.

__*What this project does?*__

This project is a game where the player attempts to guess a 90s band. The band to be guessed is randomly generated from a list of the top 123 bands from the 1990s. The player guesses one letter at a time which is in put by pressing an alpha key on the keyboard. At game start, the blanks and spaces for the band are displayed to the player in the browser.

A player is given nine (9) guesses or tries to determine the mystery 90s band. If the guess is valid and part of the band name, then letter is revealed within the browser. If the guess is valid, but not part of the band name, then nothing is revealed to the player and he loses a guess or try.

The number of remaining guesses or tries for the player are displayed in the browser. Also, each valid guess is displayed to the player in the browser so that he knows which letters have already been guessed.

The player wins the game when all of the letters of the band name have been guessed. If the player runs out of guesses or tries, then the game is over and the player loses. When the player wins or loses, he is notified with an alert. After the alert, the player is allowed to start a new game by pressing any key. All game variables will be reset. Session variables (i.e. wins and losses) will not be reset.

Wins and losses for the session are also tracked. The wins and losses will be reset if the session ends (browser is refreshed).

The key pressed is validated in two ways:
* The first check is performed to determine if the player has pressed an alpha character. If any non-alphabet character or key is pressed, the player is alerted that they pressed an invalid key. The player can then try again without penalty.
* The second check is performed to determine if the player has already guessed the pressed character. If the alphabet character or key pressed has already been guessed, the player is alert that they already guessed the key pressed. The player can then try again without penalty.

__*What languages does this project use?*__

This project uses the following languages:
* HTML
* CSS/Bootstrap
* Vanilla JavaScript

