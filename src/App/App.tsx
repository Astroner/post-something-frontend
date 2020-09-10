import React, { FC, memo } from 'react';
import { Router, Route } from "react-router-dom";

import { history } from "@/helpers/history"
import * as Routs from "@/routs";
import HomePage from "@/pages/HomePage";

export interface IApp {
    
}

const App: FC<IApp> = props => {
    return (
		<Router history={history}>
			<Route path={Routs.HOME} component={HomePage} />
		</Router>
	)
}

export default memo(App)