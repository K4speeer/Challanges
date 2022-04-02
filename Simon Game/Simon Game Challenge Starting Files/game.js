var buttonColors = ["red", "green", "blue", "yellow"];
var buttonSounds = ["./sounds/red.mp3", "./sounds/green.mp3", "./sounds/blue.mp3", "./sounds/yellow.mp3"];

var gamePattern = [];
var playersPattern = [];

function nextSequance (){
  var randomNumber = Math.floor(Math.random()*4);
  var choosenColor = buttonColors[randomNumber];
  gamePattern.push(choosenColor);
  $("#"+choosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio (buttonSounds[randomNumber]);
  audio.play();
};

function playSounds (userChoosenColor){
  var audio = new Audio ("./sounds/" + userChoosenColor + ".mp3");
  audio.play();
};

function flashing (userChoosenColor){
  $("#"+userChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
};


$(".btn").click(function(){
  var userChoosenColor = this.getAttribute("id");
  playSounds(userChoosenColor);
  flashing(userChoosenColor);
  playersPattern.push(userChoosenColor);
});



