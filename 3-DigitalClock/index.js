
// const date = new Date()
// console.log(date.toLocaleTimeString());


const clock = document.querySelector("#clock")

setInterval(function(){
  // console.log(date.toLocaleTimeString());
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)