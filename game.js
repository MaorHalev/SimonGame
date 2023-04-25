const buttonColors = ["red","blue", "green","yellow"];
let gamePattern = [];
let userClickedPattern = [];
let firstClick = true;
let level = 0;
$(document).on("keydown", function (){
    if(firstClick)
    {
        $("h1").text("Level " + level);
        nextSequence();
        firstClick = false;
    }
})

$(".btn").on("click", function (){
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
})

function nextSequence(){
    userClickedPattern.length = 0   ;
    level++;
    $("h1").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);    
}


function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function () {
            nextSequence();
              }, 1000);
        }
    }
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        },200);
        $("h1").text("Game Over, Press Any Key To Restart");
        console.log("Wrong");
        startOver();
    }

}

function startOver()
{
    level = 0;
    gamePattern = [];
    firstClick = true;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
$("." + currentColour).addClass("pressed");
setTimeout(function() {
    $("." + currentColour).removeClass("pressed")
  }, 100);
}