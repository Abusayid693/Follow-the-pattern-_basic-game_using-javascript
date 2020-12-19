// alert("hey");
// $("h1").css("color","purple");

var colours=["red","green","blue","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started= false;

  $(document).on("keydown",function() {
if(!started){
  nextSequence();
}
started=true;
  })









// handler function
$(".btn").on("click",function() {
  var userChosenColour= $(this).attr("id");
userClickedPattern.push(userChosenColour);
playMusic(userChosenColour);
anni(userChosenColour);
checkAnswer(userClickedPattern.length-1);


})

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){

    if (userClickedPattern.length===gamePattern.length){
      userClickedPattern=[];
      setTimeout(function(){
        nextSequence()
      },1000);
    }

  } else {
    var wrong="wrong";
    playMusic(wrong);
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Press any key to restart the game");
    restart();
  }
}




function nextSequence() {

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColor = colours[randomNumber];

  gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
var sound = randomChosenColor;
playMusic(sound);

level++;
$("h1").text("Level "+level);
}

// music function
function playMusic(name) {
  var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}
// button annimation
function anni(button) {
  $("."+button).addClass("pressed");
  setTimeout(function() {
      $("."+button).removeClass("pressed");
  },100);
}
//restart the gamePattern
function restart() {
  started =false;
  gamePattern=[];
  userClickedPattern=[];
  level=0;
}
