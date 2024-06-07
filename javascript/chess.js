let cell = document.querySelector('.js-chessboard');
let html='';

for (let j=0; j<4; j++) {

for (let i=0; i<4; i++) {
html += ` <div class="cell cell-black"  id="12">1</div>
    <div class="cell cell-white"  id="13">1</div>`
}


for (let i=0; i<4; i++) {
  html += ` <div class="cell cell-white"  id="13">1</div>
        <div class="cell cell-black"  id="12">1</div>
        `
  }

}
cell.innerHTML=html;