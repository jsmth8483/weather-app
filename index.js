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

weatherService.getWeatherCityState('London').then((weather) => {
	const img = document.createElement('img');
	img.src = 'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
	document.body.appendChild(img);
});
