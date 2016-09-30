import React, {PropTypes} from "react";
import moment from "moment";
import APIHelpers from "../helpers/api";

export default function ForecastDay (props) {
	const dateStr = moment.unix(props.date).format("dddd, MMM D");
	return (
		<div>
			<img src={APIHelpers.getImageLink(props.icon)} height="100" width="100"/>
			<p><strong>{dateStr}</strong></p>
		</div>
	);
}

ForecastDay.propTypes = {
	icon: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
}