const computerChoice=document.getElementById("computer-choice");
const userChoice=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoices=document.querySelectorAll(".button");
const startButton=document.querySelector(".start-btn");
let userSelection;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click",(e)=>{
    userSelection=e.target.id;
    userChoice.innerHTML= "You selected "+userSelection;
}))