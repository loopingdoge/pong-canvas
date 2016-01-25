const Bar = {

  ctx: document.getElementById('canvas').getContext('2d'),
  startX: 0,
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
    this.ctx.fillRect(this.startX, this.y, this.width, this.height);
  }
};

export default function createBar() {
  return Object.create(Bar);
}