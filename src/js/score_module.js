class Score {
   constructor() {

      this.currentScore = 0;
      this.bestScore = localStorage.getItem("bestScore");
      this.congratsText;
   }


   scorePlus() {

      this.currentScore++;
      document.getElementById('current-score').innerText = this.currentScore;

   }


   scoreReset() {

      localStorage.clear();
      this.bestScore = 0;
      document.getElementById('best-score').innerText = 0;

   }


   currentScoreZero() {

      this.currentScore = 0;
      document.getElementById('current-score').innerText = 0;
   }


   bestScoreRenew() {

      if (this.currentScore > this.bestScore) {
         document.getElementById('best-score').innerText = this.currentScore;
         localStorage.setItem("bestScore", this.currentScore)

         this.congratsText = document.querySelector('.congrats');
         this.congratsText.classList.remove("invisible");
      }
   }


   bestScoreGet() {

      this.bestScore = localStorage.getItem("bestScore");

      if (!this.bestScore) { this.bestScore = 0 }
      else {
         document.getElementById('best-score').innerText = this.bestScore
      }
   }

}


export default Score;