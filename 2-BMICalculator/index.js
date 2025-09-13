const timeStamp =  Date.now()
const date = new Date(timeStamp)
console.log(date.toString());


const form = document.querySelector("form")
form.addEventListener('submit', function(e){
  e.preventDefault()
  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  console.log(height + weight);
  const result = document.querySelector('#results')
  result.innerHTML = (weight / ((height*height) / 10000)).toFixed(3)
  
})