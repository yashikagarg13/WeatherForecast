import React, {Component} from "react";
require("../styles/main.css");

export default class Home extends Component {
	render () {
		return (
			<div className="col-sm-offset-4 col-sm-4 text-center">
				<h1>Enter a City and State</h1>
				<form>
					<div className="form-group">
						<input type="text" placeholder="Enter city or state" className="form-control"/>
					</div>
					<button type="submit" className="btn btn-success">Get Weather</button>
				</form>
			</div>
		);
	}
}