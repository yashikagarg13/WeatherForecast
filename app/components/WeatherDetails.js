import React, {PropTypes} from "react";	
import ForecastDay from "./ForecastDay";

export default function WeatherDetails (props) {
	let icon = props.weatherDetails.weather[0].icon;

	return (
		<div className="col-sm-offset-4 col-sm-4 text-center margin-top">
			<ForecastDay 
				icon={icon}
				date={props.weatherDetails.dt} />

			<div className="margin-top">
				<h1>{props.weatherDetails.name}</h1>
				<p>{props.weatherDetails.weather[0].description}</p>
				<p>min temp: {props.weatherDetails.main.temp_min}</p>
				<p>max temp: {props.weatherDetails.main.temp_max}</p>
				<p>humidity: {props.weatherDetails.main.humidity}</p>
			</div>
		</div>
	);
}

WeatherDetails.propTypes = {
	weatherDetails: PropTypes.object.isRequired,
};