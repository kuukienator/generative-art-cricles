import Canvas from './canvas';
import Circle from './circle';
import Point from './point';

/**
 *
 *
 * @export
 * @class CircleCanvas
 * @extends {Canvas}
 */
export default class CircleCanvas extends Canvas {
    _position: Point;
    _radius: number;

    /**
     * Creates an instance of CircleCanvas.
     * @param {Element} containerElement
     * @param {number} width
     * @param {number} height
     * @memberof CircleCanvas
     */
    constructor(containerElement: Element, width: number, height: number) {
        const smallerSide = Math.min(width, height);
        super(containerElement, smallerSide, smallerSide);

        this._radius = smallerSide / 2;
        this._position = new Point(this._radius, this._radius);
    }

    /**
     *
     *
     * @param {Circle} circle
     * @returns {boolean}
     * @memberof CircleCanvas
     */
    isInsideBounds(circle: Circle): boolean {
        return (
            Point.distance(circle.position, this._position) + circle.radius <
            this._radius
        );
    }
}
