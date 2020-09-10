import React, { FC, memo } from 'react';
import { Router, Route } from "react-router-dom";
import { IconButton, AppBar, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import { history } from "@/helpers/history"
import * as Routs from "@/routs";
import HomePage from "@/pages/HomePage";

export interface IApp {
    
}

const App: FC<IApp> = props => {
    return (
		<>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton color="inherit">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Router history={history}>
				<Route path={Routs.HOME} component={HomePage} />
			</Router>
		</>
	)
}

export default memo(App)