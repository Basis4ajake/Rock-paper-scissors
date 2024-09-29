let computerChoice;      //Define variable for computer move choice
let humanChoice;         //Define variable for human move choice

let rock = "rock";      //Create variables naming each move as a string
let paper = "paper";
let scissor = "scissor";

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
    return computerChoice = scissor;
    }
}

getComputerChoice() //Generate computers move choice based on random move selection

/* Prompt human player for their move selection
Enter String of either R, P, or S */

humanChoice = prompt(`Enter your move for Rock Paper Scissors, enter R for Rock, P for Paper, and S for Scissors`);

let humanPoint = 0;  //Start both players with 0 point count
let computerPoint = 0; 
let startingRound = 0;  //Number setting starting round count
let currentHumanScore  //Store number calculating current Human score
let currentComputerScore  //Store number calculating current Computer score

/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function winner(computerChoice, humanChoice) { 
    if ((humanChoice === rock && computerChoice === rock)
        || (humanChoice === paper && computerChoice === paper)
        || (humanChoice === scissor && computerChoice === scissor)) {
                console.log(`Tie result, better luck next round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
        } else if ((humanChoice === rock && computerChoice === scissor)
        || (humanChoice === paper && computerChoice === rock)
        || (humanChoice === scissor && computerChoice === paper)) { 
                currentHumanScore = ++humanPoint;
                console.log(`You beat the computer! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
       } else if ((humanChoice === rock && computerChoice === paper)
        || (humanChoice === paper && computerChoice === scissor)
        || (humanChoice === scissor && computerChoice === rock)) {
                currentComputerScore = ++computerPoint;
                console.log(`You LOSE this round! The score is ${currentHumanScore} Human Player vs ${currentComputerScore} Computer Score`);
}
}

let currentRound = startingRound + humanPoint + computerPoint //Define variable for calculating current game round number 
