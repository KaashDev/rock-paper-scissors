console.log("ROCK PAPER SCISSORS");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.random()

    if(rand < (1/3)){
        return("rock");
    } else if(rand < (2/3)){
        return("paper");
    } else{
        return("scissors");
    }
}

function getHumanChoice(){
    let result = prompt("Enter choice(rock, paper or scissors): ", "");
    return result;
}

