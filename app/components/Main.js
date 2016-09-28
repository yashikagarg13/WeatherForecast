require("../styles/main.css");

import React, {Component} from "react";
import Header from "./Header.js";

export default class Main extends Component {
	render () {
		return (
			<div>
				<Header />
				<div className="body">{this.props.children}</div>
			</div>
		);
	}
}