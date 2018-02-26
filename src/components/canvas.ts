import Circle from './circle';
import { Util } from './../lib/util';
import {
    MAX_ITERATIONS,
    MIN_RADIUS,
    MAX_RADIUS,
    MAX_ITERATIONS_PER_SECTION,
    SHOW_ANIMATIONS
} from './../config/index';
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
    _colors: Array<HSLColor>;

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
     * @param {Array<HSLColor>} colors
     * @memberof Canvas
     */
    setColors(colors: Array<HSLColor>) {
        this._colors = colors;
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
            const _circle = this._createCircle();
            if (_circle) {
                this._circles.push(_circle);
            }
        }
    }

    /**
     *
     *
     * @param {number} count
     * @memberof Canvas
     */
    generateRandomCirclesRecursive(count: number) {
        if (count === 0) {
            console.log('Done creating circles');
            return;
        }

        count--;
        const _circle = this._createCircle();
        if (_circle) {
            this._circles.push(_circle);
            this.draw();
        }
        if (SHOW_ANIMATIONS) {
            setTimeout(() => this.generateRandomCirclesRecursive(count), 100);
        } else {
            this.generateRandomCirclesRecursive(count);
        }
    }

    /**
     *
     *
     * @returns
     * @memberof Canvas
     */
    _createCircle() {
        let iterationCount = 0;
        let iterationCountForSection = 0;
        let maxRadiusPercentage = 1;
        let _circle: Circle;
        let _isValid: boolean;

        do {
            iterationCount++;
            iterationCountForSection++;
            if (iterationCountForSection === MAX_ITERATIONS_PER_SECTION) {
                iterationCountForSection = 0;
                maxRadiusPercentage -= 0.1;
                maxRadiusPercentage = Math.max(maxRadiusPercentage, 0.1);
            }

            _circle = Circle.generateRandomCircle(
                new Point(0, this._width),
                new Point(0, this._height),
                new Point(MIN_RADIUS, MAX_RADIUS * maxRadiusPercentage)
            );

            _circle.setColor(Util.getRandomEntry<HSLColor>(this._colors));

            _isValid =
                this.isInsideBounds(_circle) &&
                !this._circles.some(c => c.intersectsWith(_circle));

            if (!_isValid) {
                _circle = null;
            }
        } while (!_isValid && iterationCount < MAX_ITERATIONS);

        return _circle;
    }

    /**
     *
     *
     * @memberof Canvas
     */
    draw() {
        this._context.fillStyle = '#fff';
        this._context.fillRect(0, 0, this._width, this._height);
        this._circles.forEach(circle => {
            circle.draw(this._context);
        });
    }
}
