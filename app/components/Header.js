import React, {Component} from "react";

import CityFormContainer from "../containers/CityFormContainer";
import APIHelpers from "../helpers/api";

export default class Header extends Component {
	render () {
		return (
			<div className="header clearfix">
				<h3 className="no-padding-margin pull-left">Weather Forecast</h3>
				<div className="pull-right">
					<CityFormContainer inline={true} />
				</div>
			</div>
		);
	}
}