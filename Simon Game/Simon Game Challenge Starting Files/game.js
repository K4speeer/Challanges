var buttonColors = ["red", "blue", "green", "yellow"]; 

var gamePattern = [];



function nextSequance (){
  var randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}

var randomChosenColor = buttonColors[nextSequance];
gamePattern.push(randomChosenColor);