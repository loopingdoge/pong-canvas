import Component from './component';

const Bar = {

  x: 0,
  y: 0,
  width: 0,
  height: 0,

  init() {
    var cursorX;
    var cursorY;
    window.addEventListener('keydown', checkKeyPressed.bind(this), false);
    this.widthC = this.canvas.width;
    this.heightC = this.canvas.height;
    this.height = (this.heightC/100) * 20;
    this.width = (this.widthC/100) * 2;
    this.x = this.width;
    this.movimentUnit = (this.widthC/100) * 10;

    canvas.addEventListener('mousemove', mousemovePad.bind(this), false);

    function checkKeyPressed(e) {
      if (e.keyCode == '38') {
        if( (this.y - this.movimentUnit) >= 0){
          this.y = this.y - this.movimentUnit;
        }
      }
      if (e.keyCode == '40') {
        if( (this.y + this.movimentUnit) <= (this.heightC-this.height/2)){
          this.y = this.y + this.movimentUnit;
        }
      }
    }

    function mousemovePad(evt) {
        var mousePos = getMousePos(canvas, evt);

        if(mousePos.y > this.y){
            if( (this.y + this.movimentUnit) <= (this.heightC-this.height/2)){
              this.y = this.y + this.movimentUnit;
            }
        }
        
        if(mousePos.y < this.y){
            if( (this.y - this.movimentUnit) >= 0){
              this.y = this.y - this.movimentUnit;
            }
        }
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

  },

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.restore();
  }
};

export default function createBar() {
  return Object.assign({}, Component, Bar);
}