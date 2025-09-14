const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const previousGuessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

let randomNumber = parseInt(Math.random() * 100 +1 )
console.log(randomNumber);


let prevGuess = []
let guessTimes =1
let playGame = true

if(playGame){
  console.log("Welcom to the IF condition");
  
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
    if(guessTimes === 11){
      displayGuess(currentNumber)
      displayMessage(`Game Over. Guess Number was ${randomNumber}`)
      endGame()
    }else{

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
  guessTimes++ 
  remaining.innerHTML = `${11-guessTimes}`

}
function displayMessage(message){  
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  // playGame = false
}
