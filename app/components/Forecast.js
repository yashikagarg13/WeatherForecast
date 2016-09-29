import React, {Component} from "react";
import Loading from "./Loading";
import APIHelpers from "../helpers/api";

export default class Forecast extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true,
			currentWeatherInfo: {},
		};
	}
	componentDidMount() {
		APIHelpers.getCurrentWeather(this.state.city)
		.then((data) => {
			this.setState({
				isLoading: false,
				currentWeatherInfo: data,
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
			<div>Forecast Component</div>
		);
	}
}