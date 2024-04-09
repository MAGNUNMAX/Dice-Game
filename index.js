
console.log("Running");
const imag1 = document.querySelector('.img1');
const imag2 = document.querySelector('.img2');
const boton = document.getElementById('boton');
function game(){
  let pl1 = 'Player 1 wins!';
  let pl2 = 'Computer wins!';
  let draw = 'Draw!';

  let randomNumber1 = Math.floor(Math.random() * 6 );
  //let randomNumber2 = Math.floor(Math.random() * 6 );
  

  let images = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];
  imag1.setAttribute('src', images[randomNumber1]);
  imag2.setAttribute('src', images[randomNumber2]);

  if(randomNumber1 === randomNumber2){
    document.querySelector('h1').textContent = draw;
  }else
  if(randomNumber1 > randomNumber2){
    document.querySelector('h1').textContent = pl1;
  }else{
    document.querySelector('h1').textContent = pl2;
  };

};

boton.addEventListener('click',game);


/*
var randomNumber = Math.floor(Math.random()*6) +1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "image/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAtribute('scr',randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImageSource2 = "images/dice" +randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAtribute('src', randomImageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
*/