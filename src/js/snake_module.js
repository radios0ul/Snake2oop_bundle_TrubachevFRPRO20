
class Snake {

   constructor() {

      this.snakeBody = [];
      this.headCoordinates = [];
      this.direction = 'right';
      this.gameOverMarker = false; //Флажок столкновения
      this.feedMarker = false; //Флажок съедания еды
      this.foodDiv; // Ячейка с едой
      this.length; //Длина массива со змейкой
      this.snakeCreated = false; // Флажок, что змейка создана, чтобы активировать кнопку старта-паузы

   }


   //Создание начальной змейки в центре поля

   createSnake(headX, headY) {

      this.headCoordinates = [headX, headY];

      this.snakeBody = [document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${this.headCoordinates[1]}']`),
      document.querySelector(`div[data-x = '${this.headCoordinates[0] - 1}'][data-y = '${this.headCoordinates[1]}']`),
      document.querySelector(`div[data-x = '${this.headCoordinates[0] - 2}'][data-y = '${this.headCoordinates[1]}']`)];

      for (let i = 0; i < this.snakeBody.length; i++) {
         this.snakeBody[i].classList.add('snake-body')
      };

      this.snakeBody[0].classList.add('snake-head');
      this.snakeCreated = true;

      return [this.snakeBody, this.headCoordinates]
   }

   //Реализация одного шага движения в заданном направлении, учитывая проход сквозь стену, в завис-ти от размеров поля
   //Реализация проверки на попадание на ячейку с едой
   //Реализация проверки на столкновение

   snakeMove(cellsQtyX, cellsQtyY) {

      let headX = this.headCoordinates[0];
      let headY = this.headCoordinates[1];
      this.feedMarker = false;

      let i = 0;
      let j = 0;

      switch (this.direction) {

         case 'right':

            this.snakeBody[0].classList.remove('snake-head');

            this.snakeBody[this.snakeBody.length - 1].classList.remove('snake-body');
            this.snakeBody.pop();

            if (this.headCoordinates[0] < cellsQtyX) {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0] + 1}'][data-y = '${this.headCoordinates[1]}']`))
            }
            else {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${1}'][data-y = '${this.headCoordinates[1]}']`));
               this.headCoordinates[0] = 0;
            };

            this.snakeBody[0].classList.add('snake-head');

            for (i = 0; i < this.snakeBody.length; i++) {
               this.snakeBody[i].classList.add('snake-body');
            }

            headX = this.headCoordinates[0] + 1;
            headY = this.headCoordinates[1];
            this.headCoordinates = [headX, headY];

            break;

         case 'up':

            this.snakeBody[0].classList.remove('snake-head');

            this.snakeBody[this.snakeBody.length - 1].classList.remove('snake-body');
            this.snakeBody.pop();

            if (this.headCoordinates[1] < cellsQtyY) {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${this.headCoordinates[1] + 1}']`))
            }
            else {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${1}']`));
               this.headCoordinates[1] = 0;
            };

            this.snakeBody[0].classList.add('snake-head');

            for (i = 0; i < this.snakeBody.length; i++) {
               this.snakeBody[i].classList.add('snake-body');
            }

            headX = this.headCoordinates[0];
            headY = this.headCoordinates[1] + 1;
            this.headCoordinates = [headX, headY];
            break;

         case 'left':

            this.snakeBody[0].classList.remove('snake-head');

            this.snakeBody[this.snakeBody.length - 1].classList.remove('snake-body');
            this.snakeBody.pop();

            if (this.headCoordinates[0] > 1) {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0] - 1}'][data-y = '${this.headCoordinates[1]}']`))
            }
            else {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${cellsQtyX}'][data-y = '${this.headCoordinates[1]}']`));
               this.headCoordinates[0] = cellsQtyX + 1;
            };

            this.snakeBody[0].classList.add('snake-head');

            for (i = 0; i < this.snakeBody.length; i++) {
               this.snakeBody[i].classList.add('snake-body');
            }

            headX = this.headCoordinates[0] - 1;
            headY = this.headCoordinates[1];
            this.headCoordinates = [headX, headY];
            break;

         case 'down':

            this.snakeBody[0].classList.remove('snake-head');

            this.snakeBody[this.snakeBody.length - 1].classList.remove('snake-body');
            this.snakeBody.pop();

            if (this.headCoordinates[1] > 1) {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${this.headCoordinates[1] - 1}']`))
            }
            else {
               this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${cellsQtyY}']`));
               this.headCoordinates[1] = cellsQtyY + 1;
            };

            this.snakeBody[0].classList.add('snake-head');

            for (i = 0; i < this.snakeBody.length; i++) {
               this.snakeBody[i].classList.add('snake-body');
            }

            headX = this.headCoordinates[0];
            headY = this.headCoordinates[1] - 1;
            this.headCoordinates = [headX, headY];
            break;

         case 'stop': //На всякий случай

            console.log('stoooop!!')
            this.snakeStop();
            break;
      }


      //Проверка попадания на ячейку с едой

      this.foodDiv = document.querySelector('.food');
      let foodX = this.foodDiv.getAttribute('data-x');
      let foodY = this.foodDiv.getAttribute('data-y');
      this.length = this.snakeBody.length;

      if ((headX == foodX) && (headY == foodY)) {

         this.snakeFeed()
         this.feedMarker = true;
      }


      //Проверка столкновения со своим хвостом

      while (j < (this.length - 1)) {
         j++;
         if ((headX == this.snakeBody[j].getAttribute('data-x')) && (headY == this.snakeBody[j].getAttribute('data-y'))) {
            this.gameOverMarker = true;
         };
      }
   }


   //Съедание еды - наращивание хвоста змейки

   snakeFeed() {

      let tail = this.snakeBody[this.length - 1]; //Хвостовой элемент змейки
      let tailX = tail.getAttribute('data-x')
      let tailY = tail.getAttribute('data-y')

      this.snakeBody.push(document.querySelector(`div[data-x = '${tailX}'][data-y = '${tailY}']`));
      this.snakeBody[this.length - 1].classList.add('snake-body');
      this.foodDiv.classList.remove('food');

   }

}

export default Snake;

