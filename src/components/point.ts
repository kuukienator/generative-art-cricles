import { Util } from './../lib/util';

/**
 *
 *
 * @export
 * @class Point
 */
export default class Point {
    x: number;
    y: number;

    /**
     * Creates an instance of Point.
     * @param {number} x
     * @param {number} y
     * @memberof Point
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     *
     *
     * @static
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     * @memberof Point
     */
    static distance(p1: Point, p2: Point): number {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    /**
     *
     *
     * @static
     * @param {number} minX
     * @param {number} maxX
     * @param {number} minY
     * @param {number} maxY
     * @returns
     * @memberof Point
     */
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
