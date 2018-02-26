/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/**
 *
 *
 * @export
 * @class Util
 */
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     *
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @memberof Util
     */
    Util.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    /**
     *
     *
     * @static
     * @template T
     * @param {Array<T>} list
     * @returns {T}
     * @memberof Util
     */
    Util.getRandomEntry = function (list) {
        return list[this.getRandomInt(0, list.length)];
    };
    return Util;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(0);

/**
 *
 *
 * @export
 * @class Point
 */
var Point = /** @class */ (function () {
    /**
     * Creates an instance of Point.
     * @param {number} x
     * @param {number} y
     * @memberof Point
     */
    function Point(x, y) {
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
    Point.distance = function (p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };
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
    Point.generateRandomPoint = function (minX, maxX, minY, maxY) {
        return new Point(__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* Util */].getRandomInt(minX, maxX), __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* Util */].getRandomInt(minY, maxY));
    };
    return Point;
}());
/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE_COLORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CIRCLE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAX_ITERATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAX_ITERATIONS_PER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MIN_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOW_ANIMATIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__ = __webpack_require__(3);

var BASE_COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](318, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](210, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](100, 90, 80)
];
var CIRCLE_MARGIN = 5;
var MAX_ITERATIONS = 10000;
var MAX_ITERATIONS_PER_SECTION = 2000;
var MIN_RADIUS = 10;
var MAX_RADIUS = 150;
var SHOW_ANIMATIONS = true;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *
 *
 * @export
 * @class HSLColor
 */
var HSLColor = /** @class */ (function () {
    /**
     * Creates an instance of HSLColor.
     * @param {number} h
     * @param {number} s
     * @param {number} l
     * @param {number} [a=1]
     * @memberof HSLColor
     */
    function HSLColor(h, s, l, a) {
        if (a === void 0) { a = 1; }
        this.hue = h;
        this.saturation = s;
        this.lightness = l;
        this.alpha = a;
    }
    /**
     *
     *
     * @returns {string}
     * @memberof HSLColor
     */
    HSLColor.prototype.toString = function () {
        return "hsla(" + this.hue + "," + this.saturation + "%," + this.lightness + "%," + this.alpha + ")";
    };
    return HSLColor;
}());
/* harmony default export */ __webpack_exports__["a"] = (HSLColor);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(5);

(function () { return new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* default */](); })();


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_canvas__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HSLColor__ = __webpack_require__(3);



var App = /** @class */ (function () {
    /**
     * Creates an instance of App.
     * @memberof App
     */
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__circle_canvas__["a" /* default */](containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);
        var colors = [
            //new HSLColor(360, 100, 100),
            new __WEBPACK_IMPORTED_MODULE_2__HSLColor__["a" /* default */](270, 90, 50),
            new __WEBPACK_IMPORTED_MODULE_2__HSLColor__["a" /* default */](318, 90, 50),
            new __WEBPACK_IMPORTED_MODULE_2__HSLColor__["a" /* default */](210, 90, 50)
            //new HSLColor(100, 90, 50)
        ];
        // canvas.setColors(this.createRandomizedColors(BASE_COLORS));
        canvas.setColors(colors);
        canvas.generateRandomCirclesRecursive(2000);
        canvas.draw();
    }
    /**
     *
     *
     * @param {Array<HSLColor>} baseColors
     * @returns {Array<HSLColor>}
     * @memberof App
     */
    App.prototype.createRandomizedColors = function (baseColors) {
        var colors = [];
        var baseColor = __WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(baseColors);
        for (var i = 0; i < 3; i++) {
            colors.push(new __WEBPACK_IMPORTED_MODULE_2__HSLColor__["a" /* default */](baseColor.hue, baseColor.saturation, baseColor.lightness - i * 20));
        }
        return colors;
    };
    return App;
}());
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *
 *
 * @export
 * @class CircleCanvas
 * @extends {Canvas}
 */
var CircleCanvas = /** @class */ (function (_super) {
    __extends(CircleCanvas, _super);
    /**
     * Creates an instance of CircleCanvas.
     * @param {Element} containerElement
     * @param {number} width
     * @param {number} height
     * @memberof CircleCanvas
     */
    function CircleCanvas(containerElement, width, height) {
        var _this = this;
        var smallerSide = Math.min(width, height);
        _this = _super.call(this, containerElement, smallerSide, smallerSide) || this;
        _this._radius = smallerSide / 2;
        _this._position = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */](_this._radius, _this._radius);
        return _this;
    }
    /**
     *
     *
     * @param {Circle} circle
     * @returns {boolean}
     * @memberof CircleCanvas
     */
    CircleCanvas.prototype.isInsideBounds = function (circle) {
        return (__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */].distance(circle.position, this._position) + circle.radius <
            this._radius);
    };
    return CircleCanvas;
}(__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (CircleCanvas);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(1);




/**
 *
 *
 * @export
 * @class Canvas
 */
var Canvas = /** @class */ (function () {
    /**
     * Creates an instance of Canvas.
     * @param {Element} containerElement
     * @param {number} width
     * @param {number} height
     * @memberof Canvas
     */
    function Canvas(containerElement, width, height) {
        this._height = height;
        this._width = width;
        this._canvas = document.createElement('canvas');
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        containerElement.appendChild(this._canvas);
        this._circles = [];
        this._context = this._canvas.getContext('2d');
    }
    Canvas.prototype.setColors = function (colors) {
        this._colors = colors;
    };
    /**
     *
     *
     * @param {Circle} circle
     * @memberof Canvas
     */
    Canvas.prototype.addCircle = function (circle) {
        this._circles.push(circle);
    };
    /**
     *
     *
     * @param {Array<Circle>} circles
     * @memberof Canvas
     */
    Canvas.prototype.addCircles = function (circles) {
        this._circles = this._circles.concat(circles);
    };
    /**
     *
     *
     * @param {Circle} circle
     * @returns {boolean}
     * @memberof Canvas
     */
    Canvas.prototype.isInsideBounds = function (circle) {
        return (circle.position.x - circle.radius > 0 &&
            circle.position.y - circle.radius > 0 &&
            circle.position.x + circle.radius < this._width &&
            circle.position.y + circle.radius < this._height);
    };
    /**
     *
     *
     * @param {number} count
     * @memberof Canvas
     */
    Canvas.prototype.generateRandomCircles = function (count) {
        for (var index = 0; index < count; index++) {
            var _circle = this._createCircle();
            if (_circle) {
                this._circles.push(_circle);
            }
        }
    };
    /**
     *
     *
     * @param {number} count
     * @memberof Canvas
     */
    Canvas.prototype.generateRandomCirclesRecursive = function (count) {
        var _this = this;
        if (count === 0) {
            console.log('Done creating circles');
            return;
        }
        count--;
        var _circle = this._createCircle();
        if (_circle) {
            this._circles.push(_circle);
            this.draw();
        }
        if (__WEBPACK_IMPORTED_MODULE_2__config_index__["f" /* SHOW_ANIMATIONS */]) {
            setTimeout(function () { return _this.generateRandomCirclesRecursive(count); }, 100);
        }
        else {
            this.generateRandomCirclesRecursive(count);
        }
    };
    /**
     *
     *
     * @returns
     * @memberof Canvas
     */
    Canvas.prototype._createCircle = function () {
        var iterationCount = 0;
        var iterationCountForSection = 0;
        var maxRadiusPercentage = 1;
        var _circle;
        var _isValid;
        do {
            iterationCount++;
            iterationCountForSection++;
            if (iterationCountForSection === __WEBPACK_IMPORTED_MODULE_2__config_index__["c" /* MAX_ITERATIONS_PER_SECTION */]) {
                iterationCountForSection = 0;
                maxRadiusPercentage -= 0.1;
                maxRadiusPercentage = Math.max(maxRadiusPercentage, 0.1);
            }
            _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this._width), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this._height), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__config_index__["e" /* MIN_RADIUS */], __WEBPACK_IMPORTED_MODULE_2__config_index__["d" /* MAX_RADIUS */] * maxRadiusPercentage));
            _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(this._colors));
            _isValid =
                this.isInsideBounds(_circle) &&
                    !this._circles.some(function (c) { return c.intersectsWith(_circle); });
            if (!_isValid) {
                _circle = null;
            }
        } while (!_isValid && iterationCount < __WEBPACK_IMPORTED_MODULE_2__config_index__["b" /* MAX_ITERATIONS */]);
        return _circle;
    };
    /**
     *
     *
     * @memberof Canvas
     */
    Canvas.prototype.draw = function () {
        var _this = this;
        this._context.fillStyle = '#fff';
        this._context.fillRect(0, 0, this._width, this._height);
        this._circles.forEach(function (circle) {
            circle.draw(_this._context);
        });
    };
    return Canvas;
}());
/* harmony default export */ __webpack_exports__["a"] = (Canvas);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(2);



/**
 *
 *
 * @export
 * @class Circle
 */
var Circle = /** @class */ (function () {
    /**
     * Creates an instance of Circle.
     * @param {Point} position
     * @param {number} radius
     * @memberof Circle
     */
    function Circle(position, radius) {
        this.position = position;
        this.radius = radius;
    }
    /**
     *
     *
     * @param {HSLColor} color
     * @memberof Circle
     */
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    /**
     *
     *
     * @param {Circle} otherCircle
     * @returns {boolean}
     * @memberof Circle
     */
    Circle.prototype.intersectsWith = function (otherCircle) {
        var distance = __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].distance(this.position, otherCircle.position);
        return distance <= this.radius + otherCircle.radius + __WEBPACK_IMPORTED_MODULE_2__config_index__["a" /* CIRCLE_MARGIN */];
    };
    /**
     *
     *
     * @param {CanvasRenderingContext2D} context
     * @memberof Circle
     */
    Circle.prototype.draw = function (context) {
        context.fillStyle = this.color.toString();
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
    };
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
    Circle.generateRandomCircle = function (lowerBound, upperBound, radiusBound) {
        return new Circle(__WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].generateRandomPoint(lowerBound.x, lowerBound.y, upperBound.x, upperBound.y), __WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomInt(radiusBound.x, radiusBound.y));
    };
    return Circle;
}());
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhiMmM5MWNmNWE1NDY4MDllMGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSFNMQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUFBOzs7OztHQUtHO0FBQ0g7SUFBQTtJQTRCQSxDQUFDO0lBM0JHOzs7Ozs7OztPQVFHO0lBQ0ksaUJBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEdBQVc7UUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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LGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4YjJjOTFjZjVhNTQ2ODA5ZTBhIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFV0aWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFV0aWxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdGVtcGxhdGUgVFxyXG4gICAgICogQHBhcmFtIHtBcnJheTxUPn0gbGlzdFxyXG4gICAgICogQHJldHVybnMge1R9XHJcbiAgICAgKiBAbWVtYmVyb2YgVXRpbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tRW50cnk8VD4obGlzdDogQXJyYXk8VD4pOiBUIHtcclxuICAgICAgICByZXR1cm4gbGlzdFt0aGlzLmdldFJhbmRvbUludCgwLCBsaXN0Lmxlbmd0aCldO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbC50cyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuLy4uL2xpYi91dGlsJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBQb2ludFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBQb2ludC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxyXG4gICAgICogQG1lbWJlcm9mIFBvaW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcDJcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpc3RhbmNlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIFBvaW50XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbVBvaW50KFxyXG4gICAgICAgIG1pblg6IG51bWJlcixcclxuICAgICAgICBtYXhYOiBudW1iZXIsXHJcbiAgICAgICAgbWluWTogbnVtYmVyLFxyXG4gICAgICAgIG1heFk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWCwgbWF4WCksXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KG1pblksIG1heFkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wb2ludC50cyIsImltcG9ydCBIU0xDb2xvciBmcm9tICcuLy4uL2NvbXBvbmVudHMvSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfQ09MT1JTOiBBcnJheTxIU0xDb2xvcj4gPSBbXHJcbiAgICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgODApLFxyXG4gICAgbmV3IEhTTENvbG9yKDMxOCwgOTAsIDgwKSxcclxuICAgIG5ldyBIU0xDb2xvcigyMTAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMTAwLCA5MCwgODApXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gNTtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TOiBudW1iZXIgPSAxMDAwMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TX1BFUl9TRUNUSU9OOiBudW1iZXIgPSAyMDAwO1xyXG5leHBvcnQgY29uc3QgTUlOX1JBRElVUzogbnVtYmVyID0gMTA7XHJcbmV4cG9ydCBjb25zdCBNQVhfUkFESVVTOiBudW1iZXIgPSAxNTA7XHJcbmV4cG9ydCBjb25zdCBTSE9XX0FOSU1BVElPTlM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnL2luZGV4LnRzIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEhTTENvbG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIU0xDb2xvciB7XHJcbiAgICBodWU6IG51bWJlcjtcclxuICAgIHNhdHVyYXRpb246IG51bWJlcjtcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFNMQ29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2E9MV1cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaHVlID0gaDtcclxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzO1xyXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgICAgICB0aGlzLmFscGhhID0gYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hTTENvbG9yLnRzIiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuXHJcbigoKSA9PiBuZXcgQXBwKCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlQ2FudmFzIGZyb20gJy4vY2lyY2xlLWNhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7IEJBU0VfQ09MT1JTIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL2xpYi91dGlsJztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBcHAuXHJcbiAgICAgKiBAbWVtYmVyb2YgQXBwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDaXJjbGVDYW52YXMoY29udGFpbmVyRWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgIC8vbmV3IEhTTENvbG9yKDM2MCwgMTAwLCAxMDApLFxyXG4gICAgICAgICAgICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgNTApLFxyXG4gICAgICAgICAgICBuZXcgSFNMQ29sb3IoMzE4LCA5MCwgNTApLFxyXG4gICAgICAgICAgICBuZXcgSFNMQ29sb3IoMjEwLCA5MCwgNTApXHJcbiAgICAgICAgICAgIC8vbmV3IEhTTENvbG9yKDEwMCwgOTAsIDUwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gY2FudmFzLnNldENvbG9ycyh0aGlzLmNyZWF0ZVJhbmRvbWl6ZWRDb2xvcnMoQkFTRV9DT0xPUlMpKTtcclxuICAgICAgICBjYW52YXMuc2V0Q29sb3JzKGNvbG9ycyk7XHJcbiAgICAgICAgY2FudmFzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlc1JlY3Vyc2l2ZSgyMDAwKTtcclxuICAgICAgICBjYW52YXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEhTTENvbG9yPn0gYmFzZUNvbG9yc1xyXG4gICAgICogQHJldHVybnMge0FycmF5PEhTTENvbG9yPn1cclxuICAgICAqIEBtZW1iZXJvZiBBcHBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUmFuZG9taXplZENvbG9ycyhiYXNlQ29sb3JzOiBBcnJheTxIU0xDb2xvcj4pIHtcclxuICAgICAgICBjb25zdCBjb2xvcnM6IEFycmF5PEhTTENvbG9yPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvciA9IFV0aWwuZ2V0UmFuZG9tRW50cnk8SFNMQ29sb3I+KGJhc2VDb2xvcnMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcnMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBIU0xDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3IuaHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvci5zYXR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvci5saWdodG5lc3MgLSBpICogMjBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDYW52YXMgZXh0ZW5kcyBDYW52YXMge1xyXG4gICAgX3Bvc2l0aW9uOiBQb2ludDtcclxuICAgIF9yYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVDYW52YXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzbWFsbGVyU2lkZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lckVsZW1lbnQsIHNtYWxsZXJTaWRlLCBzbWFsbGVyU2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHNtYWxsZXJTaWRlIC8gMjtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBjaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZUNhbnZhc1xyXG4gICAgICovXHJcbiAgICBpc0luc2lkZUJvdW5kcyhjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFBvaW50LmRpc3RhbmNlKGNpcmNsZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pICsgY2lyY2xlLnJhZGl1cyA8XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLWNhbnZhcy50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgICBNQVhfSVRFUkFUSU9OUyxcclxuICAgIE1JTl9SQURJVVMsXHJcbiAgICBNQVhfUkFESVVTLFxyXG4gICAgTUFYX0lURVJBVElPTlNfUEVSX1NFQ1RJT04sXHJcbiAgICBTSE9XX0FOSU1BVElPTlNcclxufSBmcm9tICcuLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENhbnZhc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBfY29sb3JzOiBBcnJheTxIU0xDb2xvcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9ycyhjb2xvcnM6IEFycmF5PEhTTENvbG9yPikge1xyXG4gICAgICAgIHRoaXMuX2NvbG9ycyA9IGNvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IGNpcmNsZVxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBhZGRDaXJjbGUoY2lyY2xlOiBDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxDaXJjbGU+fSBjaXJjbGVzXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZXMoY2lyY2xlczogQXJyYXk8Q2lyY2xlPikge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMgPSB0aGlzLl9jaXJjbGVzLmNvbmNhdChjaXJjbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IGNpcmNsZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlQm91bmRzKGNpcmNsZTogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggLSBjaXJjbGUucmFkaXVzID4gMCAmJlxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueSAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi54ICsgY2lyY2xlLnJhZGl1cyA8IHRoaXMuX3dpZHRoICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55ICsgY2lyY2xlLnJhZGl1cyA8IHRoaXMuX2hlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJhbmRvbUNpcmNsZXMoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBfY2lyY2xlID0gdGhpcy5fY3JlYXRlQ2lyY2xlKCk7XHJcbiAgICAgICAgICAgIGlmIChfY2lyY2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goX2NpcmNsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJhbmRvbUNpcmNsZXNSZWN1cnNpdmUoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRG9uZSBjcmVhdGluZyBjaXJjbGVzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgY29uc3QgX2NpcmNsZSA9IHRoaXMuX2NyZWF0ZUNpcmNsZSgpO1xyXG4gICAgICAgIGlmIChfY2lyY2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChfY2lyY2xlKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTSE9XX0FOSU1BVElPTlMpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlc1JlY3Vyc2l2ZShjb3VudCksIDEwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbUNpcmNsZXNSZWN1cnNpdmUoY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZUNpcmNsZSgpIHtcclxuICAgICAgICBsZXQgaXRlcmF0aW9uQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpdGVyYXRpb25Db3VudEZvclNlY3Rpb24gPSAwO1xyXG4gICAgICAgIGxldCBtYXhSYWRpdXNQZXJjZW50YWdlID0gMTtcclxuICAgICAgICBsZXQgX2NpcmNsZTogQ2lyY2xlO1xyXG4gICAgICAgIGxldCBfaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xyXG4gICAgICAgICAgICBpdGVyYXRpb25Db3VudEZvclNlY3Rpb24rKztcclxuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbkNvdW50Rm9yU2VjdGlvbiA9PT0gTUFYX0lURVJBVElPTlNfUEVSX1NFQ1RJT04pIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Rm9yU2VjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhSYWRpdXNQZXJjZW50YWdlIC09IDAuMTtcclxuICAgICAgICAgICAgICAgIG1heFJhZGl1c1BlcmNlbnRhZ2UgPSBNYXRoLm1heChtYXhSYWRpdXNQZXJjZW50YWdlLCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfY2lyY2xlID0gQ2lyY2xlLmdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIHRoaXMuX3dpZHRoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KE1JTl9SQURJVVMsIE1BWF9SQURJVVMgKiBtYXhSYWRpdXNQZXJjZW50YWdlKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPih0aGlzLl9jb2xvcnMpKTtcclxuXHJcbiAgICAgICAgICAgIF9pc1ZhbGlkID1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbnNpZGVCb3VuZHMoX2NpcmNsZSkgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLl9jaXJjbGVzLnNvbWUoYyA9PiBjLmludGVyc2VjdHNXaXRoKF9jaXJjbGUpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghX2lzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIF9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoIV9pc1ZhbGlkICYmIGl0ZXJhdGlvbkNvdW50IDwgTUFYX0lURVJBVElPTlMpO1xyXG5cclxuICAgICAgICByZXR1cm4gX2NpcmNsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiB7XHJcbiAgICAgICAgICAgIGNpcmNsZS5kcmF3KHRoaXMuX2NvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5pbXBvcnQgeyBDSVJDTEVfTUFSR0lOIH0gZnJvbSAnLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xyXG4gICAgcG9zaXRpb246IFBvaW50O1xyXG4gICAgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBjb2xvcjogSFNMQ29sb3I7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENpcmNsZS5cclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb2ludCwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFNMQ29sb3J9IGNvbG9yXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIHNldENvbG9yKGNvbG9yOiBIU0xDb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IG90aGVyQ2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgaW50ZXJzZWN0c1dpdGgob3RoZXJDaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gUG9pbnQuZGlzdGFuY2UodGhpcy5wb3NpdGlvbiwgb3RoZXJDaXJjbGUucG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSB0aGlzLnJhZGl1cyArIG90aGVyQ2lyY2xlLnJhZGl1cyArIENJUkNMRV9NQVJHSU47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5hcmMoXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBsb3dlckJvdW5kXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSB1cHBlckJvdW5kXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSByYWRpdXNCb3VuZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgIGxvd2VyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHVwcGVyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHJhZGl1c0JvdW5kOiBQb2ludFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUoXHJcbiAgICAgICAgICAgIFBvaW50LmdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLnksXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLnlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQocmFkaXVzQm91bmQueCwgcmFkaXVzQm91bmQueSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NpcmNsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=