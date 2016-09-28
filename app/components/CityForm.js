import React, {PropTypes} from "react";

export default function CityForm (props) {
	return (
		<form 
			className={props.inline ? "form-inline" : ""} 
			onSubmit={props.onSubmit}>
			<div className="form-group">
				<input 
					type="text" 
					placeholder="Enter city or state" 
					className="form-control"
					value={props.city}
					onChange={props.onChange}/>
			</div>
			<button 
				type="submit" 
				className="btn btn-success">
				Get Weather</button>
		</form>
	);
}

CityForm.propTypes = {
	city: PropTypes.string.isRequired,
	inline: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired, 
};