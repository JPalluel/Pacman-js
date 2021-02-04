document.addEventListener("DOMContentLoaded",function(){
    const grid = document.querySelector('.grid');
    let score = document.getElementById('score');
    let scoreNumber = 0;
    score.innerHTML = scoreNumber;
    const width = 28;

// layout of the grid
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,4,4,2,2,2,2,4,4,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]

const squares= [];

function createBoard() {

  layout.forEach(number => {
    const square = document.createElement('div');
    if(number=== 0){
      square.classList.add('plancton')
    } else if(number ===1){
      square.classList.add('wall')
    } else if (number=== 2){
      square.classList.add('fantomslair');
    }else if(number === 3){
      square.classList.add('recycle')
    }
    grid.appendChild(square);
    squares.push(square)
  })
}
createBoard();

//Index pacman
let pacmanCurrentIndex = 490;

// squares is an  array with all the divs, index number 368, with the div plancton => change it to pac-man
squares[pacmanCurrentIndex].classList.remove('plancton');
squares[pacmanCurrentIndex].classList.add('pac-man'); //place pacman in grid

//Move pacman
function movePacman(e){
    squares[pacmanCurrentIndex].classList.remove('pac-man');

    if(e.keyCode ===37 ){ //left arrow
          if(!squares[pacmanCurrentIndex-1].classList.contains('wall') && !squares[pacmanCurrentIndex-1].classList.contains("fantomslair")) {
            pacmanCurrentIndex -=1; //new index pacman
          }
          //make pacman able to cross the boad
          if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
          }

        } else if (e.keyCode === 38){//arrow up
          if(!squares[pacmanCurrentIndex-width].classList.contains('wall')&& !squares[pacmanCurrentIndex-width].classList.contains("fantomslair")){ 
            pacmanCurrentIndex -=width;
          }

        }else if(e.keyCode === 39){//right arrow
          if(!squares[pacmanCurrentIndex+1].classList.contains('wall')&& !squares[pacmanCurrentIndex+1].classList.contains("fantomslair")){  
            pacmanCurrentIndex +=1;
          }
          //make pacman able to cross the board
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 363
          }
          squares[pacmanCurrentIndex].classList.add('pac-man')
        }else if(e.keyCode===40){
          if(!squares[pacmanCurrentIndex+width].classList.contains('wall')&& !squares[pacmanCurrentIndex+width].classList.contains("fantomslair")){  
            pacmanCurrentIndex +=width;
          }

    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    console.log(squares[pacmanCurrentIndex].classList)
    planctonEaten()
    recycleEaten()
    checkForGameOver()
    checkForWin()
}
document.addEventListener('keyup', movePacman)

//Eat plancton
function planctonEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('plancton')){
        scoreNumber++;
        score.innerHTML = scoreNumber;
        squares[pacmanCurrentIndex].classList.remove('plancton');
    }
}

//Eat recycle
function recycleEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('recycle')){
        scoreNumber+=10;
        score.innerHTML = scoreNumber;
        squares[pacmanCurrentIndex].classList.remove('recycle');    
        fantoms.forEach(fantom=>{
            fantom.isScared= true;
        });
        setTimeout(unscareFantom,5000);
    }
}

//unscare ghost function
function unscareFantom(){
    fantoms.forEach(fantom=>{
        fantom.isScared = false;
    })
}

    //creation of fantoms 

class Fantom {
  constructor(name, startIndex,speed){
      this.name = name;
      this.startIndex = startIndex;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.speed = speed,
        this.timerId = NaN
    }
}

//Creation of 4 instances of fantom
fantoms = [ new Fantom("mask", 348, 100),
  new Fantom("plasticBag", 376, 200),
  new Fantom("tire",351, 300),
  new Fantom("bottle",379, 400)
  ]

//place them on the board
fantoms.forEach(fantom =>{
  squares[fantom.currentIndex].classList.add(fantom.name);
  squares[fantom.currentIndex].classList.add('fantom');
})

//moving them randomly:
fantoms.forEach(fantom => moveFantom(fantom))
  

function moveFantom(fantom) {
  const directions =  [-1, +1, width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)];

    fantom.timerId = setInterval(function() {

      if(!squares[fantom.currentIndex + direction].classList.contains("wall") &&
      !squares[fantom.currentIndex + direction].classList.contains('fantom')){
        //remove the fantom from is current place
        squares[fantom.currentIndex].classList.remove('fantom','scaredFantom');
        squares[fantom.currentIndex].classList.remove(fantom.name);
        //move the fantom to current place + direction
        squares[fantom.currentIndex + direction].classList.add('fantom');
        squares[fantom.currentIndex + direction].classList.add(fantom.name);
        //change new index to current + direction
        fantom.currentIndex += direction;
      } else{
        direction = directions[Math.floor(Math.random() * directions.length)];
      }

      if(fantom.isScared === true && squares[fantom.currentIndex].classList.contains('pac-man')){
        squares[fantom.currentIndex].classList.remove('scaredFantom',fantom.name, 'fantom');
        fantom.currentIndex = fantom.startIndex;
        scoreNumber += 50;
      }
      if(fantom.isScared){
        squares[fantom.currentIndex].classList.add('scaredFantom')
      }
      checkForGameOver();

  },fantom.speed)
}

function checkForGameOver() {
  if (squares[pacmanCurrentIndex].classList.contains('fantom') && !squares[pacmanCurrentIndex].classList.contains('scaredFantom'))
    {
      fantoms.forEach(fantom => clearInterval(fantom.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ 
        alert("Game Over...");
        location.reload(); 
    }, 500);;
  };
}

function checkForWin() {
  if (scoreNumber === 274) {
    fantoms.forEach(fantom => clearInterval(fantom.timerId))
    document.removeEventListener('keyup', movePacman)
    setTimeout(function(){ alert("You WON! Thank you for Saving our Planet!");
      location.reload(); 
    }, 500)
  }
}
})
