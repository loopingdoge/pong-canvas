import Component from './component';

const Bar = {

  x: 0,
  y: 0,
  width: 10,
  height: 50,

  init() {
    window.addEventListener('keydown', checkKeyPressed.bind(this), false);

    function checkKeyPressed(e) {
      if (e.keyCode == '38') {
        this.y = this.y - 10;
      }
      if (e.keyCode == '40') {
        this.y = this.y + 10;
      }
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