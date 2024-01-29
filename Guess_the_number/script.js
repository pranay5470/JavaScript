let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.guessResult')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess<1){
    alert('Please enter more than 1');
  }else if(guess>100){
    alert('Please enter a number less than 100');
  }else{
    prevGuess.push(guess);
    if(prevGuess.length === 11){
        displayGuess(guess);
        displayMessage(`Guess Over . Random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is Tooo low`)
    }else if(guess>randomNumber){
        displayMessage(`You guessed Tooooo high`)
    }
}

function displayGuess(guess){
    userInput.value ='';
    guesSlot.innerText(`${guess},`)
    numGuess++;
    remaining.innerText(11-numGuess)
}

function displayMessage(message){
    lowOrHi.innerText = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerText = `<h2 id="newGame" >Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e){
        randomNumber = parseInt(M.random()*100 + 1)
        prevGuess=[]
        numGuess = 1;
        guesSlot.innerText = ''
        remaining.innerText = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
