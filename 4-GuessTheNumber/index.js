const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const previousGuessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let randomNumber = parseInt(Math.random() * 100 +1 )
console.log(randomNumber);


let prevGuess = []
let guessTimes =0
let playGame = true

if(playGame){  
  console.log("Value of playGame : ", playGame);
  
  submit.addEventListener('click' , function(eventObject){
  eventObject.preventDefault()
  let currentGuess = parseInt(userInput.value)
  inputValidationForNumberConformation(currentGuess)
  
})
}

function inputValidationForNumberConformation(currentNumber){
  if(currentNumber < 1 ){
    alert("Number Must be greater than the 1")
  }else if( currentNumber > 100){
    alert("Number Must be less than the 100")
  }else if (isNaN(currentNumber)){
    alert("Please Enter Valid Number ")
  }else{
    prevGuess.push(currentNumber)
    if(guessTimes === 10){
      // displayGuess(currentNumber)
      displayMessage(`Game Over. Guess Number was ${randomNumber}`)
      endGame()
    }else if(guessTimes <= 9){       
      checkGuess(currentNumber)
      displayGuess(currentNumber)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Guessed it write`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Given Number is less than Original Number`)
  }else if(guess > randomNumber){
    displayMessage(`Given Number is greater than Original Number`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  previousGuessSlot.innerHTML = previousGuessSlot.innerHTML +  `${guess} `
  remaining.innerHTML = `${10- (++guessTimes)}`   
}
function displayMessage(message){  
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userInput.value = ""
  userInput.setAttribute('disabled', true)
  p.classList.add("button")
  p.innerHTML = "<h2 id='new-game'>Start New Game</h2>"
  startOver.appendChild(p)
  playGame=false
  newGame()
}


function newGame(){
  const newGameButton = document.querySelector('#new-game')
  newGameButton.addEventListener('click', function(eventObject){
    randomNumber = parseInt(Math.random() * 100 +1 )
    console.log(randomNumber);
    
    previousGuessSlot.innerHTML =''
    guessTimes=0
    remaining.innerHTML = `${11- (++guessTimes)}` 
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

