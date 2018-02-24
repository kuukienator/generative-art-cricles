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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CIRCLE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_ITERATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MIN_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_RADIUS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__ = __webpack_require__(3);

var BASE_COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](318, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](210, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](100, 90, 80)
];
var COLORS = [];
var CIRCLE_MARGIN = 10;
var MAX_ITERATIONS = 50000;
var MIN_RADIUS = 10;
var MAX_RADIUS = 100;


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HSLColor__ = __webpack_require__(3);




var App = /** @class */ (function () {
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__circle_canvas__["a" /* default */](containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);
        var baseColor = __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* BASE_COLORS */]);
        for (var i = 0; i < 3; i++) {
            __WEBPACK_IMPORTED_MODULE_1__config_index__["c" /* COLORS */].push(new __WEBPACK_IMPORTED_MODULE_3__HSLColor__["a" /* default */](baseColor.hue, baseColor.saturation, baseColor.lightness - i * 20));
        }
        canvas.generateRandomCircles(350);
        canvas.draw();
    }
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
        var _loop_1 = function (index) {
            var iterationCount = 0;
            var _circle;
            var _isValid = void 0;
            do {
                iterationCount++;
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__config_index__["f" /* MIN_RADIUS */], __WEBPACK_IMPORTED_MODULE_2__config_index__["e" /* MAX_RADIUS */]));
                _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_2__config_index__["c" /* COLORS */]));
                _isValid =
                    this_1.isInsideBounds(_circle) &&
                        !this_1._circles.some(function (c) { return c.intersectsWith(_circle); });
                if (!_isValid) {
                    _circle = null;
                }
            } while (!_isValid && iterationCount < __WEBPACK_IMPORTED_MODULE_2__config_index__["d" /* MAX_ITERATIONS */]);
            if (_circle) {
                this_1._circles.push(_circle);
            }
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    /**
     *
     *
     * @memberof Canvas
     */
    Canvas.prototype.draw = function () {
        var _this = this;
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
        return distance <= this.radius + otherCircle.radius + __WEBPACK_IMPORTED_MODULE_2__config_index__["b" /* CIRCLE_MARGIN */];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTc4MWJiMTgyZDg3MjNmYzEwMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSFNMQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUFBOzs7OztHQUtHO0FBQ0g7SUFBQTtJQTRCQSxDQUFDO0lBM0JHOzs7Ozs7OztPQVFHO0lBQ0ksaUJBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEdBQVc7UUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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QUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxDQUNmLEVBQ0QsdURBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTc4MWJiMTgyZDg3MjNmYzEwMzgiLCIvKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgVXRpbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVXRpbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0ZW1wbGF0ZSBUXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XHJcbiAgICAgKiBAcmV0dXJucyB7VH1cclxuICAgICAqIEBtZW1iZXJvZiBVdGlsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21FbnRyeTxUPihsaXN0OiBBcnJheTxUPik6IFQge1xyXG4gICAgICAgIHJldHVybiBsaXN0W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGxpc3QubGVuZ3RoKV07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlsLnRzIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFBvaW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFBvaW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLFxyXG4gICAgICAgIG1heFg6IG51bWJlcixcclxuICAgICAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICAgICAgbWF4WTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWSwgbWF4WSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwiaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vLi4vY29tcG9uZW50cy9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9DT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMzE4LCA5MCwgODApLFxyXG4gICAgbmV3IEhTTENvbG9yKDIxMCwgOTAsIDgwKSxcclxuICAgIG5ldyBIU0xDb2xvcigxMDAsIDkwLCA4MClcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtdO1xyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gMTA7XHJcbmV4cG9ydCBjb25zdCBNQVhfSVRFUkFUSU9OUzogbnVtYmVyID0gNTAwMDA7XHJcbmV4cG9ydCBjb25zdCBNSU5fUkFESVVTOiBudW1iZXIgPSAxMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9SQURJVVM6IG51bWJlciA9IDEwMDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy9pbmRleC50cyIsIi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBIU0xDb2xvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFNMQ29sb3Ige1xyXG4gICAgaHVlOiBudW1iZXI7XHJcbiAgICBzYXR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBsaWdodG5lc3M6IG51bWJlcjtcclxuICAgIGFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEhTTENvbG9yLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthPTFdXHJcbiAgICAgKiBAbWVtYmVyb2YgSFNMQ29sb3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaDogbnVtYmVyLCBzOiBudW1iZXIsIGw6IG51bWJlciwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLmh1ZSA9IGg7XHJcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gcztcclxuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IGw7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAbWVtYmVyb2YgSFNMQ29sb3JcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYGhzbGEoJHt0aGlzLmh1ZX0sJHt0aGlzLnNhdHVyYXRpb259JSwke3RoaXMubGlnaHRuZXNzfSUsJHtcclxuICAgICAgICAgICAgdGhpcy5hbHBoYVxyXG4gICAgICAgIH0pYDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IU0xDb2xvci50cyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcblxyXG4oKCkgPT4gbmV3IEFwcCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IENpcmNsZUNhbnZhcyBmcm9tICcuL2NpcmNsZS1jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBDT0xPUlMsIEJBU0VfQ09MT1JTIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL2xpYi91dGlsJztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDaXJjbGVDYW52YXMoY29udGFpbmVyRWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlQ29sb3IgPSBVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPihCQVNFX0NPTE9SUyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIENPTE9SUy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IEhTTENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvci5odWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yLnNhdHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yLmxpZ2h0bmVzcyAtIGkgKiAyMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlcygzNTApO1xyXG4gICAgICAgIGNhbnZhcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDYW52YXMgZXh0ZW5kcyBDYW52YXMge1xyXG4gICAgX3Bvc2l0aW9uOiBQb2ludDtcclxuICAgIF9yYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVDYW52YXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzbWFsbGVyU2lkZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lckVsZW1lbnQsIHNtYWxsZXJTaWRlLCBzbWFsbGVyU2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHNtYWxsZXJTaWRlIC8gMjtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBjaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZUNhbnZhc1xyXG4gICAgICovXHJcbiAgICBpc0luc2lkZUJvdW5kcyhjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFBvaW50LmRpc3RhbmNlKGNpcmNsZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pICsgY2lyY2xlLnJhZGl1cyA8XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLWNhbnZhcy50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgICBNQVhfSVRFUkFUSU9OUyxcclxuICAgIENPTE9SUyxcclxuICAgIE1JTl9SQURJVVMsXHJcbiAgICBNQVhfUkFESVVTXHJcbn0gZnJvbSAnLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCBIU0xDb2xvciBmcm9tICcuL0hTTENvbG9yJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBDYW52YXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIF9jaXJjbGVzOiBBcnJheTxDaXJjbGU+O1xyXG4gICAgX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIF93aWR0aDogbnVtYmVyO1xyXG4gICAgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDYW52YXMuXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lckVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IGNpcmNsZVxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBhZGRDaXJjbGUoY2lyY2xlOiBDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxDaXJjbGU+fSBjaXJjbGVzXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZXMoY2lyY2xlczogQXJyYXk8Q2lyY2xlPikge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMgPSB0aGlzLl9jaXJjbGVzLmNvbmNhdChjaXJjbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IGNpcmNsZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlQm91bmRzKGNpcmNsZTogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggLSBjaXJjbGUucmFkaXVzID4gMCAmJlxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueSAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi54ICsgY2lyY2xlLnJhZGl1cyA8IHRoaXMuX3dpZHRoICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55ICsgY2lyY2xlLnJhZGl1cyA8IHRoaXMuX2hlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJhbmRvbUNpcmNsZXMoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9uQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgX2NpcmNsZTogQ2lyY2xlO1xyXG4gICAgICAgICAgICBsZXQgX2lzVmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xyXG4gICAgICAgICAgICAgICAgX2NpcmNsZSA9IENpcmNsZS5nZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgdGhpcy5fd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChNSU5fUkFESVVTLCBNQVhfUkFESVVTKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfY2lyY2xlLnNldENvbG9yKFV0aWwuZ2V0UmFuZG9tRW50cnk8SFNMQ29sb3I+KENPTE9SUykpO1xyXG5cclxuICAgICAgICAgICAgICAgIF9pc1ZhbGlkID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSW5zaWRlQm91bmRzKF9jaXJjbGUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuX2NpcmNsZXMuc29tZShjID0+IGMuaW50ZXJzZWN0c1dpdGgoX2NpcmNsZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghX2lzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfY2lyY2xlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoIV9pc1ZhbGlkICYmIGl0ZXJhdGlvbkNvdW50IDwgTUFYX0lURVJBVElPTlMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF9jaXJjbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChfY2lyY2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMuZm9yRWFjaChjaXJjbGUgPT4ge1xyXG4gICAgICAgICAgICBjaXJjbGUuZHJhdyh0aGlzLl9jb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMudHMiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLy4uL2xpYi91dGlsJztcclxuaW1wb3J0IHsgQ0lSQ0xFX01BUkdJTiB9IGZyb20gJy4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENpcmNsZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBQb2ludDtcclxuICAgIHJhZGl1czogbnVtYmVyO1xyXG4gICAgY29sb3I6IEhTTENvbG9yO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDaXJjbGUuXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9pbnQsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hTTENvbG9yfSBjb2xvclxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBzZXRDb2xvcihjb2xvcjogSFNMQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBvdGhlckNpcmNsZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGludGVyc2VjdHNXaXRoKG90aGVyQ2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRoaXMucG9zaXRpb24sIG90aGVyQ2lyY2xlLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gdGhpcy5yYWRpdXMgKyBvdGhlckNpcmNsZS5yYWRpdXMgKyBDSVJDTEVfTUFSR0lOO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dFxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvci50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIE1hdGguUEkgKiAyLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtQb2ludH0gbG93ZXJCb3VuZFxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gdXBwZXJCb3VuZFxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcmFkaXVzQm91bmRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICBsb3dlckJvdW5kOiBQb2ludCxcclxuICAgICAgICB1cHBlckJvdW5kOiBQb2ludCxcclxuICAgICAgICByYWRpdXNCb3VuZDogUG9pbnRcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2lyY2xlKFxyXG4gICAgICAgICAgICBQb2ludC5nZW5lcmF0ZVJhbmRvbVBvaW50KFxyXG4gICAgICAgICAgICAgICAgbG93ZXJCb3VuZC54LFxyXG4gICAgICAgICAgICAgICAgbG93ZXJCb3VuZC55LFxyXG4gICAgICAgICAgICAgICAgdXBwZXJCb3VuZC54LFxyXG4gICAgICAgICAgICAgICAgdXBwZXJCb3VuZC55XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KHJhZGl1c0JvdW5kLngsIHJhZGl1c0JvdW5kLnkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiXSwic291cmNlUm9vdCI6IiJ9