console.log("Hello");
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
level = 0;
//Required Functions

function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function() {
        $("."+currentColour).removeClass("pressed");
    },100);
}

function nextSequence(){
    $("h1").text("Level "+level);
    level++;
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    randomButton = $("#"+randomChosenColour);
    randomButton.fadeOut(80).fadeIn(80);
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel){

}

//On click

$(".btn").click(function(event){
    var userChosenColour = event.target.className.split(" ")[1];
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})

//Start the game
$("body").keypress(nextSequence);
