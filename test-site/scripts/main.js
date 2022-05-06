let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/math-image-one.png') {
    myImage.setAttribute ('src','images/ghost.gif');
  } else {
    myImage.setAttribute ('src','images/math-image-one.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your addition problem.');
    let numStr = myName.split('+');

    let num = numStr.map(noStr => +noStr);
    let initialVal = 0.0;

    let result = num.reduce((acc, no) => acc + no, initialVal);


    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', result);
      myHeading.innerHTML = 'All your numbers added up is, ' + result;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'All your numbers added up is, ' + console.log(eval(storedName));
  }
  
  myButton.onclick = function() {
    setUserName();
  }