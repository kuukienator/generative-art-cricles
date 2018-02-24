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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
        return new Point(__WEBPACK_IMPORTED_MODULE_0__lib_util__["c" /* Util */].getRandomInt(minX, maxX), __WEBPACK_IMPORTED_MODULE_0__lib_util__["c" /* Util */].getRandomInt(minY, maxY));
    };
    return Point;
}());
/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CIRCLE_MARGIN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__ = __webpack_require__(7);

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
    return Util;
}());

var COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 90),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__components_HSLColor__["a" /* default */](270, 90, 70)
];
var CIRCLE_MARGIN = 10;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(3);

var app = new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* default */]();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_canvas__ = __webpack_require__(4);

var App = /** @class */ (function () {
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__circle_canvas__["a" /* default */](containerElement, width, height);
        //const canvas = new Canvas(containerElement, width, height);
        canvas.generateRandomCircles(200);
        canvas.draw();
    }
    return App;
}());
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(5);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point__ = __webpack_require__(0);



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
            var _circle;
            do {
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](5, 150));
                _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* COLORS */][__WEBPACK_IMPORTED_MODULE_1__lib_util__["c" /* Util */].getRandomInt(0, __WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* COLORS */].length)]);
            } while (!this_1.isInsideBounds(_circle) ||
                this_1._circles.some(function (c) { return c.intersectsWith(_circle); }));
            this_1._circles.push(_circle);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(1);


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
        return distance <= this.radius + otherCircle.radius + __WEBPACK_IMPORTED_MODULE_1__lib_util__["a" /* CIRCLE_MARGIN */];
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
        return new Circle(__WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].generateRandomPoint(lowerBound.x, lowerBound.y, upperBound.x, upperBound.y), __WEBPACK_IMPORTED_MODULE_1__lib_util__["c" /* Util */].getRandomInt(radiusBound.x, radiusBound.y));
    };
    return Circle;
}());
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 7 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2Y2MmQ3YTJlNDhiZGE5MTg2ZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLWNhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hTTENvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RxQztBQUVyQzs7Ozs7R0FLRztBQUNIO0lBSUk7Ozs7O09BS0c7SUFDSCxlQUFZLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxjQUFRLEdB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R0FBUjtRQUNJLE1BQU0sQ0FBQyxVQUFRLElBQUksQ0FBQyxHQUFHLFNBQUksSUFBSSxDQUFDLFVBQVUsVUFBSyxJQUFJLENBQUMsU0FBUyxVQUN6RCxJQUFJLENBQUMsS0FBSyxNQUNYLENBQUM7SUFDUixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2Y2MmQ3YTJlNDhiZGE5MTg2ZjgiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcblxyXG4vKipcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgUG9pbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcDFcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFBvaW50XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5ZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBQb2ludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb21Qb2ludChcclxuICAgICAgICBtaW5YOiBudW1iZXIsXHJcbiAgICAgICAgbWF4WDogbnVtYmVyLFxyXG4gICAgICAgIG1pblk6IG51bWJlcixcclxuICAgICAgICBtYXhZOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KG1pblgsIG1heFgpLFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChtaW5ZLCBtYXhZKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcG9pbnQudHMiLCJpbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi8uLi9jb21wb25lbnRzL0hTTENvbG9yJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBVdGlsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBVdGlsXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUzogQXJyYXk8SFNMQ29sb3I+ID0gW1xyXG4gICAgbmV3IEhTTENvbG9yKDI3MCwgOTAsIDkwKSxcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgNzApXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ0lSQ0xFX01BUkdJTjogbnVtYmVyID0gMTA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbC50cyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlQ2FudmFzIGZyb20gJy4vY2lyY2xlLWNhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IENpcmNsZUNhbnZhcyhjb250YWluZXJFbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAvL2NvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoY29udGFpbmVyRWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy5nZW5lcmF0ZVJhbmRvbUNpcmNsZXMoMjAwKTtcclxuICAgICAgICBjYW52YXMuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC50cyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENpcmNsZUNhbnZhc1xyXG4gKiBAZXh0ZW5kcyB7Q2FudmFzfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlQ2FudmFzIGV4dGVuZHMgQ2FudmFzIHtcclxuICAgIF9wb3NpdGlvbjogUG9pbnQ7XHJcbiAgICBfcmFkaXVzOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENpcmNsZUNhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2lyY2xlQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc21hbGxlclNpZGUgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBzdXBlcihjb250YWluZXJFbGVtZW50LCBzbWFsbGVyU2lkZSwgc21hbGxlclNpZGUpO1xyXG5cclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSBzbWFsbGVyU2lkZSAvIDI7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXcgUG9pbnQodGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVDYW52YXNcclxuICAgICAqL1xyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBQb2ludC5kaXN0YW5jZShjaXJjbGUucG9zaXRpb24sIHRoaXMuX3Bvc2l0aW9uKSArIGNpcmNsZS5yYWRpdXMgPFxyXG4gICAgICAgICAgICB0aGlzLl9yYWRpdXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NpcmNsZS1jYW52YXMudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IHsgVXRpbCwgQ09MT1JTIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENhbnZhc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhbnZhcy5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChjaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PENpcmNsZT59IGNpcmNsZXNcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgYWRkQ2lyY2xlcyhjaXJjbGVzOiBBcnJheTxDaXJjbGU+KSB7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IHRoaXMuX2NpcmNsZXMuY29uY2F0KGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gY2lyY2xlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueCAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5fd2lkdGggJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUmFuZG9tQ2lyY2xlcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfY2lyY2xlOiBDaXJjbGU7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBfY2lyY2xlID0gQ2lyY2xlLmdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl93aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KDAsIHRoaXMuX2hlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KDUsIDE1MClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihDT0xPUlNbVXRpbC5nZXRSYW5kb21JbnQoMCwgQ09MT1JTLmxlbmd0aCldKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5pc0luc2lkZUJvdW5kcyhfY2lyY2xlKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2lyY2xlcy5zb21lKGMgPT4gYy5pbnRlcnNlY3RzV2l0aChfY2lyY2xlKSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChfY2lyY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNcclxuICAgICAqL1xyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IHtcclxuICAgICAgICAgICAgY2lyY2xlLmRyYXcodGhpcy5fY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FudmFzLnRzIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBVdGlsLCBDSVJDTEVfTUFSR0lOIH0gZnJvbSAnLi8uLi9saWIvdXRpbCc7XHJcbmltcG9ydCBIU0xDb2xvciBmcm9tICcuL0hTTENvbG9yJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBDaXJjbGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogUG9pbnQ7XHJcbiAgICByYWRpdXM6IG51bWJlcjtcclxuICAgIGNvbG9yOiBIU0xDb2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2lyY2xlLlxyXG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIU0xDb2xvcn0gY29sb3JcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgc2V0Q29sb3IoY29sb3I6IEhTTENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NpcmNsZX0gb3RoZXJDaXJjbGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBpbnRlcnNlY3RzV2l0aChvdGhlckNpcmNsZTogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBvdGhlckNpcmNsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDw9IHRoaXMucmFkaXVzICsgb3RoZXJDaXJjbGUucmFkaXVzICsgQ0lSQ0xFX01BUkdJTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHRcclxuICAgICAqIEBtZW1iZXJvZiBDaXJjbGVcclxuICAgICAqL1xyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmFyYyhcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBNYXRoLlBJICogMixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGxvd2VyQm91bmRcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHVwcGVyQm91bmRcclxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHJhZGl1c0JvdW5kXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIENpcmNsZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb21DaXJjbGUoXHJcbiAgICAgICAgbG93ZXJCb3VuZDogUG9pbnQsXHJcbiAgICAgICAgdXBwZXJCb3VuZDogUG9pbnQsXHJcbiAgICAgICAgcmFkaXVzQm91bmQ6IFBvaW50XHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IENpcmNsZShcclxuICAgICAgICAgICAgUG9pbnQuZ2VuZXJhdGVSYW5kb21Qb2ludChcclxuICAgICAgICAgICAgICAgIGxvd2VyQm91bmQueCxcclxuICAgICAgICAgICAgICAgIGxvd2VyQm91bmQueSxcclxuICAgICAgICAgICAgICAgIHVwcGVyQm91bmQueCxcclxuICAgICAgICAgICAgICAgIHVwcGVyQm91bmQueVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBVdGlsLmdldFJhbmRvbUludChyYWRpdXNCb3VuZC54LCByYWRpdXNCb3VuZC55KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY2lyY2xlLnRzIiwiLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEhTTENvbG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIU0xDb2xvciB7XHJcbiAgICBodWU6IG51bWJlcjtcclxuICAgIHNhdHVyYXRpb246IG51bWJlcjtcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSFNMQ29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2E9MV1cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaHVlID0gaDtcclxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzO1xyXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgICAgICB0aGlzLmFscGhhID0gYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBIU0xDb2xvclxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hTTENvbG9yLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==