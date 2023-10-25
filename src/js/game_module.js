
import Snake from "./snake_module";
import Food from "./food_module";


class Game {
   constructor(field, score) {
      this.snake = new Snake;
      this.food = new Food;

      this.field = field;
      this.score = score;

      this.btnFlag = true;  //Флажок, нажата ли кнопка паузы
      this.cellsQtyX = 10; //Кол-во клеток по Х
      this.cellsQtyY = 10; //Кол-во клеток по У

      this.congratsText;

   }


   gameStartPause() {

      if ((this.btnFlag == true) && (this.snake.gameOverMarker == false) && (this.snake.snakeCreated == true)) {
         this.snakeGo(500);
         this.btnFlag = false;
         this.pauseHideBanner();
      } else if ((this.btnFlag == false) && (this.snake.gameOverMarker == false)) {
         this.snakeStop();
         this.btnFlag = true;
         this.pauseShowBanner();
      }

   }


   gameControl(e) {

      if ((e.key == 'ArrowRight') && (this.snake.direction != 'left')) {
         this.snake.direction = 'right';
      }

      else if ((e.key == 'ArrowLeft') && (this.snake.direction != 'right')) {
         this.snake.direction = 'left';
      }

      else if ((e.key == 'ArrowUp') && (this.snake.direction != 'down')) {
         this.snake.direction = 'up'
      }

      else if ((e.key == 'ArrowDown') && (this.snake.direction != 'up')) {
         this.snake.direction = 'down';
      }

      else if (e.key == 'a') {
         this.snake.direction = 'stop';
      }

   }

   gameRestart() {

      this.snake.gameOverMarker = false;
      this.btnFlag = true;
      this.snake.direction = 'right';
      this.field.createField(500, 500, this.cellsQtyX, this.cellsQtyY,)
      this.snake.createSnake(6, 6);
      this.gameOverHideBanner();
      this.pauseHideBanner();
      this.snakeStop();
      this.food.createFood();
      this.score.bestScoreGet();
      this.congratsText = document.querySelector('.congrats');
      this.congratsText.classList.add("invisible");
      this.score.currentScoreZero();

   }

   gameOverShowBanner() {

      this.gameOverBanner = document.querySelector('.game-over');
      this.gameOverBanner.classList.remove("invisible");
   }


   gameOverHideBanner() {
      this.gameOverBanner = document.querySelector('.game-over');
      this.gameOverBanner.classList.add("invisible");

   }

   pauseShowBanner() {
      this.gameOverBanner = document.querySelector('.pause');
      this.gameOverBanner.classList.remove("invisible");

   }

   pauseHideBanner() {
      this.gameOverBanner = document.querySelector('.pause');
      this.gameOverBanner.classList.add("invisible");

   }

   snakeGo(interval) {

      this.IntervalID = setInterval(() => {

         this.snake.snakeMove(this.cellsQtyX, this.cellsQtyY);
         if (this.snake.gameOverMarker) {
            this.snakeStop();
            this.score.bestScoreRenew();
            console.log('ГАМЕОВЕР');
            this.gameOverShowBanner();
         };

         if (this.snake.feedMarker) {
            this.food.createFood();
            this.score.scorePlus();
         };

      }, interval)
   }

   snakeStop() {

      clearInterval(this.IntervalID)
   }




}


export default Game;

