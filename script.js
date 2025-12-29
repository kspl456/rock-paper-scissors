/*const computerChoice=document.getElementById("computer-choice");
const userChoice=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoices=['rock','paper','scissors'].map(id=>document.getElementById(id));
const startButton=document.querySelector(".start-btn");
let userSelection;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click",(e)=>{
    userSelection=e.target.id;
    userChoice.innerHTML= "You selected "+userSelection;
    computerChoice=generateComputerChoice();
    document.getElementById("computer-choice").innerHTML="Computer selected "+computerChoice;
}))

function generateComputerChoice(){
var choices=["rock","paper","scissors"];
var randomIndex=Math.floor(Math.random()*3);
return choices[randomIndex];
}
*/
let userScore = 0;
let computerScore = 0;
let round = 1;

$(document).ready(function() {

  // When "Start Game" is clicked
  $(".start-btn").on("click", function() {
    $(".game-logo").fadeOut(100);  // hide the logo
    $(this).fadeOut(100);  // hide start button
    $(".game-image").fadeOut(100);    // hide the game image
    $(".selection").delay(100).fadeIn(100); // show the game section
    $(".results").delay(100).fadeIn(100);
  });

});
// When user clicks on Rock, Paper, or Scissors
$(".button").on("click", function() {
  const userSelection = $(this).attr("id"); // get which button was clicked
  const userImg = $("#user-img");
  const computerImg = $("#computer-img");

  // Set user's image
  userImg.attr("src", `images/${userSelection}.png`).fadeIn(300);

  // Hide computer image initially
  computerImg.fadeOut(0);

  // Show "thinking" animation for 2 seconds
  computerImg.attr("src", "./images/deciding.png"); // temporary placeholder
  computerImg.fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

  // After animation finishes (2 sec), we’ll handle computer’s random choice
  setTimeout(() => {
     const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    // Set computer image
    computerImg.attr("src", `images/${computerSelection}.png`).fadeIn(300);

    // Determine result
    let resultText = "";
    if (userSelection === computerSelection) {
        resultText = "😐 It's a draw!";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        resultText = "🎉 You win!";
        userScore++;
    } else {
        resultText = "💥 You lose!";
        computerScore++; 
    }
$("#user-score").text(userScore);
$("#computer-score").text(computerScore);

    // Display result text and images
    $("#result").text(resultText).fadeIn(300); // **FIX: fadeIn the result text**
    $(".results").fadeIn(300); // **FIX: Show the results container**

    // Hide the selection buttons (Rock, Paper, Scissors) and text
    $(".button").fadeOut(300);
    $(".after-start").fadeOut(300);

    // Show the replay button
    $(".replay-btn").fadeIn(300);
  }, 2000);
});

$(".replay-btn").on("click", function() {
    // Hide images & result
    round++; // 👈 move to next round
    $("#round").text(round);
    $("#user-img, #computer-img, #result").fadeOut(300);
    
    // 2. Hide Replay button
    $(this).fadeOut(300);

    // 3. Show the selection buttons (Rock, Paper, Scissors) and the text
    $(".button").fadeIn(300);
    $(".after-start").fadeIn(300);

});
