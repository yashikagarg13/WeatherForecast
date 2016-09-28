import React, {Component} from "react";
require("../styles/main.css");
import CityFormContainer from "../containers/CityFormContainer";

export default class Home extends Component {
	render () {
		return (
			<div className="col-sm-offset-4 col-sm-4 text-center">
				<h1>Enter a City and State</h1>
				<div className="col-sm-6 col-sm-offset-3">
					<CityFormContainer />
				</div>
			</div>
		);
	}
}