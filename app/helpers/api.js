import Axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/";
const apiKey = "f4bab9f55e02d02e05c27e348daf5e7a";
const param = "&type=accurate&APPID=" + apiKey;

export default {
	getCurrentWeather (city) {
		return Axios.get(baseUrl + "weather?q=" + city + param)
			.then(response => response.data)
			.catch(error => console.log("error", error));
	},
	getWeatherForecast (city, days) {
		return Axios.get(baseUrl + "forecast/daily?q=" + city + "&cnt=" + days + param)
			.then(response => response.data)
			.catch(error => console.log("error", error));
	},
	getImageLink (icon) {
		return "http://openweathermap.org/img/w/" + icon + ".png";
	}
}