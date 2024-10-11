let computerChoice;      //Define variable to store computer move choice
let humanChoice

const rock = "rock";      //Create variables naming each move as a string
const paper = "paper";
const scissors = "scissors";

const container = document.querySelector(".container")
const rockChoice = document.querySelector(".rock.btn")
const paperChoice = document.querySelector('.paper.btn')
const scissorsChoice = document.querySelector('.scissor.btn')
const results = document.querySelector('.results')

container.addEventListener("click", (move) => {
    let target = move.target;

    switch(target.id) {
        case 'rock':
            humanChoice = rock;
            console.log(humanChoice)
            showMoveChoices()
            playRound()
       break;
        case 'paper':
            humanChoice = paper;
            console.log(humanChoice)
            showMoveChoices()
            playRound()
        break;
        case 'scissors':
            humanChoice = scissors;
            console.log(humanChoice)
            showMoveChoices()
            playRound()
        break;
    }
})

/* Randomly generate computers move selection out of
the 3 move types - rock, paper, and scissor. Generates a random number
between 0 and 1, then based on the number generated decides the move */

function getComputerChoice() {          
   let randomNumber = Math.random();
    if (randomNumber <= .33) {
    return computerChoice = rock;
    } else if ((randomNumber > .33) && (randomNumber <  .66)) {
    return computerChoice = paper;
    } else { 
    return computerChoice = scissors;
    }
}

function showMoveChoices(){
const moveChoices = document.createElement("p")
moveChoices.textContent = `Computer chose ${computerChoice}. You chose ${humanChoice}.`
results.appendChild(moveChoices)
}

/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function showWinner(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
            console.log(`Tie result, better luck next round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
        } else if ((humanChoice === rock && computerChoice === scissors)
        || (humanChoice === paper && computerChoice === rock)
        || (humanChoice === scissors && computerChoice === paper)) { 
                currentHumanScore = ++humanPoint;
                console.log(`You beat the computer! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
       } else if ((humanChoice === rock && computerChoice === paper)
        || (humanChoice === paper && computerChoice === scissors)
        || (humanChoice === scissors && computerChoice === rock)) {
                currentComputerScore = ++computerPoint;
                console.log(`You LOSE this round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
}
}


function playRound() {     //Create function to call start a round
    getComputerChoice()
    displayMoveChoices()
    showWinner(humanChoice, computerChoice)
}


function playGame () {                                               
    playRound()
    } 

