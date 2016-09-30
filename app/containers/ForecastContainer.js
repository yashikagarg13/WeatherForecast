import React, {Component} from "react";

import Loading from "../components/Loading";
import Forecast from "../components/Forecast";
import APIHelpers from "../helpers/api";

export default class ForecastContainer extends Component {
	constructor (props) {
		super(props);
		this.numberOfDays = 5;
		this.state = {
			isLoading: true,
			weatherForecast: [],
		};
	}
	componentDidMount() {
		APIHelpers.getWeatherForecast(this.props.params.city, this.numberOfDays)
		.then((data) => { console.log(data);
			this.setState({
				isLoading: false,
				weatherForecast: data.list,
			});
		})
		.catch((error) => {
			console.log("error", error);
		});
	}
	render () {
		if (this.state.isLoading) {
			return <Loading />;
		}

		return (
			<Forecast 
				city={this.props.params.city}
				weatherForecast={this.state.weatherForecast} />
		);
	}
}