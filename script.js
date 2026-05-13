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

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("It's a Draw! You both picked Rock.");
        } else if(computerChoice === "paper"){
            console.log("You Lose! Paper beats Rock.");
            computerScore++;
        } else{
            console.log("You Win! Rock beats Scissors.");
            humanScore++;
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You Win! Paper beats Rock.");
            humanScore++;
        } else if(computerChoice === "paper"){
            console.log("It's a Draw! You both picked Paper.");
        } else{
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
    }

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            console.log("You Lose! Rock beats Scissors.");
            computerScore++;
        } else if(computerChoice === "paper"){
            console.log("You Win! Scissors beats Paper.");
            humanScore++;
        } else{
            console.log("It's a Draw! You both picked Scissors.");
        }
    }
}

function playGame(){

    for(let i=0; i<5; i++){
        let computerChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice().toLowerCase();
        playRound(humanChoice, computerChoice)
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);

    if(humanScore > computerScore){
        console.log("YOU WON THE MATCH ;)");
    }
    else if (humanScore < computerScore){
        console.log("YOU LOST THE MATCH :(");
    }
    else{
        console.log("THE MATCH IS A DRAW ;/");
    }
}

playGame();