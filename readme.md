Rock Paper Scissors Project

Author: Jake Marlowe 
Date: 9/28/2024

This is a project to test basic javascript knowledge by building a command line based rock paper scissors game.

Plan: Create a rock paper scissors game vs a computer player. Computer player will randomly choose its' move each round. The game will go for five rounds and keep a score count for both players. A winner will be displayed after round 5. Prompt user if they want to reset the game to play again at the end of the final round.

Needed inputs: 3 Move types [Rock, paper, and scissor], Computers choice of move, Humans choice of move using a prompt, score data - human and computer, Score is calculated by winner per round. 5 Total rounds

Desired Output: Score is calculated each round and tracked separately for human score and computer score. Game ends at 5 rounds. Winner is declared at end of game.

Pseudocode: 

#SETUP Moves
Store move for computer player and human computer as a string variable 
Store a string variable for computers move choice

#SETUP Computer Move Selection
Randomly generate computers move selection from the three options

#SETUP User Move Selection
Store string variable for humans move choice using prompt that 
asks for 1 of 3 move types 'rock', 'paper', and 'scissor'. 
Enter R for Rock, Enter P for Paper, Enter S for scissor

#SETUP Move Authentication Check
Check that the move entered by human is valid move and if not prompt again until valid move has been entered

#SETUP Method comparing move choice inputs for human vs computer, output winner of round
Create logic accounting for all possible move outcomes for both players (Tie, Loss, and Win scenarios)

#SETUP Scorekeeping Syste
When Human wins store human score in integer variable starting at 0, increment by 1 for each win.
When Computer wins store computer score in integer variable starting at 0 for the computer score, increment by 1 for each win

#SETUP Roundkeeping system
Count the round number at an integer variable starting at 0 
At end of round display all scores and the new round number EXCEPT after final round display "Final Round" as round number
Assign score to winner
Stop the game after round five

#SETUP Final outcome message
Display final round score to user and message based on victory loss or tie

#SETUP Game restart prompt
Display prompt to user asking if they would like to restart the game  
