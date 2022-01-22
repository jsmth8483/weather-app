/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
		console.log(processedData);
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services/index.js");

_services__WEBPACK_IMPORTED_MODULE_0__.weatherService.getWeatherCityState('London').then((weather) => {
	const img = document.createElement('img');
	img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
	document.body.appendChild(img);
});

(function inputValidator() {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('location-input');
	console.log('Validated');
})();

(function formValidator() {
	const form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		console.log('Prevented');
	});
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0FsRDtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSyxHQUFHLE1BQU07QUFDdEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELFFBQVE7QUFDbEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLFVBQVU7QUFDcEI7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFeUI7Ozs7Ozs7VUNoQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEM7QUFDNUMseUVBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL3dlYXRoZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgd2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXJTZXJ2aWNlJztcbiIsImNvbnN0IHdlYXRoZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcblx0YXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckNpdHlTdGF0ZShjaXR5LCBzdGF0ZSkge1xuXHRcdGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9LCR7c3RhdGV9JmFwcGlkPTZhZWUzYWUxMjJkYzUxZDg4ZGY2MDI1NTQwMzUzYjUzYCxcblx0XHRcdHsgbW9kZTogJ2NvcnMnIH1cblx0XHQpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBjdXJyZW50V2VhdGhlci5qc29uKCk7XG5cdFx0Y29uc3QgcHJvY2Vzc2VkRGF0YSA9IHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKTtcblx0XHRjb25zb2xlLmxvZyhwcm9jZXNzZWREYXRhKTtcblx0XHRyZXR1cm4gcHJvY2Vzc2VkRGF0YTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJaaXBDb2RlKHppcENvZGUpIHtcblx0XHRjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuXHRcdFx0YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0ke3ppcENvZGV9JmFwcGlkPTZhZWUzYWUxMjJkYzUxZDg4ZGY2MDI1NTQwMzUzYjUzYCxcblx0XHRcdHsgbW9kZTogJ2NvcnMnIH1cblx0XHQpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGN1cnJlbnRXZWF0aGVyLmpzb24oKTtcblx0XHRjb25zdCBwcm9jZXNzZWREYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpO1xuXHRcdGNvbnNvbGUubG9nKHByb2Nlc3NlZERhdGEpO1xuXHRcdHJldHVybiBwcm9jZXNzZWREYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpIHtcblx0XHRjb25zdCB7IHdlYXRoZXIgfSA9IGRhdGE7XG5cdFx0cmV0dXJuIHdlYXRoZXI7XG5cdH1cblxuXHRyZXR1cm4geyBnZXRXZWF0aGVyQ2l0eVN0YXRlLCBnZXRXZWF0aGVyWmlwQ29kZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2VhdGhlclNlcnZpY2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgd2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbndlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJDaXR5U3RhdGUoJ0xvbmRvbicpLnRoZW4oKHdlYXRoZXIpID0+IHtcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltZy5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nICsgd2VhdGhlclswXS5pY29uICsgJy5wbmcnO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XG59KTtcblxuKGZ1bmN0aW9uIGlucHV0VmFsaWRhdG9yKCkge1xuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXHRjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbG9jYXRpb24taW5wdXQnKTtcblx0Y29uc29sZS5sb2coJ1ZhbGlkYXRlZCcpO1xufSkoKTtcblxuKGZ1bmN0aW9uIGZvcm1WYWxpZGF0b3IoKSB7XG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZygnUHJldmVudGVkJyk7XG5cdH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==