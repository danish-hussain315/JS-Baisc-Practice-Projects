randomNumber = Math.random()
checkGuess()
function checkGuess(guess = 10){
  console.log('welocome to the checkGuess');
  console.log(guess + randomNumber);
  

  if(guess == randomNumber){
    displayMessage(`You Guessed it write`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Given Number is less than Original Number`)
  }else if(guess > randomNumber){
    displayMessage(`Given Number is greater than Original Number`)
  }
}
function displayMessage(message){
  console.log("Display message called");
}