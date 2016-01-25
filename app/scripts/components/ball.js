import Component from './component';

const Ball = {

  x: 0,
  y: 0,
  direction: 1,
  velX: 4,
  velY: 1,

  movement() {
    this.x = this.x + (this.direction * this.velX);
    this.y = this.y + (this.direction * this.velY);
  },

  draw() {
    const ctx = this.ctx;
    this.movement();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, 12, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
};

export default function createBall() {
  return Object.assign({}, Component, Ball);
}