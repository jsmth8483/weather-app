import { weatherService } from './services';
const inputValidator = (function () {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('location-input');
})();

const formValidator = (function () {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('#location-input');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		weatherService
			.getWeatherCityState(locationInput.textContent)
			.then((weather) => {
				const img = document.createElement('img');
				img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
				document.body.appendChild(img);
			});
	});
})();

export { inputValidator, formValidator };
