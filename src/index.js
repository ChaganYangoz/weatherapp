const img = document.querySelector('#weatherimg');
const cityinfo = document.querySelector('#cityinfo');
const celcius = document.querySelector('#celcius');
const feels = document.querySelector('#feels');
const prep = document.querySelector('#prep');
const hum = document.querySelector('#hum');
const wind = document.querySelector('#wind');
const error = document.querySelector('#error');

const inputdata = document.getElementById('citydata');

let apiKey = '0be880a24392440c85c95053232310';
let city = 'London';

inputdata.onkeypress = function (e) {
	if (!e) e = window.event;
	var keyCode = e.code || e.key;
	if (keyCode == 'Enter') {
		getWeatherinfo(inputdata.value);
		inputdata.value = '';
		return false;
	}
};

async function getWeatherinfo(city) {
	const response = await fetch(
		'http://api.weatherapi.com/v1/current.json?key=0be880a24392440c85c95053232310&q=' +
			city +
			'&aqi=no',
		{ mode: 'cors' }
	);
	if (response.status === 400) {
		throwErrorMsg();
	} else {
		error.innerText = '';
		const data = await response.json();
		img.src = 'https://' + data.current.condition.icon;
		cityinfo.innerText = data.location.name + ', ' + data.location.country;
		celcius.innerText = data.current.temp_c + ' °C';
		feels.innerText = data.current.feelslike_c + ' °C';
		prep.innerText = data.current.precip_mm + ' mm';
		hum.innerText = data.current.humidity + ' %';
		wind.innerText = data.current.wind_kph + ' kph';
	}
}

function throwErrorMsg() {
	error.innerText = 'No matching location found!';
}

getWeatherinfo(city);
