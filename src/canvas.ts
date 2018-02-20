import Circle from './circle';
import { Util } from './util';
import Point from './point';

export default class Canvas {
  _canvas: HTMLCanvasElement;
  _circles: Array<Circle>;
  _context: CanvasRenderingContext2D;
  _width: number;
  _height: number;

  constructor(containerElement: Element, width: number, height: number) {
    this._height = height;
    this._width = width;
    this._canvas = document.createElement('canvas');
    this._canvas.width = this._width;
    this._canvas.height = this._height;

    containerElement.appendChild(this._canvas);

    this._circles = [];
    this._context = this._canvas.getContext('2d');
  }

  addCircle(circle: Circle) {
    this._circles.push(circle);
  }

  addCircles(circles: Array<Circle>) {
    this._circles = this._circles.concat(circles);
  }

  generateRandomCircles(count: number) {
    for (let index = 0; index < count; index++) {
      let _circle: Circle;

      do {
        _circle = Circle.generateRandomCircle(
          new Point(0, this._width),
          new Point(0, this._height),
          new Point(1, 75)
        );
      } while (this._circles.some(c => c.intersectsWith(_circle)));

      this._circles.push(_circle);
    }
  }

  draw() {
    this._circles.forEach(circle => {
      circle.draw(this._context);
    });
  }
}
