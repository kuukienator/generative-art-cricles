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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HSLColor__ = __webpack_require__(6);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(4);

var App = /** @class */ (function () {
    function App() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */](containerElement, width, height);
        canvas.generateRandomCircles(500);
        canvas.draw();
    }
    return App;
}());
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(5);
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
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* default */](5, 100));
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
/* 5 */
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
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI3NWU2Mzc3NzkyODU3YWExOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSFNMQ29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3RDhCO0FBRTlCO0lBSUUsZUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLGNBQVEsR0FBZixVQUFnQixFQUFTLEVBQUUsRUFBUztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSx5QkFBbUIsR0FBMUIsVUFDRSxJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixJQUFZO1FBRVosTUFBTSxDQUFDLElBQUksS0FBSyxDQUNkLG1EQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFDN0IsbURBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJpQztBQUVsQztJQUFBO0lBTUEsQ0FBQztJQUxRLGlCQUFZLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxHQUFXO1FBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7O0FBRU0sSUFBTSxNQUFNLEdBQW9CO0lBQ3JDLElBQUksMERBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN6QixJQUFJLDBEQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDekIsSUFBSSwwREFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzFCLENBQUM7QUFFSyxJQUFNLGFBQWEsR0FBVyxFQUFFLENBQUM7Ozs7Ozs7Ozs7QUNoQmhCO0FBRXhCLElBQU0sR0FBRyxHQUFHLElBQUkscURBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7QUNGUTtBQUk5QjtJQUNFO1FBQ0UsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWxDLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFNLE1BQU0sR0FBRyxJQUFJLHdEQUFNLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQjZCO0FBQ1E7QUFDVjtBQUc1QjtJQU9FLGdCQUFZLGdCQUF5QixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbkMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLE9BQXNCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxNQUFjO1FBQzNCLE1BQU0sQ0FBQyxDQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtZQUMvQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQXFCLEdBQXJCLFVBQXNCLEtBQWE7Z0NBQ3hCLEtBQUs7WUFDWixJQUFJLE9BQWUsQ0FBQztZQUVwQixHQUFHLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLHdEQUFNLENBQUMsb0JBQW9CLENBQ25DLElBQUksdURBQUssQ0FBQyxDQUFDLEVBQUUsT0FBSyxNQUFNLENBQUMsRUFDekIsSUFBSSx1REFBSyxDQUFDLENBQUMsRUFBRSxPQUFLLE9BQU8sQ0FBQyxFQUMxQixJQUFJLHVEQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNsQixDQUFDO2dCQUVGLE9BQU8sQ0FBQyxRQUFRLENBQUMscURBQU0sQ0FBQyxtREFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUscURBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxRQUNDLENBQUMsT0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM3QixPQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsRUFDbEQ7WUFFRixPQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7UUFqQkQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUFqQyxLQUFLO1NBaUJiO0lBQ0gsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ3BFMkI7QUFDaUI7QUFHN0M7SUFLRSxnQkFBWSxRQUFlLEVBQUUsTUFBYztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLEtBQWU7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxXQUFtQjtRQUNoQyxJQUFNLFFBQVEsR0FBRyx1REFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyw0REFBYSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssT0FBaUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUNULElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxNQUFNLEVBQ1gsQ0FBQyxFQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNYLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSwyQkFBb0IsR0FBM0IsVUFDRSxVQUFpQixFQUNqQixVQUFpQixFQUNqQixXQUFrQjtRQUVsQixNQUFNLENBQUMsSUFBSSxNQUFNLENBQ2YsdURBQUssQ0FBQyxtQkFBbUIsQ0FDdkIsVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsQ0FDYixFQUNELG1EQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUNyREQ7SUFNRSxrQkFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFLO1FBQUwseUJBQUs7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxVQUFRLElBQUksQ0FBQyxHQUFHLFNBQUksSUFBSSxDQUFDLFVBQVUsVUFBSyxJQUFJLENBQUMsU0FBUyxVQUMzRCxJQUFJLENBQUMsS0FBSyxNQUNULENBQUM7SUFDTixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTI3NWU2Mzc3NzkyODU3YWExOTYiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICBtaW5YOiBudW1iZXIsXHJcbiAgICBtYXhYOiBudW1iZXIsXHJcbiAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICBtYXhZOiBudW1iZXJcclxuICApIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KG1pblgsIG1heFgpLFxyXG4gICAgICBVdGlsLmdldFJhbmRvbUludChtaW5ZLCBtYXhZKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvaW50LnRzIiwiaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlM6IEFycmF5PEhTTENvbG9yPiA9IFtcclxuICBuZXcgSFNMQ29sb3IoMjcwLCA5MCwgOTApLFxyXG4gIG5ldyBIU0xDb2xvcigyNzAsIDkwLCA4MCksXHJcbiAgbmV3IEhTTENvbG9yKDI3MCwgOTAsIDcwKVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENJUkNMRV9NQVJHSU46IG51bWJlciA9IDEwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC50cyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZSc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKGNvbnRhaW5lckVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGNhbnZhcy5nZW5lcmF0ZVJhbmRvbUNpcmNsZXMoNTAwKTtcclxuXHJcbiAgICBjYW52YXMuZHJhdygpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnRzIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZSc7XHJcbmltcG9ydCB7IFV0aWwsIENPTE9SUyB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBfY2lyY2xlczogQXJyYXk8Q2lyY2xlPjtcclxuICBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIF93aWR0aDogbnVtYmVyO1xyXG4gIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuXHJcbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5fY2lyY2xlcyA9IFtdO1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2lyY2xlKGNpcmNsZTogQ2lyY2xlKSB7XHJcbiAgICB0aGlzLl9jaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIGFkZENpcmNsZXMoY2lyY2xlczogQXJyYXk8Q2lyY2xlPikge1xyXG4gICAgdGhpcy5fY2lyY2xlcyA9IHRoaXMuX2NpcmNsZXMuY29uY2F0KGNpcmNsZXMpO1xyXG4gIH1cclxuXHJcbiAgaXNJbnNpZGVCb3VuZHMoY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGNpcmNsZS5wb3NpdGlvbi54IC0gY2lyY2xlLnJhZGl1cyA+IDAgJiZcclxuICAgICAgY2lyY2xlLnBvc2l0aW9uLnkgLSBjaXJjbGUucmFkaXVzID4gMCAmJlxyXG4gICAgICBjaXJjbGUucG9zaXRpb24ueCArIGNpcmNsZS5yYWRpdXMgPCB0aGlzLl93aWR0aCAmJlxyXG4gICAgICBjaXJjbGUucG9zaXRpb24ueSArIGNpcmNsZS5yYWRpdXMgPCB0aGlzLl9oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbUNpcmNsZXMoY291bnQ6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgIGxldCBfY2lyY2xlOiBDaXJjbGU7XHJcblxyXG4gICAgICBkbyB7XHJcbiAgICAgICAgX2NpcmNsZSA9IENpcmNsZS5nZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl93aWR0aCksXHJcbiAgICAgICAgICBuZXcgUG9pbnQoMCwgdGhpcy5faGVpZ2h0KSxcclxuICAgICAgICAgIG5ldyBQb2ludCg1LCAxMDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgX2NpcmNsZS5zZXRDb2xvcihDT0xPUlNbVXRpbC5nZXRSYW5kb21JbnQoMCwgQ09MT1JTLmxlbmd0aCldKTtcclxuICAgICAgfSB3aGlsZSAoXHJcbiAgICAgICAgIXRoaXMuaXNJbnNpZGVCb3VuZHMoX2NpcmNsZSkgfHxcclxuICAgICAgICB0aGlzLl9jaXJjbGVzLnNvbWUoYyA9PiBjLmludGVyc2VjdHNXaXRoKF9jaXJjbGUpKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5fY2lyY2xlcy5wdXNoKF9jaXJjbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuX2NpcmNsZXMuZm9yRWFjaChjaXJjbGUgPT4ge1xyXG4gICAgICBjaXJjbGUuZHJhdyh0aGlzLl9jb250ZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzLnRzIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xyXG5pbXBvcnQgeyBVdGlsLCBDSVJDTEVfTUFSR0lOIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IEhTTENvbG9yIGZyb20gJy4vSFNMQ29sb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcclxuICBwb3NpdGlvbjogUG9pbnQ7XHJcbiAgcmFkaXVzOiBudW1iZXI7XHJcbiAgY29sb3I6IEhTTENvbG9yO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9pbnQsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICB9XHJcblxyXG4gIHNldENvbG9yKGNvbG9yOiBIU0xDb2xvcikge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJzZWN0c1dpdGgob3RoZXJDaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBvdGhlckNpcmNsZS5wb3NpdGlvbik7XHJcbiAgICByZXR1cm4gZGlzdGFuY2UgPD0gdGhpcy5yYWRpdXMgKyBvdGhlckNpcmNsZS5yYWRpdXMgKyBDSVJDTEVfTUFSR0lOO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvci50b1N0cmluZygpO1xyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0LmFyYyhcclxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAwLFxyXG4gICAgICBNYXRoLlBJICogMixcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgbG93ZXJCb3VuZDogUG9pbnQsXHJcbiAgICB1cHBlckJvdW5kOiBQb2ludCxcclxuICAgIHJhZGl1c0JvdW5kOiBQb2ludFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDaXJjbGUoXHJcbiAgICAgIFBvaW50LmdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICAgICAgbG93ZXJCb3VuZC54LFxyXG4gICAgICAgIGxvd2VyQm91bmQueSxcclxuICAgICAgICB1cHBlckJvdW5kLngsXHJcbiAgICAgICAgdXBwZXJCb3VuZC55XHJcbiAgICAgICksXHJcbiAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KHJhZGl1c0JvdW5kLngsIHJhZGl1c0JvdW5kLnkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2lyY2xlLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFNMQ29sb3Ige1xyXG4gIGh1ZTogbnVtYmVyO1xyXG4gIHNhdHVyYXRpb246IG51bWJlcjtcclxuICBsaWdodG5lc3M6IG51bWJlcjtcclxuICBhbHBoYTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhID0gMSkge1xyXG4gICAgdGhpcy5odWUgPSBoO1xyXG4gICAgdGhpcy5zYXR1cmF0aW9uID0gcztcclxuICAgIHRoaXMubGlnaHRuZXNzID0gbDtcclxuICAgIHRoaXMuYWxwaGEgPSBhO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSwke1xyXG4gICAgICB0aGlzLmFscGhhXHJcbiAgICB9KWA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IU0xDb2xvci50cyJdLCJzb3VyY2VSb290IjoiIn0=