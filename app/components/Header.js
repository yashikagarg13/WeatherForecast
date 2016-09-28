import React, {Component} from "react";

export default class Header extends Component {
	render () {
		return (
			<div className="header clearfix">
				<h3 className="no-padding-margin pull-left">Weather Forecast</h3>
				<div className="pull-right">
					<form className="form-inline">
						<div className="form-group">
							<input type="text" placeholder="Enter city or state" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-success">Get Weather</button>
					</form>
				</div>
			</div>
		);
	}
}