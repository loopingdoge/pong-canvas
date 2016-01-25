const Ball = {
  ctx: document.getElementById('canvas').getContext('2d'),
  x: 75,
  y: 75,
  direction: 1,
  velX: 4,
  velY: 1,

  movement() {
    this.x = this.x + (this.direction * this.velX);
    this.y = this.y + (this.direction * this.velY);
  },

  init() {

  },

  draw() {
    this.movement();
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 12, 0, 2 * Math.PI);
    ctx.fill();
  }
};

export default function createBall() {
  return Object.create(Ball);
}