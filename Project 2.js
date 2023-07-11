// const Rock = document.querySelector('.rock');
// const Paper = document.querySelector('.paper');
// const Scissor = document.querySelector('.scissors');


// const score = document.querySelector('.score');

// 
// 
// const body = document.querySelector('body');
// selected.addEventListener("click", result);
// function responeToClick(){
//   let userChoice = "Rock,Paper,or Scissors?";
  
//   let computer = 0;
//   console.log(random);
//   if (userChoice=="Rock" && computer=="Paper"){
//     p.textContent="You Lose!";
//     count++
//     body.appendChild(result);
//   }
//   if (userChoice=="Paper" && computer=="Scissors"){
//     p.textContent="You Lose!";
//     lose++
//     body.appendChild(result);
//   }
//   if (userChoice=="Scissors" && computer=="Rock"){
//     p.textContent="You Lose!";
//     lose++
//     body.appendChild(result);
//   }
//   if(userChoice=="Rock" && computer=="Scissors"){
//     p.textContent="You Win!";
//     lose++
//     body.appendChild(result);
//   }
//   if(userChoice=="Scissors" && computer=="Paper"){
//     p.textContent="You Win!";
//     win++
//     body.appendChild(result);
//   }
//   if(userChoice=="Paper" && computer=="Rock"){
//     p.textContent="You Win!";
//     win++
//     body.appendChild(result);
//   } 
//   if (userChoice == computer){
//     p.textContent="Tie!";
//     tie++
//     body.appendChild(result);
//   }
// }
let win = 0;
let lose = 0;
let tie = 0;
const result = document.querySelector('#outcome');
const selected = document.querySelector(".rock");
const next = document.querySelector(".paper");
const last = document.querySelector(".scissors");
const winsEl = document.querySelector("#Wins");
const lossesEl = document.querySelector("#Losses");
const tiesEl = document.querySelector("#Ties");
function computerChoose(){
    const cpu = ['rock','paper','scissors'];
    let random = Math.floor(Math.random() * 3 );
    return cpu[random];
}
selected.addEventListener('click', function(){
    let userChoice = "rock"
    let computerChoice = computerChoose();
    if(userChoice == computerChoice){
        result.innerHTML="Tie";
        tie++;
        tiesEl.innerHTML = tie;
    }
    if(computerChoice == 'paper'){
        result.innerHTML="You Lose!";
        lose++;
        lossesEl.innerHTML = lose;    
    }
    if(computerChoice == 'scissors'){
        result.innerHTML="You Win!";
        win++;
        winsEl.innerHTML = win;
    }
});

next.addEventListener('click', function(){
    let userChoice = "paper"
    let computerChoice = computerChoose();
    if(userChoice == computerChoice){
        result.innerHTML="Tie";
        tie++;
        tiesEl.innerHTML = tie;
    }
    if(computerChoice == 'scissors'){
        result.innerHTML="You Lose!";
        lose++;
        lossesEl.innerHTML = lose;    
    }
    if(computerChoice == 'rock'){
        result.innerHTML="You Win!";
        win++;
        winsEl.innerHTML = win;
    }
});
last.addEventListener('click', function(){
    let userChoice = "scissors"
    let computerChoice = computerChoose();
    if(userChoice == computerChoice){
        result.innerHTML="Tie";
        tie++;
        tiesEl.innerHTML = tie;
    }
    if(computerChoice == 'rock'){
        result.innerHTML="You Lose!";
        lose++;
        lossesEl.innerHTML = lose;    
    }
    if(computerChoice == 'paper'){
        result.innerHTML="You Win!";
        win++;
        winsEl.innerHTML = win;
    }
});
