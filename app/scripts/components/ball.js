import Component from './component';

const Ball = {

  directionX: 1,
  directionY: 1,
  velX: 6,
  velY: 1,

  init() {
    this.x = this.canvas.width/2;
    this.y = this.canvas.height/2;
    this.width = (this.canvas.width/100) * 3;
    this.height = this.width;
  },

  detectCollision(comp) {
    if (this.x < comp.x + comp.width &&
        this.x + this.width > comp.x &&
        this.y < comp.y + comp.height &&
        this.height + this.y > comp.y) {
      this.directionX = -1 * this.directionX;

      const middleBar = (comp.y + comp.height/2);
      const pushForce = (Math.abs(this.y - middleBar) / 100) * 5;
      
      this.velX += pushForce;
      this.velY += pushForce * 3;

      if(this.y < comp.y + comp.height/2) {
        this.directionY = -1;
      } else if(this.y > comp.y + comp.height/2) {
        this.directionY = 1;
      }
    }
  },

  movement() {
    this.x = this.x + (this.directionX * this.velX);
    this.y = this.y + (this.directionY * this.velY);

    this.bars
      .forEach(this.detectCollision.bind(this));

    if(this.x <= 0 || this.x >= this.canvas.width) {
      this.directionX = -1 * this.directionX;
    }
    if(this.y <= 0 || this.y >= this.canvas.height) {
      this.directionY = -1 * this.directionY;
    }
  },

  draw() {
    const ctx = this.ctx;
    this.movement();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.width/2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
};

export default function createBall(bars) {
  const ball = Object.assign({}, Component, Ball);
  ball.bars = bars;
  return ball;
}