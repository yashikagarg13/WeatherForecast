import React, {PropTypes} from "react";	
import Utils from "../helpers/utils";
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
				<p>min temp: {Utils.convertTempToDegrees(props.weatherDetails.main.temp_min)} degrees</p>
				<p>max temp: {Utils.convertTempToDegrees(props.weatherDetails.main.temp_max)} degrees</p>
				<p>humidity: {props.weatherDetails.main.humidity}</p>
			</div>
		</div>
	);
}

WeatherDetails.propTypes = {
	weatherDetails: PropTypes.object.isRequired,
};