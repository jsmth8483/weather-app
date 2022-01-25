import { weatherService } from './services';

class WeatherDisplay {
	container = document.querySelector('.weather-container');
	cityDisplay = document.querySelector('.city-text');
	currentWeatherContainer = document.querySelector('.current-weather');
	currentTemp = document.querySelector('.current-temp');
	currentWeatherIcon = document.querySelector('.current-weather-icon img');
	currentWeatherDescription = document.querySelector(
		'.current-weather-description'
	);
	humidity = document.querySelector('.humidity');
	feelsLike = document.querySelector('.feels-like');
	windSpeed = document.querySelector('.wind-speed');

	constructor(weatherDetails) {}

	display(weatherDetails) {
		console.log(weatherDetails);
		this.cityDisplay.textContent =
			weatherDetails.name + ', ' + weatherDetails.sys.country;
		this.currentTemp.textContent =
			parseInt(weatherDetails.main.temp) + '\xB0 F';
		this.currentWeatherIcon.src =
			'http://openweathermap.org/img/w/' +
			weatherDetails.weather[0].icon +
			'.png';
		this.currentWeatherDescription.textContent =
			weatherDetails.weather[0].description;
		this.humidity.textContent = weatherDetails.main.humidity + '%';
		this.feelsLike.textContent =
			parseInt(weatherDetails.main['feels_like']) + '\xB0 F';
		this.windSpeed.textContent = weatherDetails.wind.speed + ' mph';
	}
}

export { WeatherDisplay };
