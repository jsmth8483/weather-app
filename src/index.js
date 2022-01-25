import '../style.css';
import { weatherService } from './services';
import { WeatherDisplay } from './weatherDisplay';

weatherService
	.getWeatherCityState('London')
	.then((weather) => {
		weatherDisplay.display(weather);
	})
	.catch((err) => {
		console.log(err);
	});

const weatherDisplay = new WeatherDisplay();

function setSearchListener() {
	const searchInput = document.querySelector('#location-input');
	searchInput.addEventListener('keyup', (e) => {
		if (e.key === 'Enter') {
			const cityName = searchInput.value;
			weatherService
				.getWeatherCityState(cityName)
				.then((weather) => {
					weatherDisplay.display(weather);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});
}
setSearchListener();
