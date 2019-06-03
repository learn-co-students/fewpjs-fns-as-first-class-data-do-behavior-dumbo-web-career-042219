/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeInput) {

const theTime = parseInt(timeInput, 10);
	if ( theTime < 12 ) return "Good Morning"
	if ( theTime > 12 && theTime < 17 ) return "Good Afternoon"
	if ( theTime > 17 ) return "Good Evening"
}

/* Write your implementation of greet() */

function displayMessage(string) {
document.getElementById("greeting").innerText = string
}


/* Write your implementation of displayMessage() */
