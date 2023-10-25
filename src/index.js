import './css/style.css'
import Field from "./js/field_module";
import Game from './js/game_module';
import Score from './js/score_module';


let field = new Field;
let score = new Score;

let game = new Game(field, score);


// Создание начального пустого поля
field.createField(500, 500, 10, 10);
score.bestScoreGet();


// Управление кнопками
document.addEventListener('keydown', function (e) {

   game.gameControl(e)

},);


// Кнопка play/pause
let playBtn = document.getElementById('play');

playBtn.addEventListener('click', () => {

   game.gameStartPause();

});


// Кнопка new game
let newGame = document.getElementById('newgame');

newGame.addEventListener('click', () => {

   game.gameRestart();

});


// Кнопка обнуления лучшего результата
let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {

   score.scoreReset();

});


// Старт по клику на любую часть поля (как в ТЗ)
let fieldArea = document.querySelector('.game-field');

fieldArea.addEventListener('click', () => {

   game.gameStartPause();

});





