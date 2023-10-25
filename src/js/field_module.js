class Field {

   constructor() { }

   createField(fieldWidth, fieldHeight, cellsQtyX, cellsQtyY) {

      let field = document.querySelector('.game-field');

      field.innerHTML = '';

      let cell = document.createElement('div');
      let qtyOfCells = cellsQtyX * cellsQtyY;
      let cellWidth = fieldWidth / cellsQtyX;
      let cellHeight = fieldHeight / cellsQtyY;

      field.style.cssText = `display:grid; grid-template-columns:repeat(${cellsQtyX}, ${cellWidth}px); grid-template-rows:repeat(${cellsQtyY}, ${cellHeight}px); margin: 0 auto;`

      field.appendChild(cell);
      cell.classList.add('empty-cell');
      cell.setAttribute('data-x', 1);
      cell.setAttribute('data-y', cellsQtyY);
      cell.style.width = cellWidth + 'px';
      cell.style.height = cellHeight + 'px';

      for (let i = 1; i < qtyOfCells; i++) {
         let cell = document.createElement('div');
         field.appendChild(cell);
         cell.classList.add('empty-cell');
         cell.setAttribute('data-x', ((i - ((Math.trunc(i / cellsQtyX))) * cellsQtyX) + 1));
         cell.setAttribute('data-y', cellsQtyY - (Math.trunc(i / cellsQtyY)));
         cell.style.width = cellWidth + 'px';
         cell.style.height = cellHeight + 'px';
      }

      field.style.width = fieldWidth + 'px';
      field.style.height = fieldHeight + 'px';
   }


}


export default Field;
