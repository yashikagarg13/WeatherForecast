import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Main from "../components/Main";
import Home from "../components/Home";
import ForecastContainer from "../containers/ForecastContainer";
import WeatherDetailsContainer from "../containers/WeatherDetailsContainer";

let routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route name="forecast" path="forecast/:city" component={ForecastContainer} />
			<Route name="weatherDetail" path="detail/:city" component={WeatherDetailsContainer} />
		</Route>
	</Router>
);

export default routes;
