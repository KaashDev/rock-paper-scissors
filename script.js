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

const result = document.querySelector(".result");

function playRound(humanChoice, computerChoice){
    const p = document.createElement("p");

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            p.textContent = "It's a Draw! You both picked Rock.";
        } else if(computerChoice === "paper"){
            p.textContent = "You Lose! Paper beats Rock.";
            computerScore++;
        } else if (computerChoice === "scissors"){
            p.textContent = "You Win! Rock beats Scissors.";
            humanScore++;
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            p.textContent = "You Win! Paper beats Rock.";
            humanScore++;
        } else if(computerChoice === "paper"){
            p.textContent = "It's a Draw! You both picked Paper.";
        } else if (computerChoice === "scissors"){
            p.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
    }

    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            p.textContent = "You Lose! Rock beats Scissors.";
            computerScore++;
        } else if(computerChoice === "paper"){
            p.textContent = "You Win! Scissors beats Paper.";
            humanScore++;
        } else if (computerChoice === "scissors"){
            p.textContent = "It's a Draw! You both picked Scissors.";
        }
    }
    const scores = document.createElement("p");
    scores.textContent =   `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    result.appendChild(p);
    result.appendChild(scores);

    if(humanScore === 5 || computerScore === 5){
    const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game";
    const final = document.createElement("p");
    final.textContent = winner;
    result.appendChild(final);
}
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice());
});

