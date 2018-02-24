import Canvas from './canvas';
import Circle from './circle';
import Point from './point';

export default class CircleCanvas extends Canvas {
    _position: Point;
    _radius: number;

    constructor(containerElement: Element, width: number, height: number) {
        const smallerSide = Math.min(width, height);
        super(containerElement, smallerSide, smallerSide);

        this._radius = smallerSide / 2;
        this._position = new Point(this._radius, this._radius);
    }

    isInsideBounds(circle: Circle): boolean {
        return (
            Point.distance(circle.position, this._position) + circle.radius <
            this._radius
        );
    }
}
