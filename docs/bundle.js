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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(1);

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
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CIRCLE_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAX_ITERATIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__ = __webpack_require__(8);

var COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 90),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 70)
];
var CIRCLE_MARGIN = 10;
var MAX_ITERATIONS = 50000;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(4);

(function () { return new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* default */](); })();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_canvas__ = __webpack_require__(5);

var App = /** @class */ (function () {
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__circle_canvas__["a" /* default */](containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);
        canvas.generateRandomCircles(350);
        canvas.draw();
    }
    return App;
}());
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(0);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(0);




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
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_3__point__["a" /* default */](5, 150));
                _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* Util */].getRandomEntry(__WEBPACK_IMPORTED_MODULE_2__config_index__["b" /* COLORS */]));
                _isValid =
                    this_1.isInsideBounds(_circle) &&
                        !this_1._circles.some(function (c) { return c.intersectsWith(_circle); });
                if (!_isValid) {
                    _circle = null;
                }
            } while (!_isValid && iterationCount < __WEBPACK_IMPORTED_MODULE_2__config_index__["c" /* MAX_ITERATIONS */]);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(1);
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


/***/ }),
/* 8 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM5NWFjYWZmYTc3ZTk1YzAwZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSFNMQ29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3RHFDO0FBRXJDOzs7OztHQUtHO0FBQ0g7SUFJSTs7Ozs7T0FLRztJQUNILGVBQVksQ0FBUyxFQUFFLENBQVM7UUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNm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LG1CQUFtQixDQUNyQixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxDQUNmLEVBQ0QsdURBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7OztBQy9GRDs7Ozs7R0FLRztBQUNIO0lBTUk7Ozs7Ozs7T0FPRztJQUNILGtCQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQUs7UUFBTCx5QkFBSztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsVUFBUSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQUksQ0FBQyxVQUFVLFVBQUssSUFBSSxDQUFDLFNBQVMsVUFDekQsSUFBSSxDQUFDLEtBQUssTUFDWCxDQUFDO0lBQ1IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFjOTVhY2FmZmE3N2U5NWMwMGQ1IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vLi4vbGliL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFBvaW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFBvaW50LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9pbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLFxyXG4gICAgICAgIG1heFg6IG51bWJlcixcclxuICAgICAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICAgICAgbWF4WTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWSwgbWF4WSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BvaW50LnRzIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFV0aWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFV0aWxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdGVtcGxhdGUgVFxyXG4gICAgICogQHBhcmFtIHtBcnJheTxUPn0gbGlzdFxyXG4gICAgICogQHJldHVybnMge1R9XHJcbiAgICAgKiBAbWVtYmVyb2YgVXRpbFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tRW50cnk8VD4obGlzdDogQXJyYXk8VD4pOiBUIHtcclxuICAgICAgICByZXR1cm4gbGlzdFt0aGlzLmdldFJhbmRvbUludCgwLCBsaXN0Lmxlbmd0aCldO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbC50cyIsImltcG9ydCBIU0xDb2xvciBmcm9tICcuLy4uL2NvbXBvbmVudHMvSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUzogQXJyYXk8SFNMQ29sb3I+ID0gW1xyXG4gICAgbmV3IEhTTENvbG9yKDI3MCwgOTAsIDkwKSxcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgNzApXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gMTA7XHJcbmV4cG9ydCBjb25zdCBNQVhfSVRFUkFUSU9OUzogbnVtYmVyID0gNTAwMDA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcvaW5kZXgudHMiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5cclxuKCgpID0+IG5ldyBBcHAoKSkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGVDYW52YXMgZnJvbSAnLi9jaXJjbGUtY2FudmFzJztcclxuaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZSc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2lyY2xlQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vY29uc3QgY2FudmFzID0gbmV3IENhbnZhcyhjb250YWluZXJFbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY2FudmFzLmdlbmVyYXRlUmFuZG9tQ2lyY2xlcygzNTApO1xyXG4gICAgICAgIGNhbnZhcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2lyY2xlQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDYW52YXMgZXh0ZW5kcyBDYW52YXMge1xyXG4gICAgX3Bvc2l0aW9uOiBQb2ludDtcclxuICAgIF9yYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVDYW52YXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzbWFsbGVyU2lkZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHN1cGVyKGNvbnRhaW5lckVsZW1lbnQsIHNtYWxsZXJTaWRlLCBzbWFsbGVyU2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHNtYWxsZXJTaWRlIC8gMjtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q2lyY2xlfSBjaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZUNhbnZhc1xyXG4gICAgICovXHJcbiAgICBpc0luc2lkZUJvdW5kcyhjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFBvaW50LmRpc3RhbmNlKGNpcmNsZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pICsgY2lyY2xlLnJhZGl1cyA8XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLWNhbnZhcy50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7IE1BWF9JVEVSQVRJT05TLCBDT0xPUlMgfSBmcm9tICcuLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENhbnZhc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChjaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PENpcmNsZT59IGNpcmNsZXNcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgYWRkQ2lyY2xlcyhjaXJjbGVzOiBBcnJheTxDaXJjbGU+KSB7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IHRoaXMuX2NpcmNsZXMuY29uY2F0KGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueCAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5fd2lkdGggJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmFuZG9tQ2lyY2xlcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25Db3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBfY2lyY2xlOiBDaXJjbGU7XHJcbiAgICAgICAgICAgIGxldCBfaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBfY2lyY2xlID0gQ2lyY2xlLmdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl93aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIHRoaXMuX2hlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KDUsIDE1MClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihVdGlsLmdldFJhbmRvbUVudHJ5PEhTTENvbG9yPihDT0xPUlMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBfaXNWYWxpZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0luc2lkZUJvdW5kcyhfY2lyY2xlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLl9jaXJjbGVzLnNvbWUoYyA9PiBjLmludGVyc2VjdHNXaXRoKF9jaXJjbGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIV9pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2NpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKCFfaXNWYWxpZCAmJiBpdGVyYXRpb25Db3VudCA8IE1BWF9JVEVSQVRJT05TKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfY2lyY2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goX2NpcmNsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IHtcclxuICAgICAgICAgICAgY2lyY2xlLmRyYXcodGhpcy5fY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLnRzIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCB7IENJUkNMRV9NQVJHSU4gfSBmcm9tICcuLy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCBIU0xDb2xvciBmcm9tICcuL0hTTENvbG9yJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBDaXJjbGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogUG9pbnQ7XHJcbiAgICByYWRpdXM6IG51bWJlcjtcclxuICAgIGNvbG9yOiBIU0xDb2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlLlxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIU0xDb2xvcn0gY29sb3JcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgc2V0Q29sb3IoY29sb3I6IEhTTENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gb3RoZXJDaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBpbnRlcnNlY3RzV2l0aChvdGhlckNpcmNsZTogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBvdGhlckNpcmNsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDw9IHRoaXMucmFkaXVzICsgb3RoZXJDaXJjbGUucmFkaXVzICsgQ0lSQ0xFX01BUkdJTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmFyYyhcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBNYXRoLlBJICogMixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGxvd2VyQm91bmRcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHVwcGVyQm91bmRcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHJhZGl1c0JvdW5kXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb21DaXJjbGUoXHJcbiAgICAgICAgbG93ZXJCb3VuZDogUG9pbnQsXHJcbiAgICAgICAgdXBwZXJCb3VuZDogUG9pbnQsXHJcbiAgICAgICAgcmFkaXVzQm91bmQ6IFBvaW50XHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IENpcmNsZShcclxuICAgICAgICAgICAgUG9pbnQuZ2VuZXJhdGVSYW5kb21Qb2ludChcclxuICAgICAgICAgICAgICAgIGxvd2VyQm91bmQueCxcclxuICAgICAgICAgICAgICAgIGxvd2VyQm91bmQueSxcclxuICAgICAgICAgICAgICAgIHVwcGVyQm91bmQueCxcclxuICAgICAgICAgICAgICAgIHVwcGVyQm91bmQueVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChyYWRpdXNCb3VuZC54LCByYWRpdXNCb3VuZC55KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLnRzIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEhTTENvbG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIU0xDb2xvciB7XHJcbiAgICBodWU6IG51bWJlcjtcclxuICAgIHNhdHVyYXRpb246IG51bWJlcjtcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFNMQ29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2E9MV1cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaHVlID0gaDtcclxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzO1xyXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgICAgICB0aGlzLmFscGhhID0gYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hTTENvbG9yLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==