// 1. Define Variables (Start Empty): 
//     - gemValues
//     - computerValue
//     - playerScore (Start at 0)
//     - wins (Start at 0)
//     - losses (Start at 0)

// var gemValues = [];
var computerValue = [];
var playerScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {


// 2. Define Fuctions 
//     - startGame 
//         Assign random computerValue (values btwn 19 and 120)
//         Display updated computerValue in random-text ID
//         Empty gemValues array
//         Generate 4 new Random Numbers and push to gemValues array (values btwn 1 and 12)
//         Set playerScore = 0
//         Display playerScore in userscore-text

function startGame() {
    playerScore = 0;
    $("#userscore-text").text(playerScore);
    computerValue = [];
    computerValue = Math.floor(Math.random() * 120) + 19;
    $("#random-text").text(computerValue);
    console.log("Computer Value: " + computerValue);
    gemValues = [];
    while (gemValues.length < 4) {
        gemValues.push(Math.floor(Math.random() * 12) + 1);
        console.log("Gem Values: " + gemValues);
    }  
}

// 3. Call startGame function to assign initial values for first game
startGame();

function scoreEval() {
    $("#userscore-text").text(playerScore);
    if (playerScore === parseInt(computerValue)) {
        alert("You Win!");
        wins++;
        $("#wins-text").text(wins);
        startGame();
    } else if (playerScore > parseInt(computerValue)) {
        alert("You Lose...");
        losses++;
        $("#losses-text").text(losses);
        startGame();
}}
// 4. Write JQuery on click functions for each of the 4 gems that add value of Gem(x) to playerScore
//     CAN I MAKE THIS 1 FUNCTION??? FOR EACH????
$("#gemA").on("click", function(){
    playerScore = playerScore + gemValues[0];
    // $("#userscore-text").text(playerScore);
    scoreEval();
})

$("#gemB").on("click", function(){
    playerScore = playerScore + gemValues[1];
    // $("#userscore-text").text(playerScore);
    scoreEval();
})

$("#gemC").on("click", function(){
    playerScore = playerScore + gemValues[2];
    // $("#userscore-text").text(playerScore);
    scoreEval();
})

$("#gemD").on("click", function(){
    playerScore = playerScore + gemValues[3];
    // $("#userscore-text").text(playerScore);
    scoreEval();
})
// 5. IF/THEN statements to evaluate score
//         IF playerScore === computerValue, THEN {alert win, update win counter, call startGame function}
//         IF playerscore > computerValue, THEN {alert lose, update lose counter, call startGame function} 
$("#userscore-text").text(playerScore);
console.log(playerScore);

// if (playerScore === parseInt(computerValue)) {
//     alert("You Win!");
//     wins++;
//     startGame();
// } else if (playerScore > computerValue) {
//     alert("You Lose...");
//     losses++;
//     startGame();
});


