/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let arr = time.split(":");
  arr[0] = parseInt(arr[0], 10)
  let greeting;

  if (arr[0] >= 0 && arr[0] < 12){
    greeting = "Good Morning";
  } else if (arr[0] >= 12 && arr[0] < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening"
  }

  return greeting
}

function displayMessage(string) {
  greeting = document.getElementById('greeting');
  greeting.innerText = string;
}