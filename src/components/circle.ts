import Point from './point';
import { Util } from './../lib/util';
import { CIRCLE_MARGIN } from './../config/index';
import HSLColor from './HSLColor';

/**
 *
 *
 * @export
 * @class Circle
 */
export default class Circle {
    position: Point;
    radius: number;
    color: HSLColor;

    /**
     * Creates an instance of Circle.
     * @param {Point} position
     * @param {number} radius
     * @memberof Circle
     */
    constructor(position: Point, radius: number) {
        this.position = position;
        this.radius = radius;
    }

    /**
     *
     *
     * @param {HSLColor} color
     * @memberof Circle
     */
    setColor(color: HSLColor) {
        this.color = color;
    }

    /**
     *
     *
     * @param {Circle} otherCircle
     * @returns {boolean}
     * @memberof Circle
     */
    intersectsWith(otherCircle: Circle): boolean {
        const distance = Point.distance(this.position, otherCircle.position);
        return distance <= this.radius + otherCircle.radius + CIRCLE_MARGIN;
    }

    /**
     *
     *
     * @param {CanvasRenderingContext2D} context
     * @memberof Circle
     */
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color.toString();

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

    /**
     *
     *
     * @static
     * @param {Point} lowerBound
     * @param {Point} upperBound
     * @param {Point} radiusBound
     * @returns
     * @memberof Circle
     */
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
