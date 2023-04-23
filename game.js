const buttonColors = ["red","blue", "green","yellow"];
const gamePattern = [];
const userClickedPattern = [];
$(".btn").on("click", function (){
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 
   playSound(userChosenColour);
   animatePress(userChosenColour);
})

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
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