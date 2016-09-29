import React, {PropTypes} from "react";
import moment from "moment";

export default function Forecast (props) {
	return (
		<div className="col-sm-12 text-center">
			<h1 className="text-capitalize margin-top">{props.city}</h1>
			<div className="margin-top">
				{props.currentWeatherInfo.map(day => 
					<ForecastDay 
						key={day.dt} 
						date={day.dt_txt} 
						icon={day.weather[0].icon} />)}
			</div>
		</div>
	);
}

function ForecastDay (props) {
	const imgBaseUrl = "http://openweathermap.org/img/w/";
	const dateStr = moment(props.date).format("dddd, MMM D");
	return (
		<div className="day col-sm-3">
			<img src={imgBaseUrl + props.icon + '.png'} />
			<p><strong>{dateStr}</strong></p>
		</div>
	);
}

Forecast.propTypes = {
	city: PropTypes.string.isRequired,
	currentWeatherInfo: PropTypes.array.isRequired,
}