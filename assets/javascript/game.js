// 1. Define Variables (Start Empty): 
//     - gemValues
//     - computerValue
//     - playerScore (Start at 0)
//     - gemA (is thsi needed?)
//     - gemB (is thsi needed?)
//     - gemC (is thsi needed?)
//     - gemD (is thsi needed?)
//     - wins (Start at 0)
//     - losses (Start at 0)
$(); {
var gemValues = [];
var computerValue = [];
var playerScore = 0;
var wins = 0;
var losses = 0;

$("#wins-text").text("wins");
$("#losses-text").text("losses");

// 2. Define Fuctions 
//     - startGame 
//         Assign random computerValue (values btwn 19 and 120)
//         Display updated computerValue in random-text ID
//         Empty gemValues array
//         Generate 4 new Random Numbers and push to gemValues array (values btwn 1 and 12)
//         Set playerScore = 0
//         Display playerScore in userscore-text

function startGame() {
    var min=19; 
    var max=120;
    computerValue = math.floor(math.random() * (+max - +min));
    $("#random-text").text(computerValue);
    console.log(computerValue);
    playerScore = 0;
    $(".userscore-text").text(playerScore);
    gemValues = [];
    while (gemValues.length < 5) {
        var minG = 1;
        var maxG = 12;
        var g = math.floor(math.random() * (+maxG - +minG));
        gemValues.push[g];
        console.log(gemValues);
    }  
}

// 3. Call startGame function to assign initial values for first game
startGame();

// 4. Write JQuery on click functions for each of the 4 gems that add value of Gem(x) to playerScore
//     CAN I MAKE THIS 1 FUNCTION??? FOR EACH????
$(".gemA").on("click", function(){
    playerScore = playerScore + gemValues[0];
    console.log(playerScore);
})

$(".gemB").on("click", function(){
    playerScore = playerScore + gemValues[1];
    console.log(playerScore);
})

$(".gemC").on("click", function(){
    playerScore = playerScore + gemValues[2];
    console.log(playerScore);
})

$(".gemA").on("click", function(){
    playerScore = playerScore + gemValues[3];
    console.log(playerScore);
})
// 5. IF/THEN statements to evaluate score
//         IF playerScore === computerValue, THEN {alert win, update win counter, call startGame function}
//         IF playerscore > computerValue, THEN {alert lose, update lose counter, call startGame function} 
if (playerScore === computerValue) {
    alert("You Win!");
    wins++;
    startGame();

} else if (playerScore > computerValue) {
    alert("You Lose...");
    losses++;
    startGame();
}}