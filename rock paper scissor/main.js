//DOM Elements
let userScroe = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//functions

//compter choice function
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}
//converting the symblos 
function convertToWord(letter){
    if(letter == 'r') return 'Rock';
    if(letter == 'p') return 'Paper';
    return 'Scissors';
}
//win function
function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).fontcolor('red').sub();
    const smallCompWord = "computer".fontsize(3).fontcolor('red').sub();
    const userScore_div = document.getElementById(userChoice);
    
    userScroe++;
    userScore_span.innerHTML = userScroe;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord} , You Win..!!`;
    userScore_div.classList.add("green-glow");
    setInterval(function(){ userScore_div.classList.remove('green-glow') },1000);
}
//lose function
function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).fontcolor('red').sub();
    const smallCompWord = "computer".fontsize(3).fontcolor('red').sub();
    const userScore_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScroe;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallCompWord} , You Lost..!!`;
    userScore_div.classList.add("red-glow");
    setInterval(function(){ userScore_div.classList.remove('red-glow') },2000);
}
//draw function
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).fontcolor('red').sub();
    const smallCompWord = "computer".fontsize(3).fontcolor('red').sub();
    const userScore_div = document.getElementById(userChoice);

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(computerChoice)}${smallCompWord} , It's a Draw.`;
    userScore_div.classList.add("gray-glow");
    setInterval(function(){ userScore_div.classList.remove('gray-glow') },2000);
}
//combination the match
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
//add eventlistener
function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}
main();