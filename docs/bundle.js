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
        return new Point(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Util */].getRandomInt(minX, maxX), __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Util */].getRandomInt(minY, maxY));
    };
    return Point;
}());
/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
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
        var containerElement = document.getElementById('container');
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */](containerElement, 600, 600);
        canvas.generateRandomCircles(50);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(0);


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
    Canvas.prototype.generateRandomCircles = function (count) {
        var _loop_1 = function (index) {
            var _circle;
            do {
                _circle = __WEBPACK_IMPORTED_MODULE_0__circle__["a" /* default */].generateRandomCircle(new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */](0, this_1._width), new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */](0, this_1._height), new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */](1, 75));
            } while (this_1._circles.some(function (c) { return c.intersectsWith(_circle); }));
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
    Circle.prototype.intersectsWith = function (otherCircle) {
        var distance = __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].distance(this.position, otherCircle.position);
        return distance <= this.radius + otherCircle.radius;
    };
    Circle.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
    };
    Circle.generateRandomCircle = function (lowerBound, upperBound, radiusBound) {
        return new Circle(__WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */].generateRandomPoint(lowerBound.x, lowerBound.y, upperBound.x, upperBound.y), __WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].getRandomInt(radiusBound.x, radiusBound.y));
    };
    return Circle;
}());
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGM5NDEzZDUzNGFhNjZiMDViZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpcmNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEOEI7QUFFOUI7SUFJRSxlQUFZLENBQVMsRUFBRSxDQUFTO1FBQzlCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sY0FBUSxHQUFmLFVBQWdCLEVBQVMsRUFBRSxFQUFTO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENB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SUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLE1BQU0sRUFDWCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ1gsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDJCQUFvQixHQUEzQixVQUNFLFVBQWlCLEVBQ2pCLFVBQWlCLEVBQ2pCLFdBQWtCO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FDZix1REFBSyxDQUFDLG1CQUFtQixDQUN2QixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxDQUNiLEVBQ0QsbURBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2hELENBQUM7SUFDSixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGM5NDEzZDUzNGFhNjZiMDViZWQiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9pbnQoXHJcbiAgICBtaW5YOiBudW1iZXIsXHJcbiAgICBtYXhYOiBudW1iZXIsXHJcbiAgICBtaW5ZOiBudW1iZXIsXHJcbiAgICBtYXhZOiBudW1iZXJcclxuICApIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIFV0aWwuZ2V0UmFuZG9tSW50KG1pblgsIG1heFgpLFxyXG4gICAgICBVdGlsLmdldFJhbmRvbUludChtaW5ZLCBtYXhZKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvaW50LnRzIiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwudHMiLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoY29udGFpbmVyRWxlbWVudCwgNjAwLCA2MDApO1xyXG5cclxuICAgIGNhbnZhcy5nZW5lcmF0ZVJhbmRvbUNpcmNsZXMoNTApO1xyXG5cclxuICAgIGNhbnZhcy5kcmF3KCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgX2NpcmNsZXM6IEFycmF5PENpcmNsZT47XHJcbiAgX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBfd2lkdGg6IG51bWJlcjtcclxuICBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcblxyXG4gICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgIHRoaXMuX2NpcmNsZXMgPSBbXTtcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgdGhpcy5fY2lyY2xlcy5wdXNoKGNpcmNsZSk7XHJcbiAgfVxyXG5cclxuICBhZGRDaXJjbGVzKGNpcmNsZXM6IEFycmF5PENpcmNsZT4pIHtcclxuICAgIHRoaXMuX2NpcmNsZXMgPSB0aGlzLl9jaXJjbGVzLmNvbmNhdChjaXJjbGVzKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUmFuZG9tQ2lyY2xlcyhjb3VudDogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgbGV0IF9jaXJjbGU6IENpcmNsZTtcclxuXHJcbiAgICAgIGRvIHtcclxuICAgICAgICBfY2lyY2xlID0gQ2lyY2xlLmdlbmVyYXRlUmFuZG9tQ2lyY2xlKFxyXG4gICAgICAgICAgbmV3IFBvaW50KDAsIHRoaXMuX3dpZHRoKSxcclxuICAgICAgICAgIG5ldyBQb2ludCgwLCB0aGlzLl9oZWlnaHQpLFxyXG4gICAgICAgICAgbmV3IFBvaW50KDEsIDc1KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gd2hpbGUgKHRoaXMuX2NpcmNsZXMuc29tZShjID0+IGMuaW50ZXJzZWN0c1dpdGgoX2NpcmNsZSkpKTtcclxuXHJcbiAgICAgIHRoaXMuX2NpcmNsZXMucHVzaChfY2lyY2xlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLl9jaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IHtcclxuICAgICAgY2lyY2xlLmRyYXcodGhpcy5fY29udGV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy50cyIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBQb2ludDtcclxuICByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgfVxyXG5cclxuICBpbnRlcnNlY3RzV2l0aChvdGhlckNpcmNsZTogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRoaXMucG9zaXRpb24sIG90aGVyQ2lyY2xlLnBvc2l0aW9uKTtcclxuICAgIHJldHVybiBkaXN0YW5jZSA8PSB0aGlzLnJhZGl1cyArIG90aGVyQ2lyY2xlLnJhZGl1cztcclxuICB9XHJcblxyXG4gIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5hcmMoXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnJhZGl1cyxcclxuICAgICAgMCxcclxuICAgICAgTWF0aC5QSSAqIDIsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbUNpcmNsZShcclxuICAgIGxvd2VyQm91bmQ6IFBvaW50LFxyXG4gICAgdXBwZXJCb3VuZDogUG9pbnQsXHJcbiAgICByYWRpdXNCb3VuZDogUG9pbnRcclxuICApIHtcclxuICAgIHJldHVybiBuZXcgQ2lyY2xlKFxyXG4gICAgICBQb2ludC5nZW5lcmF0ZVJhbmRvbVBvaW50KFxyXG4gICAgICAgIGxvd2VyQm91bmQueCxcclxuICAgICAgICBsb3dlckJvdW5kLnksXHJcbiAgICAgICAgdXBwZXJCb3VuZC54LFxyXG4gICAgICAgIHVwcGVyQm91bmQueVxyXG4gICAgICApLFxyXG4gICAgICBVdGlsLmdldFJhbmRvbUludChyYWRpdXNCb3VuZC54LCByYWRpdXNCb3VuZC55KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NpcmNsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=