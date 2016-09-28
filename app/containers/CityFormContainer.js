import React, {Component} from "react";
import CityForm from "../components/CityForm";
import APIHelpers from "../helpers/api";

export default class CityFormContainer extends Component {
	static defaultProps = {
		inline: false,
	};

	constructor (props) {
		super(props); 
		this.state = {
			city: "",
		};
	}
	handleChange (e) {
		this.setState({
			city: e.target.value
		});
	}
	handleSubmit () {
		APIHelpers.getCurrentWeather(this.state.city)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log("error", error);
			})
	}
	render () {
		return (
			<CityForm 
				city={this.state.city}
				inline={this.props.inline}
				onSubmit={this.handleSubmit.bind(this)}
				onChange={this.handleChange.bind(this)} />
		);
	}
}