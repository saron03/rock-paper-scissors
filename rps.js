const body = document.querySelector("body");

const rock = document.querySelector(".rock");
const paper= document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const topic = document.createElement("div");

const htopic = document.createElement("p");
htopic.textContent = "Human";
const ctopic = document.createElement("p");
ctopic.textContent = "Computer";
topic.appendChild(htopic);
topic.appendChild(ctopic);
body.appendChild(topic);

topic.style.cssText="display: flex; justify-content: center; gap: 5%; margin: 0 auto; text-align: center;";
htopic.style.cssText="margin-right: 15px;";
ctopic.style.cssText ="margin-left:40px;";

const scores = document.createElement("div");

const Human = document.createElement("div");
const Computer = document.createElement("div");
Human.classList.add("score-board");
Computer.classList.add("score-board");
scores.appendChild(Human);
scores.appendChild(Computer);
body.appendChild(scores);

scores.style.cssText = "display: flex; justify-content:center; alignitems:center;  margin-top: 0px; margin-bottom: 25px; gap: 5%;";


document.querySelectorAll('.score-board').forEach(element => {
    element.style.cssText = "background-color: lightblue; color: black; padding: 5px; width:90px; text-align:center; border-radius:5px; height: 20px;";
});

const update = document.createElement("div");
update.classList.add("score");
update.style.cssText="background-color: lightblue; color:black; margin: 0 auto; padding: 5px; width:350px; text-align:center; border-radius:5px; height: 20px;";
body.appendChild(update);
update.textContent = "";

const againContainer = document.createElement("div");
againContainer.style.cssText = "display: flex; justify-content: center; margin-top: 20px;";
body.appendChild(againContainer);

const again = document.createElement("button");
again.textContent = "Play Again";
again.style.cssText = "background: none; color: white;border-radius: 5px; height: 28px; width: 85px;";
again.classList.add("again");
againContainer.appendChild(again);




const btns = document.querySelectorAll(".rock,.paper, .scissors");
let humanChoice;
btns.forEach(btn => {
    btn.addEventListener("click", function () {
            if (btn.classList.contains("rock")) {
                humanChoice= "rock";
            } else if (btn.classList.contains("paper")) {
                humanChoice = "paper";
            } else if (btn.classList.contains("scissors")){
                humanChoice = "scissors";
            } 
            if (humanScore < 5 && computerScore < 5) {
                playRound(humanChoice, getComputerChoice());
                if (humanScore === 5 || computerScore === 5) {
                    if (humanScore > computerScore) {
                        update.textContent = "Congratulations! You win this round!";
                    } else if (humanScore < computerScore) {
                        update.textContent = "Computer wins this round! Better luck next time.";
                    } else {
                        update.textContent = "It's a draw!";
                    }
                    again.style.display = 'block';
            } 
        }
    });
});

again.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    humanChoices = []; 
    computerChoices = []; 
    Human.textContent = humanScore;
    Computer.textContent = computerScore;
    update.textContent = "";
});


function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.33){
        return "rock";
    }
    else if( choice < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
Human.textContent = humanScore;
Computer.textContent = computerScore;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "paper"){
        if (computerChoice === "paper"){
            update.textContent = "It's a tie!";
            humanScore +=1;
    
        }
        else if  (computerChoice === "rock"){
            update.textContent= "You get a point! Paper beats Rock!";
            humanScore += 1;
        }
        else{
            update.textContent = "Computer gets a point! Scissors beat Paper!";
            computerScore +=1;

        }
    }
    else if (humanChoice === "rock") {
        if (computerChoice ==="paper"){
            update.textContent= "Computer gets a point!Paper beats Rock";
            computerScore +=1;
        }
        else if  (computerChoice === "rock"){
            update.textContent = "It's a tie!";

        }
        else{
            update.textContent= "You get a point! Rock beats Scissors!";
            humanScore +=1;
        }
    }
    else if(humanChoice === "scissors"){
        if (computerChoice === "paper"){
            update.textContent = "You get a point!Scissors beat Paper!";
            humanScore +=1;
        }
        else if  (computerChoice === "rock"){
            update.textContent = "Computer gets a point!Rock beats Scissors";
            computerScore +=1;
        }
        else{
            update.textContent("It's a tie");
        }
    }
    Human.textContent = humanScore;
    Computer.textContent = computerScore;
}
