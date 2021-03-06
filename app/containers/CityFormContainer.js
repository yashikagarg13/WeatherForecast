import React, {Component, PropTypes} from "react";
import CityForm from "../components/CityForm";

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
		let city = this.state.city;
		this.context.router.push("/forecast/" + city);
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

CityFormContainer.contextTypes = {
	router: PropTypes.object.isRequired
};