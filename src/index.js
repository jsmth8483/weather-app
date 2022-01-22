import { formValidator, inputValidator } from './locationInputValidator';
import { weatherService } from './services';
weatherService.getWeatherCityState('London').then((weather) => {
	const img = document.createElement('img');
	img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
	document.body.appendChild(img);
});
