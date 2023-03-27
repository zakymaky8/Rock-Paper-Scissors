/*
let options=["rock", "paper", "scissors"];
let computerSelection=options[Math.floor(Math.random()*3)];
let computerCount=0;
let playerCount=0;
for (i=0; i<Infinity; i++) {
     let playerSelecetion=prompt().toLowerCase();
     let computerSelection=options[Math.floor(Math.random()*3)]
     console.log(`The computer selected: %c ${computerSelection}`,"font-size: 16pt; color: green;")
     console.log(`You selected: %c ${playerSelecetion}`,"font-size: 13pt; color: green;")
     if (computerSelection===playerSelecetion) {
          console.log(`%c It is Tie`, "color: black;");
     }
     else if (computerCount==5|| playerCount==5) {
          break;
      }
     else if (
          (computerSelection=="rock" && playerSelecetion=="paper")||
          (computerSelection=="paper" && playerSelecetion=="scissors") ||
          (computerSelection=="scissors" && playerSelecetion=="rock")
      ){
          console.log(`%cYou Won ${playerSelecetion} beats ${computerSelection}`, "color: green;");
          playerCount+=1;
      }
      else if (
          (computerSelection=="paper" && playerSelecetion=="rock")||
          (computerSelection=="rock" && playerSelecetion=="scissors") ||
          (computerSelection=="scissors" && playerSelecetion=="paper")
      ) {
          console.log(`%cYou Lose ${computerSelection} beats ${playerSelecetion}`, "color: red;");
          computerCount+=1;
      }
      else {
          console.log(`%c invalid input`, "font-size:25pt; color: lightblue");
      } 
}
console.log(`%c You: ${playerCount}`, "font-size: 22pt;color: black;");
console.log(`%c Computer: ${computerCount}`, "font-size:22pt;color: black;")
if (computerCount>playerCount) {
     console.log(`%c You Lose!`," font-size: 20pt;color: red;")
}
else if (computerCount<playerCount) {
     console.log(`%c You Won!`, "font-size: 20pt; color:aqua;");
}
*/
          

// with some functions involved




let playerCount=0;
let computerCount=0;
function getComputerChoice() {
     options=["rock", "paper", "scissors"];
     let computerSelection=options[Math.floor(Math.random()*3)];
     return computerSelection;
}
function playRound(playerSelecetion,computerSelection) {
     if (computerSelection===playerSelecetion) {
          message =`It is Tie ${computerSelection} and ${playerSelecetion} are selected from both sides`;
          return message;
     }
     else if (
          (computerSelection=="rock" && playerSelecetion=="paper")||
          (computerSelection=="paper" && playerSelecetion=="scissors") ||
          (computerSelection=="scissors" && playerSelecetion=="rock")
      ){
          message =`You Won! ${playerSelecetion} beats ${computerSelection}`;
          playerCount+=1;
          return message;
      }
      else if (
          (computerSelection=="paper" && playerSelecetion=="rock")||
          (computerSelection=="rock" && playerSelecetion=="scissors") ||
          (computerSelection=="scissors" && playerSelecetion=="paper")
      ) {
          message =`You Lose! ${computerSelection} beats ${playerSelecetion}`;
          computerCount+=1;
          return message;
      }
      else {
          message=`Invalid input`;
          return message;
      } 
}
function game() {
     for (i=0;i<Infinity; i++) {
          let playerSelecetion = prompt("choose rock, paper, or scissors").toLowerCase();
          let computerSelection = getComputerChoice();
          console.log(`you selected: ${playerSelecetion}`)
          console.log(`computer selected: ${computerSelection}`)
          console.log(`%c ${playRound(playerSelecetion, computerSelection)}`, "color:green");
          console.log(`Tentative score: player ${playerCount} - ${computerCount} computer`)
          if (playerCount==5 || computerCount==5) {
               break;
          }
     }
}
game()
console.log(`%c computer: ${computerCount}`, "font-size: 15pt;color: darkblue")
console.log(`%c you: ${playerCount}`,"font-size: 15pt;color: darkblue")
if (playerCount>computerCount) {
     console.log("%c You Won!", "font-size: 20pt;color: blue");
}
else if (playerCount<computerCount) {
     console.log("%c You Lose!", "font-size: 20pt;color: red");
}
else {
     console.log("%c Draw", "font-size: 20pt;color: aqua;")
}