/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/locationInputValidator.js":
/*!***************************************!*\
  !*** ./src/locationInputValidator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputValidator": () => (/* binding */ inputValidator),
/* harmony export */   "formValidator": () => (/* binding */ formValidator)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services/index.js");

const inputValidator = (function () {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('location-input');
})();

const formValidator = (function () {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('#location-input');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		_services__WEBPACK_IMPORTED_MODULE_0__.weatherService.getWeatherCityState(locationInput.textContent)
			.then((weather) => {
				const img = document.createElement('img');
				img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
				document.body.appendChild(img);
			});
	});
})();




/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherService": () => (/* reexport safe */ _weatherService__WEBPACK_IMPORTED_MODULE_0__.weatherService)
/* harmony export */ });
/* harmony import */ var _weatherService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherService */ "./src/services/weatherService.js");



/***/ }),

/***/ "./src/services/weatherService.js":
/*!****************************************!*\
  !*** ./src/services/weatherService.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherService": () => (/* binding */ weatherService)
/* harmony export */ });
const weatherService = (function () {
	async function getWeatherCityState(city, state) {
		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=6aee3ae122dc51d88df6025540353b53`,
			{ mode: 'cors' }
		);
		const data = await currentWeather.json();
		const processedData = processWeatherData(data);
		console.log(data);
		return processedData;
	}

	async function getWeatherZipCode(zipCode) {
		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=6aee3ae122dc51d88df6025540353b53`,
			{ mode: 'cors' }
		);

		const data = await currentWeather.json();
		const processedData = processWeatherData(data);
		console.log(processedData);
		return processedData;
	}

	function processWeatherData(data) {
		const { weather } = data;
		return weather;
	}

	return { getWeatherCityState, getWeatherZipCode };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locationInputValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationInputValidator */ "./src/locationInputValidator.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services/index.js");


_services__WEBPACK_IMPORTED_MODULE_1__.weatherService.getWeatherCityState('London').then((weather) => {
	const img = document.createElement('img');
	img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
	document.body.appendChild(img);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUVBQ3FCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRixDQUFDOztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUzs7Ozs7Ozs7Ozs7Ozs7O0FDQWxEO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxLQUFLLEdBQUcsTUFBTTtBQUN0RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsUUFBUTtBQUNsRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUV5Qjs7Ozs7OztVQ2hDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUU7QUFDN0I7QUFDNUMseUVBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhdGlvbklucHV0VmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL3dlYXRoZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmNvbnN0IGlucHV0VmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblx0Y29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xvY2F0aW9uLWlucHV0Jyk7XG59KSgpO1xuXG5jb25zdCBmb3JtVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblx0Y29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1pbnB1dCcpO1xuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0d2VhdGhlclNlcnZpY2Vcblx0XHRcdC5nZXRXZWF0aGVyQ2l0eVN0YXRlKGxvY2F0aW9uSW5wdXQudGV4dENvbnRlbnQpXG5cdFx0XHQudGhlbigod2VhdGhlcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0aW1nLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LycgKyB3ZWF0aGVyWzBdLmljb24gKyAnLnBuZyc7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbmV4cG9ydCB7IGlucHV0VmFsaWRhdG9yLCBmb3JtVmFsaWRhdG9yIH07XG4iLCJleHBvcnQgeyB3ZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlclNlcnZpY2UnO1xuIiwiY29uc3Qgd2VhdGhlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuXHRhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyQ2l0eVN0YXRlKGNpdHksIHN0YXRlKSB7XG5cdFx0Y29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBmZXRjaChcblx0XHRcdGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0sJHtzdGF0ZX0mYXBwaWQ9NmFlZTNhZTEyMmRjNTFkODhkZjYwMjU1NDAzNTNiNTNgLFxuXHRcdFx0eyBtb2RlOiAnY29ycycgfVxuXHRcdCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGN1cnJlbnRXZWF0aGVyLmpzb24oKTtcblx0XHRjb25zdCBwcm9jZXNzZWREYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpO1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdHJldHVybiBwcm9jZXNzZWREYXRhO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlclppcENvZGUoemlwQ29kZSkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/emlwPSR7emlwQ29kZX0mYXBwaWQ9NmFlZTNhZTEyMmRjNTFkODhkZjYwMjU1NDAzNTNiNTNgLFxuXHRcdFx0eyBtb2RlOiAnY29ycycgfVxuXHRcdCk7XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpO1xuXHRcdGNvbnN0IHByb2Nlc3NlZERhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSk7XG5cdFx0Y29uc29sZS5sb2cocHJvY2Vzc2VkRGF0YSk7XG5cdFx0cmV0dXJuIHByb2Nlc3NlZERhdGE7XG5cdH1cblxuXHRmdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSkge1xuXHRcdGNvbnN0IHsgd2VhdGhlciB9ID0gZGF0YTtcblx0XHRyZXR1cm4gd2VhdGhlcjtcblx0fVxuXG5cdHJldHVybiB7IGdldFdlYXRoZXJDaXR5U3RhdGUsIGdldFdlYXRoZXJaaXBDb2RlIH07XG59KSgpO1xuXG5leHBvcnQgeyB3ZWF0aGVyU2VydmljZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtVmFsaWRhdG9yLCBpbnB1dFZhbGlkYXRvciB9IGZyb20gJy4vbG9jYXRpb25JbnB1dFZhbGlkYXRvcic7XG5pbXBvcnQgeyB3ZWF0aGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xud2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckNpdHlTdGF0ZSgnTG9uZG9uJykudGhlbigod2VhdGhlcikgPT4ge1xuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LycgKyB3ZWF0aGVyWzBdLmljb24gKyAnLnBuZyc7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9