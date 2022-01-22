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

export { weatherService };
