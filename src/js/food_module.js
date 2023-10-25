class Food {

   constructor() {

      this.xFood;
      this.yFood;
      this.newFood;

   }

   createFood() {

      this.xFood = Math.trunc(Math.random() * 9 + 1);
      this.yFood = Math.trunc(Math.random() * 9 + 1);

      this.newFood = document.querySelector(`[data-x="${this.xFood}"][data-y="${this.yFood}"]`);
      this.newFood.classList.add('food');

      while (this.newFood.classList.contains('snake-body')) {

         this.newFood.classList.remove('food');

         this.xFood = Math.trunc(Math.random() * 9 + 1);
         this.yFood = Math.trunc(Math.random() * 9 + 1);

         this.newFood = document.querySelector(`[data-x="${this.xFood}"][data-y="${this.yFood}"]`);
         this.newFood.classList.add('food');

      }

   }

}

export default Food;



