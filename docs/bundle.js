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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MAX_ITERATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MAX_ITERATIONS_PER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MIN_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MAX_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IS_DEBUG; });
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
var MIN_RADIUS = 5;
var MAX_RADIUS = 250;
var IS_DEBUG = true;


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HSLColor__ = __webpack_require__(3);




var App = /** @class */ (function () {
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        //const canvas = new CircleCanvas(containerElement, width, height);
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */](containerElement, width, height);
        var baseColor = __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* BASE_COLORS */]);
        for (var i = 0; i < 3; i++) {
            __WEBPACK_IMPORTED_MODULE_1__config_index__["c" /* COLORS */].push(new __WEBPACK_IMPORTED_MODULE_3__HSLColor__["a" /* default */](baseColor.hue, baseColor.saturation, baseColor.lightness - i * 20));
        }
        canvas.generateRandomCircles(200);
        //canvas.draw();
    }
    return App;
}());
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 6 */,
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
            var iterationCountForSection = 0;
            var maxRadiusPercentage = 1;
            var _circle;
            var _isValid = void 0;
            do {
                iterationCount++;
                iterationCountForSection++;
                if (iterationCountForSection === __WEBPACK_IMPORTED_MODULE_2__config_index__["f" /* MAX_ITERATIONS_PER_SECTION */]) {
                    iterationCountForSection = 0;
                    maxRadiusPercentage -= 0.1;
                    maxRadiusPercentage = Math.max(maxRadiusPercentage, 0.25);
                }
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__config_index__["h" /* MIN_RADIUS */], __WEBPACK_IMPORTED_MODULE_2__config_index__["g" /* MAX_RADIUS */] * maxRadiusPercentage));
                _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_2__config_index__["c" /* COLORS */]));
                _isValid =
                    this_1.isInsideBounds(_circle) &&
                        !this_1._circles.some(function (c) { return c.intersectsWith(_circle); });
                if (!_isValid) {
                    _circle = null;
                }
            } while (!_isValid && iterationCount < __WEBPACK_IMPORTED_MODULE_2__config_index__["e" /* MAX_ITERATIONS */]);
            if (_circle) {
                this_1._circles.push(_circle);
                if (__WEBPACK_IMPORTED_MODULE_2__config_index__["d" /* IS_DEBUG */]) {
                    this_1.draw();
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzllYTViMzUwYzU0ZjJiMzQ1YzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSFNMQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTs7Ozs7R0FLRztBQUNIO0lBQUE7SUE0QkEsQ0FBQztJQTNCRzs7Ozs7Ozs7T0FRRztJQUNJLGlCQUFZLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxHQUFXO1FBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcs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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzllYTViMzUwYzU0ZjJiMzQ1YzkiLCIvKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgVXRpbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVXRpbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0ZW1wbGF0ZSBUXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XHJcbiAgICAgKiBAcmV0dXJucyB7VH1cclxuICAgICAqIEBtZW1iZXJvZiBVdGlsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21FbnRyeTxUPihsaXN0OiBBcnJheTxUPik6IFQge1xyXG4gICAgICAgIHJldHVybiBsaXN0W3RoaXMuZ2V0UmFuZG9tSW50KDAsIGxpc3QubGVuZ3RoKV07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlsLnRzIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFBvaW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFBvaW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLFxyXG4gICAgICAgIG1heFg6IG51bWJlcixcclxuICAgICAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICAgICAgbWF4WTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWSwgbWF4WSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwiaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vLi4vY29tcG9uZW50cy9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9DT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMzE4LCA5MCwgODApLFxyXG4gICAgbmV3IEhTTENvbG9yKDIxMCwgOTAsIDgwKSxcclxuICAgIG5ldyBIU0xDb2xvcigxMDAsIDkwLCA4MClcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtdO1xyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gNTtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TOiBudW1iZXIgPSA1MDAwMDtcclxuZXhwb3J0IGNvbnN0IE1BWF9JVEVSQVRJT05TX1BFUl9TRUNUSU9OOiBudW1iZXIgPSAyMDAwO1xyXG5leHBvcnQgY29uc3QgTUlOX1JBRElVUzogbnVtYmVyID0gNTtcclxuZXhwb3J0IGNvbnN0IE1BWF9SQURJVVM6IG51bWJlciA9IDI1MDtcclxuZXhwb3J0IGNvbnN0IElTX0RFQlVHOiBib29sZWFuID0gdHJ1ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy9pbmRleC50cyIsIi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBIU0xDb2xvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFNMQ29sb3Ige1xyXG4gICAgaHVlOiBudW1iZXI7XHJcbiAgICBzYXR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBsaWdodG5lc3M6IG51bWJlcjtcclxuICAgIGFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEhTTENvbG9yLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthPTFdXHJcbiAgICAgKiBAbWVtYmVyb2YgSFNMQ29sb3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaDogbnVtYmVyLCBzOiBudW1iZXIsIGw6IG51bWJlciwgYSA9IDEpIHtcclxuICAgICAgICB0aGlzLmh1ZSA9IGg7XHJcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gcztcclxuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IGw7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAbWVtYmVyb2YgSFNMQ29sb3JcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYGhzbGEoJHt0aGlzLmh1ZX0sJHt0aGlzLnNhdHVyYXRpb259JSwke3RoaXMubGlnaHRuZXNzfSUsJHtcclxuICAgICAgICAgICAgdGhpcy5hbHBoYVxyXG4gICAgICAgIH0pYDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IU0xDb2xvci50cyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcblxyXG4oKCkgPT4gbmV3IEFwcCgpKSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IENpcmNsZUNhbnZhcyBmcm9tICcuL2NpcmNsZS1jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBDT0xPUlMsIEJBU0VfQ09MT1JTIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL2xpYi91dGlsJztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIC8vY29uc3QgY2FudmFzID0gbmV3IENpcmNsZUNhbnZhcyhjb250YWluZXJFbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlQ29sb3IgPSBVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPihCQVNFX0NPTE9SUyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIENPTE9SUy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IEhTTENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvci5odWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yLnNhdHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yLmxpZ2h0bmVzcyAtIGkgKiAyMFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlcygyMDApO1xyXG4gICAgICAgIC8vY2FudmFzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gICAgTUFYX0lURVJBVElPTlMsXHJcbiAgICBDT0xPUlMsXHJcbiAgICBNSU5fUkFESVVTLFxyXG4gICAgTUFYX1JBRElVUyxcclxuICAgIE1BWF9JVEVSQVRJT05TX1BFUl9TRUNUSU9OLFxyXG4gICAgSVNfREVCVUdcclxufSBmcm9tICcuLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENhbnZhc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChjaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PENpcmNsZT59IGNpcmNsZXNcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgYWRkQ2lyY2xlcyhjaXJjbGVzOiBBcnJheTxDaXJjbGU+KSB7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IHRoaXMuX2NpcmNsZXMuY29uY2F0KGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueCAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5fd2lkdGggJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmFuZG9tQ2lyY2xlcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25Db3VudEZvclNlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICBsZXQgbWF4UmFkaXVzUGVyY2VudGFnZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCBfY2lyY2xlOiBDaXJjbGU7XHJcbiAgICAgICAgICAgIGxldCBfaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudEZvclNlY3Rpb24rKztcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25Db3VudEZvclNlY3Rpb24gPT09IE1BWF9JVEVSQVRJT05TX1BFUl9TRUNUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnRGb3JTZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSYWRpdXNQZXJjZW50YWdlIC09IDAuMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSYWRpdXNQZXJjZW50YWdlID0gTWF0aC5tYXgobWF4UmFkaXVzUGVyY2VudGFnZSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgX2NpcmNsZSA9IENpcmNsZS5nZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgdGhpcy5fd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChNSU5fUkFESVVTLCBNQVhfUkFESVVTICogbWF4UmFkaXVzUGVyY2VudGFnZSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPihDT0xPUlMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfaXNWYWxpZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0luc2lkZUJvdW5kcyhfY2lyY2xlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLl9jaXJjbGVzLnNvbWUoYyA9PiBjLmludGVyc2VjdHNXaXRoKF9jaXJjbGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIV9pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2NpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKCFfaXNWYWxpZCAmJiBpdGVyYXRpb25Db3VudCA8IE1BWF9JVEVSQVRJT05TKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfY2lyY2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goX2NpcmNsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoSVNfREVCVUcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1xyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMuZm9yRWFjaChjaXJjbGUgPT4ge1xyXG4gICAgICAgICAgICBjaXJjbGUuZHJhdyh0aGlzLl9jb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jYW52YXMudHMiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLy4uL2xpYi91dGlsJztcclxuaW1wb3J0IHsgQ0lSQ0xFX01BUkdJTiB9IGZyb20gJy4vLi4vY29uZmlnL2luZGV4JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENpcmNsZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBQb2ludDtcclxuICAgIHJhZGl1czogbnVtYmVyO1xyXG4gICAgY29sb3I6IEhTTENvbG9yO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDaXJjbGUuXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9pbnQsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hTTENvbG9yfSBjb2xvclxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBzZXRDb2xvcihjb2xvcjogSFNMQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBvdGhlckNpcmNsZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIGludGVyc2VjdHNXaXRoKG90aGVyQ2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRoaXMucG9zaXRpb24sIG90aGVyQ2lyY2xlLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gdGhpcy5yYWRpdXMgKyBvdGhlckNpcmNsZS5yYWRpdXMgKyBDSVJDTEVfTUFSR0lOO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dFxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvci50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIE1hdGguUEkgKiAyLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtQb2ludH0gbG93ZXJCb3VuZFxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gdXBwZXJCb3VuZFxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcmFkaXVzQm91bmRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICBsb3dlckJvdW5kOiBQb2ludCxcclxuICAgICAgICB1cHBlckJvdW5kOiBQb2ludCxcclxuICAgICAgICByYWRpdXNCb3VuZDogUG9pbnRcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2lyY2xlKFxyXG4gICAgICAgICAgICBQb2ludC5nZW5lcmF0ZVJhbmRvbVBvaW50KFxyXG4gICAgICAgICAgICAgICAgbG93ZXJCb3VuZC54LFxyXG4gICAgICAgICAgICAgICAgbG93ZXJCb3VuZC55LFxyXG4gICAgICAgICAgICAgICAgdXBwZXJCb3VuZC54LFxyXG4gICAgICAgICAgICAgICAgdXBwZXJCb3VuZC55XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KHJhZGl1c0JvdW5kLngsIHJhZGl1c0JvdW5kLnkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiXSwic291cmNlUm9vdCI6IiJ9