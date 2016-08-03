var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (!myName) {
  	setUserName();  
  }
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

while(!localStorage.getItem('name')) {
  setUserName();
}
var storedName = localStorage.getItem('name');
myHeading.innerHTML = 'Mozilla is cool, ' + storedName;


myButton.onclick = function() {
  setUserName();
}
