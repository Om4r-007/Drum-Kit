var number0fdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < number0fdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    buttonAnimation (buttoninnerhtml)
  });
}

document.addEventListener("keydown", function (e) {
  var keyboard = e.key;
  makesound(keyboard);
  buttonAnimation (keyboard)
});

function makesound(ok) {
  switch (ok) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(ok);
      break;
  }
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed") ;
  setTimeout (function () {
    activeButton.classList.remove("pressed");
  } , 100 );
}
