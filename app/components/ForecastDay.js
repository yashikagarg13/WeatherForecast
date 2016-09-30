import React, {PropTypes} from "react";
import Utils from "../helpers/utils";

export default function ForecastDay (props) {
	return (
		<div>
			<img src={Utils.getImageLink(props.icon)} height="100" width="100"/>
			<p><strong>{Utils.getDateStr(props.date)}</strong></p>
		</div>
	);
}

ForecastDay.propTypes = {
	icon: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
}