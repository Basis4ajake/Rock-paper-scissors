let computerChoice;      //Define variable for computer move choice
let humanChoice;         //Define variable for human move choice

const rock = "rock";      //Create variables naming each move as a string
const paper = "paper";
const scissors = "scissors";

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

/* Ask human player for their move selection
Enter String of either R, P, or S */
humanChoice = prompt(`Enter your move for Rock Paper Scissors, type in Rock, Paper, or Scissors`);
console.log(typeof humanChoice);
let adjustedHumanChoice = humanChoice.toLowerCase();
console.log(adjustedHumanChoice);

getComputerChoice() //Generate computers move choice based on random move selection
console.log(`Computer chose ${computerChoice}. You chose ${humanChoice}.`);

let humanPoint = 0;  //Start both players with 0 point count
let computerPoint = 0; 
let currentHumanScore;  //Store number calculating current Human score
let currentComputerScore;  //Store number calculating current Computer score

/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function playRound (humanChoice, computerChoice) { 
    if ((humanChoice === rock && computerChoice === rock)
        || (humanChoice === paper && computerChoice === paper)
        || (humanChoice === scissors && computerChoice === scissors)) {
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

function playGame() {
for (let currentRound = 0; currentRound <= 5; currentRound++) {  //Create round counter for duration of 5 total round game
    if roundWinner()
}
}