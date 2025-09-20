
const url = "https://api.github.com/users/hiteshchoudhary"
const imgSrc = document.querySelector("img")
const userName = document.querySelector('.fetched-name')
const followers = document.querySelector('.followers')
const button = document.querySelector('.btn')




button.addEventListener('click', () => {
  // Creating the object of XMLHttpRequest
let xhr = new XMLHttpRequest()
xhr.open('GET' , url)
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 ) {
    let retruned_object =JSON.parse(xhr.responseText)
    console.log(retruned_object);
    imgSrc.src = retruned_object.avatar_url
    userName.innerHTML = retruned_object.name
    followers.innerHTML = retruned_object.followers
  }
  
}
xhr.send()
})