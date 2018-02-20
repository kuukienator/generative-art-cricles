import Canvas from './canvas';
import Circle from './circle';
import Point from './point';

export default class App {
  constructor() {
    const containerElement = document.getElementById('container');
    const canvas = new Canvas(containerElement, 600, 600);

    canvas.generateRandomCircles(50);

    canvas.draw();
  }
}
