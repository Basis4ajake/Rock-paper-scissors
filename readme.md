Rock Paper Scissors Project

Author: Jake Marlowe 
Date: 9/28/2024

This is a project to test basic javascript knowledge by building a command line based rock paper scissors game.

Plan: Create a rock paper scissors game vs a computer player. Computer player will randomly choose its' move each round. The game will go for five rounds and keep a score count for both players. A winner will be displayed after round 5. Prompt user if they want to reset the game to play again at the end of the final round.

Needed inputs: 3 Move types [Rock, paper, and scissor], Computers choice of move, Humans choice of move using a prompt, score data - human and computer, Score is calculated by winner per round. 5 Total rounds

Desired Output: Score is calculated each round and tracked separately for human score and computer score. Game ends at 5 rounds. Winner is declared at end of game.

Pseudocode: 

Store move as a string variable 
Store a string variable for computers move choice
Randomly generate computers move selection from the three options
Store string variable for humans move choice using prompt that 
asks for 1 of 3 move types 'rock', 'paper', and 'scissor'. 
Enter R for Rock, Enter P for Paper, Enter S for scissor
Compare move choices of human vs computer to determine winner of current round - Paper beats rock, Rock beats Scissors, Scissors beats paper
When Human wins store human score in integer variable starting at 0, increment by 1 for each win.
When Computer wins store computer score in integer variable starting at 0 for the computer score, increment by 1 for each win
Count the round number at an integer variable starting at 0 
At end of round display all scores and the new round number EXCEPT after final round display "Final Round" as round number
Assign score to winner
Stop the game after round five
Display final round score to user and message ba
Display prompt to user asking if they would like to restart the game  
