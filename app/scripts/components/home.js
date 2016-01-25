import Component from './component';
import Ball from './ball';
import Bar from './bar';
import Field from './field';

import Rx from 'rx';

const Home = {

  init() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.framerate = Rx.Observable.interval(16).timeInterval();
    this.drawables = [];

    this.drawables.push(Field());
    this.drawables.push(Ball());
    this.drawables.push(Bar());
    this.drawables.map((drawable) => drawable.init());
    this.framerate.subscribe(this.drawAll.bind(this));
  },

  drawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawables.map((drawable) => {
      drawable.draw();
    });
  }
};

export default function createHome() {
  return Object.assign({}, Component, Home);
}