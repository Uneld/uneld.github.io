var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/boundary.jpeg'){
        myImage.setAttribute('src', 'images/img2.jpg');
    } else {
        myImage.setAttribute('src', 'images/boundary.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName(){
    var myName = prompt('Please enter you name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Are you ready to play, ' + myName;
}


var storedName = localStorage.getItem('name')
if (!storedName){
    setUserName();
} else {
    myHeading.textContent = 'Are you ready to play, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}