let computerChoice;      //Define variable to store computer move choice
let adjustedHumanChoice;

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


function getHumanChoice() {
    return humanChoice = prompt(`Enter your move for Rock Paper Scissors, type in Rock, Paper, or Scissors`);
    }

function adjustHumanChoice() {
    return adjustedHumanChoice = humanChoice.toLowerCase(); 
}

/*Gets Human Choice, converts to all lower case for validation, checks if answer is not rock, paper or scissors. 
If not, prompts again until valid answer has been entered*/

function askHumanChoice(){
    getHumanChoice()
    adjustHumanChoice()
}

function checkHumanChoice() {      
    while ((adjustedHumanChoice != rock) && (adjustedHumanChoice != paper) && (adjustedHumanChoice != scissors)) {   
        alert(`Entered move ${adjustedHumanChoice} is invalid, make sure to type rock, paper, or scissors only`)
        getHumanChoice()
        adjustHumanChoice()    
        };
}

function displayMoveChoices() {
console.log(`Computer chose ${computerChoice}. You chose ${humanChoice}.`);          //Display message with both move choices to user 
}

let humanPoint = 0;  
let computerPoint = 0;   //Start both players with 0 point count and store the point count 
let currentHumanScore;  //Store number calculating current Human score
let currentComputerScore;  //Store number calculating current Computer score

if ((currentHumanScore = `0`)|| (currentComputerScore = `0`)) {   //Set both starting scores to 0 
    let startingComputerScore = `0`;
    currentComputerScore = startingComputerScore;
    let startingHumanScore = `0`
    currentHumanScore = startingHumanScore
}


/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function showWinner(adjustedHumanChoice, computerChoice) { 
    if ((adjustedHumanChoice === rock && computerChoice === rock)
        || (adjustedHumanChoice === paper && computerChoice === paper)
        || (adjustedHumanChoice === scissors && computerChoice === scissors)) {
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
    askHumanChoice()
    checkHumanChoice()
    displayMoveChoices()
    showWinner(adjustedHumanChoice, computerChoice)
}


function playGame () {                                                  //Start five round game
    for (currentRound = 0; currentRound < 6; ++currentRound) {
        if (currentRound == 6) {
          continue;
        }
    playRound()
    } 
}

playGame()
console.log(`GAME COMPLETE - Score is ${currentHumanScore} Human Player to ${currentComputerScore} Computer Player. Great job`)
