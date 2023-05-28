var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence() {
    var randomNumber = Math.round((Math.random())*3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // let beat = new Audio('./sounds/'+randomChosenColour+".mp3");
    // beat.play();
    // console.log(gamePattern);
    //To detect which button is pressed
    var level = "Level " + 0;
    var lastChar = level[level.length -1];
    $("#level-title").text("Level " + 0)
    
}

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$("body").one("keypress", function () {
    nextSequence();
});


