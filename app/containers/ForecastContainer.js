import React, {Component} from "react";
import moment from "moment";

import Loading from "../components/Loading";
import Forecast from "../components/Forecast";
import APIHelpers from "../helpers/api";

export default class ForecastContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true,
			currentWeatherInfo: [],
		};
	}
	componentDidMount() {
		APIHelpers.getWeatherForecast(this.props.params.city, 5)
		.then((data) => {
			this.setState({
				isLoading: false,
				currentWeatherInfo: data.list,
			});
			console.log(data);
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
				currentWeatherInfo={this.state.currentWeatherInfo} />
		);
	}
}