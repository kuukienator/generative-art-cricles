import { Util } from './util';

export default class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static distance(p1: Point, p2: Point): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  static generateRandomPoint(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number
  ) {
    return new Point(
      Util.getRandomInt(minX, maxX),
      Util.getRandomInt(minY, maxY)
    );
  }
}
