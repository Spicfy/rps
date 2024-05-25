console.log("Hello World");
var human_score = 0;
var computer_score = 0;
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    var num = Math.floor(Math.random()*3);
    if(num == 0){
        return 'r';
    }
    else if(num ==1){
        return 'p';
    }
    else{
        return 's';
    }
}

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
function playRound(humanChoice, computerChoice){
     if(humanChoice == computerChoice){
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
}
function playGame(){
    human_score = 0;
    computer_score = 0;
    for(var i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Human score: " + human_score);
    console.log("Computer score: " + computer_score);
    if(human_score > computer_score){
        console.log("Human wins the game");
    }
    else if(human_score < computer_score){
        console.log("Computer wins the game");
    }
    else{
        console.log("It's a tie");
    }
}
playGame();
