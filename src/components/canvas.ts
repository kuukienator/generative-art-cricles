import Circle from './circle';
import { Util, COLORS } from './../lib/util';
import Point from './point';
import HSLColor from './HSLColor';

/**
 *
 *
 * @export
 * @class Canvas
 */
export default class Canvas {
    _canvas: HTMLCanvasElement;
    _circles: Array<Circle>;
    _context: CanvasRenderingContext2D;
    _width: number;
    _height: number;

    /**
     * Creates an instance of Canvas.
     * @param {Element} containerElement
     * @param {number} width
     * @param {number} height
     * @memberof Canvas
     */
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

    /**
     *
     *
     * @param {Circle} circle
     * @memberof Canvas
     */
    addCircle(circle: Circle) {
        this._circles.push(circle);
    }

    /**
     *
     *
     * @param {Array<Circle>} circles
     * @memberof Canvas
     */
    addCircles(circles: Array<Circle>) {
        this._circles = this._circles.concat(circles);
    }

    /**
     *
     *
     * @param {Circle} circle
     * @returns {boolean}
     * @memberof Canvas
     */
    isInsideBounds(circle: Circle): boolean {
        return (
            circle.position.x - circle.radius > 0 &&
            circle.position.y - circle.radius > 0 &&
            circle.position.x + circle.radius < this._width &&
            circle.position.y + circle.radius < this._height
        );
    }

    /**
     *
     *
     * @param {number} count
     * @memberof Canvas
     */
    generateRandomCircles(count: number) {
        for (let index = 0; index < count; index++) {
            let _circle: Circle;

            do {
                _circle = Circle.generateRandomCircle(
                    new Point(0, this._width),
                    new Point(0, this._height),
                    new Point(5, 150)
                );

                _circle.setColor(COLORS[Util.getRandomInt(0, COLORS.length)]);
            } while (
                !this.isInsideBounds(_circle) ||
                this._circles.some(c => c.intersectsWith(_circle))
            );

            this._circles.push(_circle);
        }
    }

    /**
     *
     *
     * @memberof Canvas
     */
    draw() {
        this._circles.forEach(circle => {
            circle.draw(this._context);
        });
    }
}
