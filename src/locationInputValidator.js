const inputValidator = (function () {
	const form = document.querySelector('form');
	const locationInput = document.querySelector('location-input');
})();

const formValidator = (function () {
	const form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});
})();

export { inputValidator, formValidator };
