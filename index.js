/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let hour = str.split(":")[0];
  let hourInt = parseInt(hour, 10);
  if (hourInt < 12) {
    return "Good Morning"
  }
  else if (hourInt > 11 && hourInt < 18) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let h1 = document.getElementById("greeting");
  h1.innerText = `${str}`;
}
