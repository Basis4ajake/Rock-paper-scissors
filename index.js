let computerChoice;      //Define variable to store computer move choice
let humanChoice;
let computerPoint = 0;
let humanPoint = 0;

const rock = "rock";      //Create variables naming each move as a string
const paper = "paper";
const scissors = "scissors";

const body = document.querySelector("body")
body.setAttribute("style", "display:flex; justify-content: center; align-items: center; flex-flow: column; height: 35rem;")


const container = document.querySelector(".container")
container.setAttribute("style", "display: flex; justify-content: center; align-items: center; flex-flow: column;")

const rockChoice = document.querySelector(".rock.btn")
const paperChoice = document.querySelector('.paper.btn')
const scissorsChoice = document.querySelector('.scissor.btn')
const results = document.querySelector('.results')

const scoreCount = document.createElement("div")
scoreCount.classList.toggle("scoreCount");
scoreCount.textContent = `Your score is ` + humanPoint + ` and the computer score is ` + computerPoint + `!`;
results.append(scoreCount);




container.addEventListener("click", (move) => {
    let target = move.target;

    switch(target.id) {
        case 'rock':
            humanChoice = rock;
            console.log(humanChoice)
            playRound()
       break;
        case 'paper':
            humanChoice = paper;
            console.log(humanChoice)
            playRound()
        break;
        case 'scissors':
            humanChoice = scissors;
            console.log(humanChoice)
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

function showMoves() {
    theMoves.textContent = `Your move is ${humanChoice} and the computers move is ${computerChoice}`;
}

/* Compare the move choices of both players to determine winner of the 
current round. Rules for the outcome are that paper beats rock, rock beats
scissors, and scissors beats paper */

function showWinner(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        scoreCount.textContent = `Tie result, better luck next round! The score is ${humanPoint} Human Player vs ${computerPoint} Computer Score`;
        } else if ((humanChoice === rock && computerChoice === scissors)
        || (humanChoice === paper && computerChoice === rock)
        || (humanChoice === scissors && computerChoice === paper)) { 
                humanPoint = ++humanPoint;
                scoreCount.textContent = `You beat the computer! The score is ${humanPoint} Human Player vs ${computerPoint} Computer Score`;
       } else if ((humanChoice === rock && computerChoice === paper)
        || (humanChoice === paper && computerChoice === scissors)
        || (humanChoice === scissors && computerChoice === rock)) {
                computerPoint = ++computerPoint;
                scoreCount.textContent = `You LOSE this round! The score is ${humanPoint} Human Player vs ${computerPoint} Computer Score`;
}
}


function playRound() {     //Create function to call start a round
    getComputerChoice()
    showMoves()
    showWinner(humanChoice, computerChoice)
    for (let i = 0; i < 5; i++){
        let totalPoints = computerPoint + humanPoint;
        if (totalPoints === 5){
                if (humanPoint > computerPoint) {
                    let amountCrushedBy = humanPoint - computerPoint;
                    alert(`You WIN!!! OH YEAH!!! You won by ${amountCrushedBy} points`)
                } else { 
                    amountCrushedBy = computerPoint - humanPoint;
                    alert(`YOU LOSE, GOOD DAY SIR! Crushed by a whopping ${amountCrushedBy} points`)
                }
            humanPoint = 0;
            computerPoint = 0;
            i = 0;
        }
    }
}

const theMoves = document.createElement("p")
theMoves.classList.toggle("theMoves")
results.append(theMoves)



