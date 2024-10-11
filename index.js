let computerChoice;      //Define variable to store computer move choice
let humanChoice

const rock = "rock";      //Create variables naming each move as a string
const paper = "paper";
const scissors = "scissors";

const container = document.querySelector(".container")
const rockChoice = document.querySelector(".rock.btn")
const paperChoice = document.querySelector('.paper.btn')
const scissorsChoice = document.querySelector('.scissor.btn')


container.addEventListener("click", (move) => {
    let target = move.target;

    switch(target.id) {
        case 'rock':
            humanChoice = rock;
            console.log(humanChoice)
=        break;
        case 'paper':
            humanChoice = paper;
            console.log(humanChoice)
        break;
        case 'scissors':
            humanChoice = scissors;
            console.log(humanChoice)
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


function displayMoveChoices() {
console.log(`Computer chose ${computerChoice}. You chose ${humanChoice}.`);         
}


/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function showWinner(adjustedHumanChoice, computerChoice) { 
    if (adjustedHumanChoice === computerChoice) {
            console.log(`Tie result, better luck next round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
        } else if ((adjustedHumanChoice === rock && computerChoice === scissors)
        || (adjustedHumanChoice === paper && computerChoice === rock)
        || (adjustedHumanChoice === scissors && computerChoice === paper)) { 
                currentHumanScore = ++humanPoint;
                console.log(`You beat the computer! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
       } else if ((adjustedHumanChoice === rock && computerChoice === paper)
        || (adjustedHumanChoice === paper && computerChoice === scissors)
        || (adjustedHumanChoice === scissors && computerChoice === rock)) {
                currentComputerScore = ++computerPoint;
                console.log(`You LOSE this round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
}
}


function playRound() {     //Create function to call start a round
    getComputerChoice()
    displayMoveChoices()
    showWinner(adjustedHumanChoice, computerChoice)
}


function playGame () {                                               
    playRound()
    } 

