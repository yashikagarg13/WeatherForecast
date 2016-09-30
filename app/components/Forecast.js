import React, {PropTypes} from "react";

import ForecastDayContainer from "../containers/ForecastDayContainer";

export default function Forecast (props) {
	return (
		<div className="col-sm-12 text-center">
			<h1 className="text-capitalize margin-top">{props.city}</h1>
			<p className="lead">Select a day</p>
			<div className="margin-top">
				{props.weatherForecast.map(day => 
					<ForecastDayContainer 
						key={day.dt} 
						date={day.dt} 
						icon={day.weather[0].icon} 
						city={props.city}/>)}
			</div>
		</div>
	);
}

Forecast.propTypes = {
	city: PropTypes.string.isRequired,
	weatherForecast: PropTypes.array.isRequired,
}