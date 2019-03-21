# unit-4-game

<!--

### Option One: CrystalsCollector Game (Recommended)

![Crystal Collector](Images/1-CrystalCollector.jpg)

1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

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

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!** -->

Pseudocoding:

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