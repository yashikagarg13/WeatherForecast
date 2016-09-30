import React, {Component} from "react";

import Loading from "../components/Loading";
import WeatherDetails from "../components/WeatherDetails";
import APIHelpers from "../helpers/api";		

export default class WeatherDetailsContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true,
			currentWeatherInfo: {},
		};
	}
	componentDidMount() {
		APIHelpers.getCurrentWeather(this.props.params.city)
		.then((data) => {
			this.setState({
				isLoading: false,
				currentWeatherInfo: data,
			});
		})
		.catch((error) => {
			console.log("error", error);
		});
	}
	render () { console.log(this.state);
		if (this.state.isLoading) 
			return <Loading />;

		return (
			<WeatherDetails
				weatherDetails={this.state.currentWeatherInfo} />
		);
	}
}