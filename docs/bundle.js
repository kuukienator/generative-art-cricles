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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.distance = function (p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    };
    Point.generateRandomPoint = function (minX, maxX, minY, maxY) {
        return new Point(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* Util */].getRandomInt(minX, maxX), __WEBPACK_IMPORTED_MODULE_0__util__["c" /* Util */].getRandomInt(minY, maxY));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HSLColor__ = __webpack_require__(7);

var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Util;
}());

var COLORS = [
    new __WEBPACK_IMPORTED_MODULE_0__HSLColor__["a" /* default */](270, 90, 90),
    new __WEBPACK_IMPORTED_MODULE_0__HSLColor__["a" /* default */](270, 90, 80),
    new __WEBPACK_IMPORTED_MODULE_0__HSLColor__["a" /* default */](270, 90, 70)
];
var CIRCLE_MARGIN = 10;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(3);

var app = new __WEBPACK_IMPORTED_MODULE_0__app__["a" /* default */]();


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


var CircleCanvas = /** @class */ (function (_super) {
    __extends(CircleCanvas, _super);
    function CircleCanvas(containerElement, width, height) {
        var _this = this;
        var smallerSide = Math.min(width, height);
        _this = _super.call(this, containerElement, smallerSide, smallerSide) || this;
        _this._radius = smallerSide / 2;
        _this._position = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */](_this._radius, _this._radius);
        return _this;
    }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point__ = __webpack_require__(0);



var Canvas = /** @class */ (function () {
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
    Canvas.prototype.addCircle = function (circle) {
        this._circles.push(circle);
    };
    Canvas.prototype.addCircles = function (circles) {
        this._circles = this._circles.concat(circles);
    };
    Canvas.prototype.isInsideBounds = function (circle) {
        return (circle.position.x - circle.radius > 0 &&
            circle.position.y - circle.radius > 0 &&
            circle.position.x + circle.radius < this._width &&
            circle.position.y + circle.radius < this._height);
    };
    Canvas.prototype.generateRandomCircles = function (count) {
        var _loop_1 = function (index) {
            var _circle;
            do {
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](5, 150));
                _circle.setColor(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* COLORS */][__WEBPACK_IMPORTED_MODULE_1__util__["c" /* Util */].getRandomInt(0, __WEBPACK_IMPORTED_MODULE_1__util__["b" /* COLORS */].length)]);
            } while (!this_1.isInsideBounds(_circle) ||
                this_1._circles.some(function (c) { return c.intersectsWith(_circle); }));
            this_1._circles.push(_circle);
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);


var Circle = /** @class */ (function () {
    function Circle(position, radius) {
        this.position = position;
        this.radius = radius;
    }
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.intersectsWith = function (otherCircle) {
        var distance = __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].distance(this.position, otherCircle.position);
        return distance <= this.radius + otherCircle.radius + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* CIRCLE_MARGIN */];
    };
    Circle.prototype.draw = function (context) {
        context.fillStyle = this.color.toString();
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
    };
    Circle.generateRandomCircle = function (lowerBound, upperBound, radiusBound) {
        return new Circle(__WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].generateRandomPoint(lowerBound.x, lowerBound.y, upperBound.x, upperBound.y), __WEBPACK_IMPORTED_MODULE_1__util__["c" /* Util */].getRandomInt(radiusBound.x, radiusBound.y));
    };
    return Circle;
}());
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var HSLColor = /** @class */ (function () {
    function HSLColor(h, s, l, a) {
        if (a === void 0) { a = 1; }
        this.hue = h;
        this.saturation = s;
        this.lightness = l;
        this.alpha = a;
    }
    HSLColor.prototype.toString = function () {
        return "hsla(" + this.hue + "," + this.saturation + "%," + this.lightness + "%," + this.alpha + ")";
    };
    return HSLColor;
}());
/* harmony default export */ __webpack_exports__["a"] = (HSLColor);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU0MDhiOTU5NGJhMTAxNmE1N2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jaXJjbGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSFNMQ29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3RDhCO0FBRTlCO0lBSUksZUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGNBQVEsR0FBZixVQUFnQixFQUFTLEVBQUUsRUFBUztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMs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LE1BQU0sQ0FDYix1REFBSyxDQUFDLG1CQUFtQixDQUNyQixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxDQUNmLEVBQ0QsbURBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7OztBQ3JERDtJQU1JLGtCQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQUs7UUFBTCx5QkFBSztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLFVBQVEsSUFBSSxDQUFDLEdBQUcsU0FBSSxJQUFJLENBQUMsVUFBVSxVQUFLLElBQUksQ0FBQyxTQUFTLFVBQ3pELElBQUksQ0FBQyxLQUFLLE1BQ1gsQ0FBQztJQUNSLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NTQwOGI5NTk0YmExMDE2YTU3ZSIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbVBvaW50KFxyXG4gICAgICAgIG1pblg6IG51bWJlcixcclxuICAgICAgICBtYXhYOiBudW1iZXIsXHJcbiAgICAgICAgbWluWTogbnVtYmVyLFxyXG4gICAgICAgIG1heFk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQobWluWCwgbWF4WCksXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KG1pblksIG1heFkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9pbnQudHMiLCJpbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtcclxuICAgIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA5MCksXHJcbiAgICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgODApLFxyXG4gICAgbmV3IEhTTENvbG9yKDI3MCwgOTAsIDcwKVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENJUkNMRV9NQVJHSU46IG51bWJlciA9IDEwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC50cyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IENpcmNsZUNhbnZhcyBmcm9tICcuL2NpcmNsZS1jYW52YXMnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDaXJjbGVDYW52YXMoY29udGFpbmVyRWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgLy9jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjYW52YXMuZ2VuZXJhdGVSYW5kb21DaXJjbGVzKDIwMCk7XHJcbiAgICAgICAgY2FudmFzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDYW52YXMgZXh0ZW5kcyBDYW52YXMge1xyXG4gICAgX3Bvc2l0aW9uOiBQb2ludDtcclxuICAgIF9yYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHNtYWxsZXJTaWRlID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgc3VwZXIoY29udGFpbmVyRWxlbWVudCwgc21hbGxlclNpZGUsIHNtYWxsZXJTaWRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gc21hbGxlclNpZGUgLyAyO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0luc2lkZUJvdW5kcyhjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFBvaW50LmRpc3RhbmNlKGNpcmNsZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pICsgY2lyY2xlLnJhZGl1cyA8XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NpcmNsZS1jYW52YXMudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IHsgVXRpbCwgQ09MT1JTIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gICAgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBfY2lyY2xlczogQXJyYXk8Q2lyY2xlPjtcclxuICAgIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBfd2lkdGg6IG51bWJlcjtcclxuICAgIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaXJjbGUoY2lyY2xlOiBDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaXJjbGVzKGNpcmNsZXM6IEFycmF5PENpcmNsZT4pIHtcclxuICAgICAgICB0aGlzLl9jaXJjbGVzID0gdGhpcy5fY2lyY2xlcy5jb25jYXQoY2lyY2xlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjaXJjbGUucG9zaXRpb24ueCAtIGNpcmNsZS5yYWRpdXMgPiAwICYmXHJcbiAgICAgICAgICAgIGNpcmNsZS5wb3NpdGlvbi55IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnggKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5fd2lkdGggJiZcclxuICAgICAgICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgKyBjaXJjbGUucmFkaXVzIDwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJhbmRvbUNpcmNsZXMoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgX2NpcmNsZTogQ2lyY2xlO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgX2NpcmNsZSA9IENpcmNsZS5nZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoMCwgdGhpcy5fd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludCg1LCAxNTApXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIF9jaXJjbGUuc2V0Q29sb3IoQ09MT1JTW1V0aWwuZ2V0UmFuZG9tSW50KDAsIENPTE9SUy5sZW5ndGgpXSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKFxyXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNJbnNpZGVCb3VuZHMoX2NpcmNsZSkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NpcmNsZXMuc29tZShjID0+IGMuaW50ZXJzZWN0c1dpdGgoX2NpcmNsZSkpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGVzLnB1c2goX2NpcmNsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5fY2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiB7XHJcbiAgICAgICAgICAgIGNpcmNsZS5kcmF3KHRoaXMuX2NvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXMudHMiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7IFV0aWwsIENJUkNMRV9NQVJHSU4gfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgSFNMQ29sb3IgZnJvbSAnLi9IU0xDb2xvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xyXG4gICAgcG9zaXRpb246IFBvaW50O1xyXG4gICAgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBjb2xvcjogSFNMQ29sb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xvcihjb2xvcjogSFNMQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJzZWN0c1dpdGgob3RoZXJDaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gUG9pbnQuZGlzdGFuY2UodGhpcy5wb3NpdGlvbiwgb3RoZXJDaXJjbGUucG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSB0aGlzLnJhZGl1cyArIG90aGVyQ2lyY2xlLnJhZGl1cyArIENJUkNMRV9NQVJHSU47XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmFyYyhcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBNYXRoLlBJICogMixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgIGxvd2VyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHVwcGVyQm91bmQ6IFBvaW50LFxyXG4gICAgICAgIHJhZGl1c0JvdW5kOiBQb2ludFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUoXHJcbiAgICAgICAgICAgIFBvaW50LmdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICBsb3dlckJvdW5kLnksXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLngsXHJcbiAgICAgICAgICAgICAgICB1cHBlckJvdW5kLnlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgVXRpbC5nZXRSYW5kb21JbnQocmFkaXVzQm91bmQueCwgcmFkaXVzQm91bmQueSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jaXJjbGUudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIU0xDb2xvciB7XHJcbiAgICBodWU6IG51bWJlcjtcclxuICAgIHNhdHVyYXRpb246IG51bWJlcjtcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgICAgIHRoaXMuaHVlID0gaDtcclxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBzO1xyXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgICAgICB0aGlzLmFscGhhID0gYTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IU0xDb2xvci50cyJdLCJzb3VyY2VSb290IjoiIn0=