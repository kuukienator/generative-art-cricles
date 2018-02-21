import Point from './point';
import { Util } from './util';

export default class Circle {
  position: Point;
  radius: number;

  constructor(position: Point, radius: number) {
    this.position = position;
    this.radius = radius;
  }

  intersectsWith(otherCircle: Circle): boolean {
    const distance = Point.distance(this.position, otherCircle.position);
    return distance <= this.radius + otherCircle.radius;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = 'hsl(270,60%,90%)';
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    context.fill();
  }

  static generateRandomCircle(
    lowerBound: Point,
    upperBound: Point,
    radiusBound: Point
  ) {
    return new Circle(
      Point.generateRandomPoint(
        lowerBound.x,
        lowerBound.y,
        upperBound.x,
        upperBound.y
      ),
      Util.getRandomInt(radiusBound.x, radiusBound.y)
    );
  }
}
