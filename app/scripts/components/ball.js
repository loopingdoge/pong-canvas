import Component from './component';

const Ball = {

  velX: 10,
  velY: 0,

  init() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.width = (this.canvas.width / 100) * 3;
    this.height = this.width;
  },

  detectCollision(comp) {
    if (this.x < comp.x + comp.width &&
      this.x + this.width > comp.x &&
      this.y < comp.y + comp.height &&
      this.height + this.y > comp.y) {
      this.velX = -1 * this.velX;

      const middleBar = (comp.y + comp.height / 2);
      let pushForce = (Math.abs(this.y - middleBar) / 100);
      this.velX += pushForce * 5;
      this.velY = pushForce * 30;
      if (this.velY < -12) {
        this.velY = -12;
      } else if (this.velY > 12) {
        this.velY = 12;
      }

      if (this.y < comp.y + comp.height / 2) {
        this.velY = -1 * this.velY;
      }
    }
  },

  update() {
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;

    this.bars
      .forEach(this.detectCollision.bind(this));

    if (this.x <= 0 || this.x >= this.canvas.width) {
      this.velX = -1 * this.velX;
    }
    if (this.y <= 0 || this.y >= this.canvas.height) {
      this.velY = -1 * this.velY;
    }
  },

  draw() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
};

export default function createBall(bars) {
  const ball = Object.assign({}, Component, Ball);
  ball.bars = bars;
  return ball;
}