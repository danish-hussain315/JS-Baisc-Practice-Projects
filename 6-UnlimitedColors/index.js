let intervalId 
document.querySelector("#start").addEventListener("click" , ()=>{
  intervalId = setInterval(()=>{
    document.body.style.transition = "all 0.5s ease"; // apply transition
    document.body.style.backgroundColor = randomColor();      // change property (triggers transition)

  } , 2000)
})

/* function randomColor(){
  let r = parseInt(Math.random() * 256)
  let g = parseInt(Math.random() * 256)
  let b = parseInt(Math.random() * 256)
  let rgb = `rgb(${r} ,${g} ,${b})`
  return rgb  
} */



function randomColor(){
  let totalHex = "0123456789ABCEF"
  let hexColor = "#"
  for(let i=0; i<6; i++){
    hexColor += totalHex[Math.floor(Math.random()*16)]
  } 
  return hexColor
}


document.querySelector("#stop").addEventListener("click" , ()=>{
  clearInterval(intervalId)
})