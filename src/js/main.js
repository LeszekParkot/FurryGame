import "../scss/main.scss";
import Furry from "./furry.js";
import Coin from "./coin.js";

let self;
let isRunning;
let closeInfo = document.querySelector(".close");
let info = document.querySelector("#info");

closeInfo.addEventListener("click", function(){
  info.classList.add("invisible");
});

document.addEventListener('keydown', function(event){
    Game.prototype.turnFurry(event);
    if (event.which == 13 && !isRunning && info.className == "invisible") {
      Game.prototype.startGame();
      isRunning = true;
    }
});

class Game{
  constructor(){
    self = this;
    this.board = document.querySelectorAll("#board div");
    this.scoreElement = document.querySelector(".score span");
    this.levelElement = document.querySelector(".level span");
    this.gameOver = document.querySelector("#over");
    this.lvl_up = document.querySelector("#lvlUp");
    this.startPosition = document.querySelector("#board").firstElementChild;
    this.furry = new Furry();
    this.coin = new Coin();
    this.stopGame = false;
    this.furrySpeed = 300;
    this.score = 0;
    this.level = 1;
    this.handler = setInterval(()=>{
      this.furrySpeed -= 25;
      this.level++;
      this.increaseLevel();
    }, 10000);
  };

  mainFn(){
    if (!self.stopGame) {
      self.scoreElement.innerHTML = self.score;
      self.showCoin();
      self.moveFurry();

      if (self.isGameOver()) {
        self.stopGame = true;
        clearInterval(self.handler);
        isRunning = false;
        self.hideVisibleFurry();
        self.hideCoin();
        self.gameOver.classList.add("visible");
        self.startPosition.classList.add("arrow");

      }else {
        self.hideVisibleFurry();
        self.showFurry();
        self.checkCoinCollision();
      }

      setTimeout(self.mainFn, self.furrySpeed);
    }
  };

  increaseLevel(){
    this.levelElement.innerHTML = this.level;
    this.lvl_up.classList.add("lvlUp");

    setTimeout(()=>{
      this.lvl_up.classList.remove("lvlUp");
    }, 1000);
  };

  index(x, y){
    return x + (y * 10);
  };

  hideVisibleFurry(){
    let furry = document.querySelector('.furry');
    if (furry) {
      furry.classList.remove("furry");
    }
  };

  showFurry(){
    this.startPosition.classList.remove("arrow");

    return  this.board[this.index(this.furry.x, this.furry.y)].
            classList.add('furry');
  };

  showCoin(){
    return  this.board[this.index(this.coin.x, this.coin.y)].
            classList.add('coin');
  };

  showScore(){
    this.scoreElement.innerHTML = this.score;
    this.levelElement.innerHTML = this.level;
  };

  hideCoin(){
    let coin = document.querySelector('.coin');
    if (coin) {
      coin.classList.remove("coin");
    }
  };

  turnFurry(event){
    if (event.which == 37) {
      self.furry.direction = "left";
    }else if (event.which == 39) {
      self.furry.direction = "right";
    }else if (event.which == 38) {
      self.furry.direction = "up";
    }else if (event.which == 40) {
      self.furry.direction = "down";
    }
  };

  moveFurry(){
    if(this.furry.direction === "right") {
        this.furry.x++;
    } else if (this.furry.direction === "left"){
      this.furry.x--;
    }else if (this.furry.direction === "up") {
      this.furry.y--;
    }else if (this.furry.direction === "down") {
      this.furry.y++;
    };
  };

  checkCoinCollision() {
    if ((this.furry.x == this.coin.x) && (this.furry.y == this.coin.y)){
      this.board[this.index(this.coin.x, this.coin.y)].
      classList.remove('coin');
      this.score++;
      this.scoreElement.innerHTML = this.score;
      this.coin = new Coin();
      this.showCoin();
    }
  };

  isGameOver(){
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
      return true;
    }else {
      return false;
    }
  };

  startGame(){
    new Game();
    self.gameOver.classList.remove("visible");
    self.showScore();
    self.showFurry();
    setTimeout(self.mainFn, self.furrySpeed);
  };
};
