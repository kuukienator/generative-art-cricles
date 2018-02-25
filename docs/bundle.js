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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_ITERATIONS_PER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MIN_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MAX_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOW_ANIMATIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__ = __webpack_require__(3);

var BASE_COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](318, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](210, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](100, 90, 80)
];
var COLORS = [];
var CIRCLE_MARGIN = 5;
var MAX_ITERATIONS = 50000;
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
        canvas.generateRandomCirclesRecursive(2000);
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
        if (__WEBPACK_IMPORTED_MODULE_2__config_index__["h" /* SHOW_ANIMATIONS */]) {
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
            if (iterationCountForSection === __WEBPACK_IMPORTED_MODULE_2__config_index__["e" /* MAX_ITERATIONS_PER_SECTION */]) {
                iterationCountForSection = 0;
                maxRadiusPercentage -= 0.1;
                maxRadiusPercentage = Math.max(maxRadiusPercentage, 0.25);
            }
            _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this._width), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this._height), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__config_index__["g" /* MIN_RADIUS */], __WEBPACK_IMPORTED_MODULE_2__config_index__["f" /* MAX_RADIUS */] * maxRadiusPercentage));
            _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_2__config_index__["c" /* COLORS */]));
            _isValid =
                this.isInsideBounds(_circle) &&
                    !this._circles.some(function (c) { return c.intersectsWith(_circle); });
            if (!_isValid) {
                _circle = null;
            }
        } while (!_isValid && iterationCount < __WEBPACK_IMPORTED_MODULE_2__config_index__["d" /* MAX_ITERATIONS */]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzRiMjBjY2I1MDRlNjZiNDhjZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSFNMQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUFBOzs7OztHQUtHO0FBQ0g7SUFBQTtJQTRCQSxDQUFDO0lBM0JHOzs7Ozs7OztPQVFHO0lBQ0ksaUJBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEdBQVc7UUFDeEMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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QUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLE1BQU0sRUFDWCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ1gsSUFBSSxDQUNQLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLDJCQUFvQixHQUEzQixVQUNJLFVBQWlCLEVBQ2pCLFVBQWlCLEVBQ2pCLFdBQWtCO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FDYix1REFBSyxDQUFDLG1CQUFtQixDQUNyQixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxDQUNmLEVBQ0QsdURBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzRiMjBjY2I1MDRlNjZiNDhjZGIiLCIvKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgVXRpbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVXRpbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0ZW1wbGF0ZSBUXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XHJcbiAgICAgKiBAcmV0dXJucyB7VH1cclxuICAgICAqIEBtZW1iZXJvZiBVdGlsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21FbnRyeTxUPihsaXN0OiBBcnJheTxUPik6IFQge1xyXG4gICAgICAgIHJldHVybiBsaXN0W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGxpc3QubGVuZ3RoKV07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlsLnRzIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFBvaW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFBvaW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLFxyXG4gICAgICAgIG1heFg6IG51bWJlcixcclxuICAgICAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICAgICAgbWF4WTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWSwgbWF4WSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwiaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vLi4vY29tcG9uZW50cy9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9DT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMzE4LCA5MCwgODApLFxyXG4gICAgbmV3IEhTTENvbG9yKDIxMCwgOTAsIDgwKSxcclxuICAgIG5ldyBIU0xDb2xvcigxMDAsIDkwLCA4MClcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtdO1xyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gNTtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TOiBudW1iZXIgPSA1MDAwMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TX1BFUl9TRUNUSU9OOiBudW1iZXIgPSAyMDAwO1xyXG5leHBvcnQgY29uc3QgTUlOX1JBRElVUzogbnVtYmVyID0gMTA7XHJcbmV4cG9ydCBjb25zdCBNQVhfUkFESVVTOiBudW1iZXIgPSAxNTA7XHJcbmV4cG9ydCBjb25zdCBTSE9XX0FOSU1BVElPTlM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnL2luZGV4LnRzIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEhTTENvbG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIU0xDb2xvciB7XHJcbiAgICBodWU6IG51bWJlcjtcclxuICAgIHNhdHVyYXRpb246IG51bWJlcjtcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFNMQ29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2E9MV1cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaHVlID0gaDtcclxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzO1xyXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgICAgICB0aGlzLmFscGhhID0gYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hTTENvbG9yLnRzIiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuXHJcbigoKSA9PiBuZXcgQXBwKCkpKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlQ2FudmFzIGZyb20gJy4vY2lyY2xlLWNhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7IENPTE9SUywgQkFTRV9DT0xPUlMgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vbGliL3V0aWwnO1xyXG5pbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IENpcmNsZUNhbnZhcyhjb250YWluZXJFbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL2NvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoY29udGFpbmVyRWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VDb2xvciA9IFV0aWwuZ2V0UmFuZG9tRW50cnk8SFNMQ29sb3I+KEJBU0VfQ09MT1JTKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgQ09MT1JTLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgSFNMQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yLmh1ZSxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3Iuc2F0dXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3IubGlnaHRuZXNzIC0gaSAqIDIwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMuZ2VuZXJhdGVSYW5kb21DaXJjbGVzUmVjdXJzaXZlKDIwMDApO1xyXG4gICAgICAgIGNhbnZhcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDYW52YXMgZXh0ZW5kcyBDYW52YXMge1xyXG4gICAgX3Bvc2l0aW9uOiBQb2ludDtcclxuICAgIF9yYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVDYW52YXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzbWFsbGVyU2lkZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lckVsZW1lbnQsIHNtYWxsZXJTaWRlLCBzbWFsbGVyU2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHNtYWxsZXJTaWRlIC8gMjtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBjaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZUNhbnZhc1xyXG4gICAgICovXHJcbiAgICBpc0luc2lkZUJvdW5kcyhjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFBvaW50LmRpc3RhbmNlKGNpcmNsZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pICsgY2lyY2xlLnJhZGl1cyA8XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLWNhbnZhcy50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgICBNQVhfSVRFUkFUSU9OUyxcclxuICAgIENPTE9SUyxcclxuICAgIE1JTl9SQURJVVMsXHJcbiAgICBNQVhfUkFESVVTLFxyXG4gICAgTUFYX0lURVJBVElPTlNfUEVSX1NFQ1RJT04sXHJcbiAgICBTSE9XX0FOSU1BVElPTlNcclxufSBmcm9tICcuLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENhbnZhc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChjaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PENpcmNsZT59IGNpcmNsZXNcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgYWRkQ2lyY2xlcyhjaXJjbGVzOiBBcnJheTxDaXJjbGU+KSB7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IHRoaXMuX2NpcmNsZXMuY29uY2F0KGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueCAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5fd2lkdGggJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmFuZG9tQ2lyY2xlcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9jaXJjbGUgPSB0aGlzLl9jcmVhdGVDaXJjbGUoKTtcclxuICAgICAgICAgICAgaWYgKF9jaXJjbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChfY2lyY2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmFuZG9tQ2lyY2xlc1JlY3Vyc2l2ZShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEb25lIGNyZWF0aW5nIGNpcmNsZXMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBjb25zdCBfY2lyY2xlID0gdGhpcy5fY3JlYXRlQ2lyY2xlKCk7XHJcbiAgICAgICAgaWYgKF9jaXJjbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2lyY2xlcy5wdXNoKF9jaXJjbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFNIT1dfQU5JTUFUSU9OUykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ2VuZXJhdGVSYW5kb21DaXJjbGVzUmVjdXJzaXZlKGNvdW50KSwgMTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlc1JlY3Vyc2l2ZShjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBfY3JlYXRlQ2lyY2xlKCkge1xyXG4gICAgICAgIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGl0ZXJhdGlvbkNvdW50Rm9yU2VjdGlvbiA9IDA7XHJcbiAgICAgICAgbGV0IG1heFJhZGl1c1BlcmNlbnRhZ2UgPSAxO1xyXG4gICAgICAgIGxldCBfY2lyY2xlOiBDaXJjbGU7XHJcbiAgICAgICAgbGV0IF9pc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Rm9yU2VjdGlvbisrO1xyXG4gICAgICAgICAgICBpZiAoaXRlcmF0aW9uQ291bnRGb3JTZWN0aW9uID09PSBNQVhfSVRFUkFUSU9OU19QRVJfU0VDVElPTikge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnRGb3JTZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIG1heFJhZGl1c1BlcmNlbnRhZ2UgLT0gMC4xO1xyXG4gICAgICAgICAgICAgICAgbWF4UmFkaXVzUGVyY2VudGFnZSA9IE1hdGgubWF4KG1heFJhZGl1c1BlcmNlbnRhZ2UsIDAuMjUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfY2lyY2xlID0gQ2lyY2xlLmdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIHRoaXMuX3dpZHRoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBvaW50KE1JTl9SQURJVVMsIE1BWF9SQURJVVMgKiBtYXhSYWRpdXNQZXJjZW50YWdlKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPihDT0xPUlMpKTtcclxuXHJcbiAgICAgICAgICAgIF9pc1ZhbGlkID1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbnNpZGVCb3VuZHMoX2NpcmNsZSkgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLl9jaXJjbGVzLnNvbWUoYyA9PiBjLmludGVyc2VjdHNXaXRoKF9jaXJjbGUpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghX2lzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIF9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoIV9pc1ZhbGlkICYmIGl0ZXJhdGlvbkNvdW50IDwgTUFYX0lURVJBVElPTlMpO1xyXG5cclxuICAgICAgICByZXR1cm4gX2NpcmNsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiB7XHJcbiAgICAgICAgICAgIGNpcmNsZS5kcmF3KHRoaXMuX2NvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5pbXBvcnQgeyBDSVJDTEVfTUFSR0lOIH0gZnJvbSAnLi8uLi9jb25maWcvaW5kZXgnO1xyXG5pbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xyXG4gICAgcG9zaXRpb246IFBvaW50O1xyXG4gICAgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBjb2xvcjogSFNMQ29sb3I7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENpcmNsZS5cclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb2ludCwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFNMQ29sb3J9IGNvbG9yXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIHNldENvbG9yKGNvbG9yOiBIU0xDb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDaXJjbGV9IG90aGVyQ2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgaW50ZXJzZWN0c1dpdGgob3RoZXJDaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gUG9pbnQuZGlzdGFuY2UodGhpcy5wb3NpdGlvbiwgb3RoZXJDaXJjbGUucG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSB0aGlzLnJhZGl1cyArIG90aGVyQ2lyY2xlLnJhZGl1cyArIENJUkNMRV9NQVJHSU47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5hcmMoXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgTWF0aC5QSSAqIDIsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBsb3dlckJvdW5kXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSB1cHBlckJvdW5kXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSByYWRpdXNCb3VuZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgIGxvd2VyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHVwcGVyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHJhZGl1c0JvdW5kOiBQb2ludFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUoXHJcbiAgICAgICAgICAgIFBvaW50LmdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLnksXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLnlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQocmFkaXVzQm91bmQueCwgcmFkaXVzQm91bmQueSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NpcmNsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=