# Gem Collector Game
A simple app utilizing JavaScript logic and JQuery to manipulate the DOM.

Deployed Application Link: https://huntsimon23.github.io/GemCollector/

# How the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

# Pseudocoding:

1. Define Variables (Start Empty): 
    - gemValues
    - computerValue
    - playerScore (Start at 0)
    - gemA (is thsi needed?)
    - gemB (is thsi needed?)
    - gemC (is thsi needed?)
    - gemD (is thsi needed?)
    - Wins (Start at 0)
    - Losses (Start at 0)

2. Define Fuctions 
    - startGame 
        Assign random computerValue (values btwn 19 and 120)
        Display updated computerValue in random-text ID
        Empty gemValues array
        Generate 4 new Random Numbers and push to gemValues array (values btwn 1 and 12)
        Set playerScore = 0

3. Call startGame function to assign initial values for first game

4. Write JQuery on click functions for each of the 4 gems that add value of Gem(x) to playerScore
    CAN I MAKE THIS 1 FUNCTION??? FOR EACH????

5. IF/THEN statements to evaluate score
        IF playerScore === computerValue, THEN {alert win, update win counter, call startGame function}
        IF playerscore > computerValue, THEN {alert lose, update lose counter, call startGame function} 
