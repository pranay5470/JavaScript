let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg  = document.querySelector("#msg")
const userScroePara = document.querySelector("#user-score")
const comprScroePara = document.querySelector("#comp-score")

const genCompChoice =()=>{
    const options = ["rock","paper","scissor"]
    const randomIndx = Math.floor(Math.random()*3)
    return options[randomIndx];
}

const drawGame = ()=>{
    console.log("Game Was Draw..!!")
    msg.innerHTML = "Game Was Draw..!!"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("You win..!!")
        userScore++;
        console.log("user score : ",userScore)
        userScroePara.innerHTML = userScore;
     
        msg.innerHTML = `You win..!! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        console.log("You lose..!!")
        compScore++;
        console.log("comp score :",compScore)
        comprScroePara.innerHTML = compScore;
       
        msg.innerHTML = `You lose..!! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame =(userChoice)=>{
    console.log("User choice = ",userChoice);
    //Generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice==="paper"? false:true
        }else if(userChoice === "paper"){
            //rock ,scissor
            userWin = compChoice === "scissor"?false:true
        }else{
            //rock ,paper
            userWin = compChoice === "rock"?false:true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{    
    const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})