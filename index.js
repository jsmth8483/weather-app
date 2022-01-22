const weatherService = (function () {
	async function getWeatherCityState(city, state) {
		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=6aee3ae122dc51d88df6025540353b53`,
			{ mode: 'cors' }
		);
		const data = await currentWeather.json();
		console.log(data);
		return data;
	}

	async function getWeatherZipCode(zipCode) {
		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=6aee3ae122dc51d88df6025540353b53`,
			{ mode: 'cors' }
		);

		const data = await currentWeather.json();
		console.log(data);
		return data;
	}

	return { getWeatherCityState, getWeatherZipCode };
})();

weatherService.getWeatherCityState('London').then((res) => {
	const img = document.createElement('img');
	img.src = 'http://openweathermap.org/img/w/' + res.weather[0].icon + '.png';
	document.body.appendChild(img);
});
