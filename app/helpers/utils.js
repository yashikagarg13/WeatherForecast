import moment from "moment";

export default {
	getImageLink (icon) {
		return "http://openweathermap.org/img/w/" + icon + ".png";
	},
	getDateStr (date) {
		return moment.unix(date).format("dddd, MMM D");
	},
	convertTempToDegrees (temp) {
		return parseInt(((temp - 273.15)* 1.8000 + 32.00), 10)
	}
}