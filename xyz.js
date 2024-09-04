let buttons = document.querySelectorAll(".btn1");
let userChoice = "";
let compChoice = "";

let userScore = document.querySelector("#user-score");
let x = 0;
let compScore = document.querySelector("#comp-score");
let y = 0;

buttons.forEach((b) => {
    b.addEventListener("click",(evt) =>{
        userChoice = b.innerText;
        compChoice = computerChoice();
        showChoice(userChoice, compChoice);
        checkWinner(userChoice, compChoice);
    })
});

function computerChoice(){
    const choices = ["Stone", "Paper","Scissor"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

    // displaying the images of their choices
let userImage = document.querySelector("#user");
let compImage = document.querySelector("#comp");

function showChoice(x,y){
    if(x === "Stone"){
        userImage.style.backgroundImage = "url('/images/rock.png')";    }
    else if(x === "Paper"){
        userImage.style.backgroundImage = "url('/images/paper.png')";    }
    else{
        userImage.style.backgroundImage = "url('/images/scissors.png')";    }

    if(y === "Stone"){
        compImage.style.backgroundImage = "url('/images/rock.png')";    }
    else if(y === "Paper"){
        compImage.style.backgroundImage = "url('/images/paper.png')";    }
    else{
        compImage.style.backgroundImage = "url('/images/scissors.png')";    }
}


//      Checking who is Winner
let usermsg = document.querySelector("#win-msg");
let compmsg = document.querySelector("#win-sms");     
function checkWinner(user,comp){
    usermsg.innerText = `You choose ${user}`;
    compmsg.innerText = `Comp choose ${comp}`;
    if(user === comp){
        draw();
    } else{
        let userWin= true;
        if(user === "Stone"){
            userWin = comp === "Paper" ? false : true;
        } else if(user === "Paper"){
            userWin = comp === "Scissor" ? false : true;
        } else{
            userWin = comp === "Stone" ? false : true;
        }
        showWinner(userWin);
    }
}

//      Showing Winner
let userwinmsg = document.querySelector("#userwin");  
function showWinner(userWin){
    if(userWin){
        userwinmsg.style.color = "green";
        userwinmsg.innerText = "You win";
        x++;
    }
    else{
        userwinmsg.style.color = "red";
        userwinmsg.innerText = "You lose";
        y++;
    }
    userScore.innerText = x;
    compScore.innerText = y;
}

//      Draw Case
function draw(){
    userwinmsg.style.color = "black";
    userwinmsg.innerText = "Match Drawn !!!";
}

let newGame = document.querySelector("#new-game");
newGame.addEventListener(("click"), ()=>{
    userScore.innerText = "0";
    compScore.innerText = "0";
    x=0;
    y=0;
    usermsg.innerText = "";
    compmsg.innerText = "";
    userwinmsg.innerText = "";
    userImage.style.backgroundImage = "url('')";
    compImage.style.backgroundImage = "url('')";
    
})


