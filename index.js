/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  const currentTime = parseInt(time, 10);
    if (currentTime < 12)
      return 'Good Morning'
    else if (currentTime > 17)
      return 'Good Evening'
    else
      return 'Good Afternoon'

}

function displayMessage(string){
  document.getElementById('greeting').innerText = string
}
