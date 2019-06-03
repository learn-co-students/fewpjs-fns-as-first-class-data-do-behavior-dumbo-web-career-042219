/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time){
  let thisTime = time.split(':')
  let currentTime = parseInt(thisTime[0], 10)
  let greeting;

  if (currentTime < 12){
    greeting = "Good Morning"}
    else if (currentTime > 12 && currentTime < 17){
      greeting = "Good Afternoon"}
      else if (currentTime > 12) {
        greeting = "Good Evening"}

          return greeting
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
greeting = document.getElementById('greeting')
greeting.innerText = string
}
