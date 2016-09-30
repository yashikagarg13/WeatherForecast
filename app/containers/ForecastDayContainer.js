import React, {Component, PropTypes} from "react";

import ForecastDay from "../components/ForecastDay";
import APIHelpers from "../helpers/api";

export default class ForecastDayContainer extends Component {
	constructor (props) {
		super(props);
	}
	handleClick () {
		this.context.router.push("/detail/" + this.props.city);
	}
	render () {
		return (
			<div className="day col-sm-3" 
				 onClick={this.handleClick.bind(this)}>
				<ForecastDay 
					icon={this.props.icon}
					date={this.props.date} />
			</div>
		);
	}
}

ForecastDayContainer.contextTypes = {
	router: PropTypes.object.isRequired
}