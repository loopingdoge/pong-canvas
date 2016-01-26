import Component from './component';
import Ball from './ball';
import Bar from './bar';
import Field from './field';

const Home = {

  init() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.field = Field();
    this.bars = [Bar()];
    this.ball = Ball(this.bars);
    this.drawables = [this.field, this.bars[0], this.ball];
    this.drawables.forEach((drawable) => drawable.init());

    this.lastTick = performance.now();
    this.lastRender = this.lastTick;
    this.tickLength = 16; // 60 fps

    this.render();
  },

  update() {
    this.drawables.forEach((drawable) => drawable.update());
  },

  queueUpdates(numTicks) {
    for (var i = 0; i < numTicks; i++) {
      this.lastTick = this.lastTick + this.tickLength;
      this.update();
    }
  },

  render(tFrame) {
    this.stopDrawing = window.requestAnimationFrame(this.render.bind(this));
    const nextTick = this.lastTick + this.tickLength;
    let numTicks = 0;
    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - this.lastTick;
      numTicks = Math.floor(timeSinceTick / this.tickLength);
    }
    this.queueUpdates(numTicks);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawables.forEach((drawable) => drawable.draw());
    this.lastRender = tFrame;
  }
};

export default function createHome() {
  return Object.assign({}, Component, Home);
}