let computerChoice;      //Define variable for computer move choice
let humanChoice;         //Define variable for human move choice

let rock = "rock";      //Create variables naming each move as a string
let paper = "paper";
let scissor = "scissor";

/* Randomly generate computers move selection out of
the 3 move types - rock, paper, and scissor */

function getComputerChoice() {          
   let randomNumber = Math.random();
    if (randomNumber <= .33) {
    computerChoice = rock;
    } else if ((randomNumber > .33) && (randomNumber <  .66)) {
    computerChoice = paper;
    } else { 
    computerChoice = scissor;
    }
}


computerChoice = getComputerChoice() //Store computers move choice based on random move selection

/* Prompt human player for their move selection
Enter String of either R, P, or S */

humanChoice = prompt(`Enter your move for Rock Paper Scissors, enter R for Rock, P for Paper, and S for Scissors`);

