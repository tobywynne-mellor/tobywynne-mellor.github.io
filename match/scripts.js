var audio = new Audio('music.mp3');    
function splashscreens(){
  setTimeout(function(){
    displayNone(document.querySelector('.black'));
  }, 1000);

  setTimeout(function(){
    displayNone(document.querySelector('.splash'));
  }, 2500)
  
  const startButton = document.querySelector('.startButton');
  startButton.addEventListener('click', function(){
    document.querySelector('.startButton').style.transform = 'scale(0)';
    displayNone(document.querySelector('.splash2'));
    audio.loop = true;
    audio.play();
  });
} 

splashscreens();
// skip();
function displayNone(elem){
  elem.style.opacity = 0;
  setTimeout(function(){
    elem.style.display = "none";
  },1000)
}

function skip(){
  displayNone(document.querySelector('.black'));
  displayNone(document.querySelector('.splash'));
  displayNone(document.querySelector('.splash2'));
}

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}
for(i = 0; i <= 100; i++){
  create(i);
}

var yip = new Audio('yippee.mp3');
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  if(isMatch){
    for(i = 0; i <= 100; i++){
      drop(i);
    }
    
    audio.pause();
    yip.play();
    audio.play();
    counter = counter + 1;
    if (counter == 6){congrats()}
    disableCards()
  }else{
    unflipCards()
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function create(i) {
  var width = 12;
  var height = width;
  var colourIdx = Math.ceil(Math.random() * 4);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    case 3:
      colour = "white";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*30+"%",
    "left" : Math.random()*100+"%",
    "transform" : "rotate("+Math.random()*360+"deg)",
    "border-radius" : "10px"
  }).appendTo('body');  
}

function drop(x) {
  $('.confetti-'+x).animate({
    top: "100%",
    left: "+="+Math.random()*15+"%"
  }, Math.random()*3000 + 3000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).css({
    "top" : -Math.random()*20+"%",
    "left" : Math.random()*100+"%"
  }, 0);
}

function congrats(){
  document.querySelector('.congrats').style.display = "flex";
  setTimeout(function(){
    document.querySelector('.congrats').style.opacity = 1;
  }, 2000);
}