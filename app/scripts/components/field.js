import Component from './component';

const Field = {

  x: 0,
  y: 0,
  lineWidth: 3,

  init() {
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext('2d');
  },

  draw() {
    const ctx = this.ctx;
    const topArea = (this.height/100) * 10;
    const botArea = (this.height/100) * 90;
    //ctx.beginPath();
    ctx.rect(0, 0, this.width, this.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    
    ctx.beginPath();
    ctx.setLineDash([9]);
    ctx.moveTo(0, topArea);
    ctx.lineTo(this.width, topArea);
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.moveTo(0, botArea);
    ctx.lineTo(this.width, botArea);
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.moveTo(this.width/2 - this.lineWidth/2, topArea + this.height/100);
    ctx.lineTo(this.width/2 - this.lineWidth/2, botArea - this.height/100);
    ctx.stroke();

    ctx.restore();
  }

};

export default function createField() {
  return Object.assign({}, Component, Field);
}