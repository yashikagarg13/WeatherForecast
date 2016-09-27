import React, {Component} from "react";

export default class Main extends Component {
	render () {
		return (
			<div>
				<div className="header">Header.js</div>
				<div className="body">{this.props.children}</div>
			</div>
		);
	}
}