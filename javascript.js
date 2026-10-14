console.log("Hello!")

function getComputerChoice() {
    let guesses = ["rock","paper","scissor"];
    let random = Math.floor(Math.random() * 3);
    return guesses[random];
}

function getHumanChoice() {
    let choice = prompt("What is your guess on rock, paper or scissor?");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    //rock beat scissor
    //scissor beat paper
    // paper beat rock

    if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore += 1;
    }else if (computerChoice == 'rock' && humanChoice == 'scissor'){
        computerScore += 1;
    }else if(humanChoice == 'scissor' && computerChoice == 'paper'){
        humanScore += 1;
    }else if(computerChoice == 'scissor' && humanChoice == 'paper') {
        computerScore += 1;
    }else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
    }else if(computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore += 1;
    }else {
        tie += 1;
    }
}



let humanScore = 0;
let computerScore = 0;
let tie = 0;

function playGame() {

    let playedRound = 0;

    while(playedRound < 5){
        playRound(getHumanChoice(), getComputerChoice());
        playedRound++;
    };

    let scores = `${humanScore} : ${computerScore}.You tied ${tie} times`
    const winner = humanScore > computerScore ? "You won the game " + scores : "You lost the game " + scores ;
    return winner;
}

console.log(playGame());