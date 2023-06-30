let choices = ["rock", "paper", "scissor"]
let computerChoice;
let playerChoice;
let winner;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
player.style.color= "blue";
computer.style.color = "red"

rock.addEventListener('click', () => {
    playerChoice = choices[0];
    
    generate();
    checkWinner();
})
paper.addEventListener('click', () => {
    playerChoice = choices[1];
    generate();
    checkWinner();
})
scissor.addEventListener('click', () => {
    playerChoice = choices[2];
    generate();
    checkWinner();
})


function generate(){
    computerChoice = choices[Math.floor(3 * Math.random())]
    player.textContent = "Player: " + playerChoice;
    computer.textContent = "Computer: " + computerChoice;
}



function checkWinner(){
    
    if(playerChoice == computerChoice){
        winner = "Draw!"
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        winner = "You win!"
    }
    else if(playerChoice == "paper" && computerChoice == "scissor"){
        winner = "Computer wins!"
    }
    else if(playerChoice == "rock" && computerChoice == "scissor"){
        winner = "You win!"
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        winner = "Computer wins!"
    }
    else if(playerChoice == "scissor" && computerChoice == "rock"){
        winner = "Computer wins!"
    }
    else if(playerChoice == "scissor" && computerChoice == "paper"){
        winner = "You win!"
    }

    result.textContent = winner;
}



