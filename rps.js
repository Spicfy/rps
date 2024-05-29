const choices = ['r', 'p', 's'];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

const winner = document.getElementById("winner");

var human_score = 0;
var computer_score = 0;


function getHumanChoice(){
    valid = false;
    while(!valid){
        var human_choice = prompt("Enter your choice(r, p, s): ");
        if(human_choice =='r' || human_choice == 'p' || human_choice == 's'){
            valid = true;
        }
        else{
            console.log("Invalid choice. Please enter again");
        }
    }
    return human_choice;
}
function playGame(humanChoice){
    const choices = ['r', 'p', 's'];
    var num = Math.floor(Math.random()*3);
    var computerChoice;
    if(num == 0){
        computerChoice = 'r';
    }
    else if(num ==1){
        computerChoice = 'p';
    }
    else{
        computerChoice = 's';
    }
     if(humanChoice === computerChoice){
        console.log("It's a tie");
     }   
     else if((humanChoice == 'r' && computerChoice == 's') || (humanChoice == 's' && computerChoice =='p') || (humanChoice == 'p' && computerChoice == 'r')){
        console.log("Human wins");
        human_score++;
     }
     else{
        console.log("Computer wins");
        computer_score++;
     }
     if(computerChoice == 'r'){
        computerChoice = 'Rock';
     }
     else if(computerChoice == 'p'){
        computerChoice = 'Paper';
     }
     else{
        computerChoice = 'Scissors';
     }
     playerDisplay.textContent = `Player: ${humanChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
     resultDisplay.textContent = `Human score: ${human_score} Computer score: ${computer_score}`;
     if(human_score == 5){
        winner.textContent = "Human wins the game";
        human_score = 0;
        computer_score = 0;
    }

     else if(computer_score == 5){
        winner.textContent = "Computer wins the game";
        human_score = 0;
        computer_score = 0; 
    }
}

