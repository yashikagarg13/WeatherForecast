import React, {Component, PropTypes} from "react";

export default class Loading extends Component {
	static defaultProps = {
		text: "Loading",
		speed: 300,
	};

	constructor (props) {
		super(props);
		this.originalText = this.props.text;
		this.state = {
			text: this.originalText,
		}
	}
	componentDidMount () {
		this.interval = setInterval(() => {
			if (this.state.text != this.originalText + "...") {
				this.setState({
					text: this.state.text + ".",
				});
			} else {
				this.setState({
					text: this.originalText,
				});
			}
		}, this.props.speed);
	}
 	componentWillUnmount () {
 		clearInterval(this.interval);
 	}
	render () {
		return (
			<div className="jumbotron col-sm-offset-4 col-sm-4 text-center">
				<h1>{this.state.text}</h1>
			</div>	
		);
	}
}

Loading.propTypes = {
	text: PropTypes.string,
	speed: PropTypes.number,
}