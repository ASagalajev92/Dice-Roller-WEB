
var image1 = document.querySelectorAll(".img")[0];
var image2 = document.querySelectorAll(".img")[1];

var buttonArray = document.querySelectorAll(".btn");

//-----    Loop for multiple clicks   -----//
for (var i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', diceRolling);
}

//-----   Random with min and max ranges   -----//
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

//-----    Dice rolling   -----//
function diceRolling() {
  //variant 1
  // image1.src = "images/dice" + randomNumber1 + ".png";
  //variant 2

  //-----    Random numbers for our dice images   -----//
  var randomNumber1 = getRandom(1, 6);
  var randomNumber2 = getRandom(1, 6);

  image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉Player 1 Won 🎉";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉Player 2 Won 🎉";
  } else {
    document.querySelector("h1").innerHTML = "🤝 It is Draw 🤝";
  }
}
