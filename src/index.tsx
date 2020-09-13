import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom"

import App from "./App"
import { store } from "./helpers/redux/store"

import "./translation"
import "./global.scss"
import "normalize.css"
import * as Routs from "@/routs"
import HomePage from "./pages/HomePage"
import Empty from "./pages/Empty"
import SignIn from "./pages/SignIn"

const target = document.getElementById("root")

render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route exact path="/">
						<Redirect to={Routs.HOME} />
					</Route>
					<Route path={Routs.HOME} component={HomePage} />
					<Route path={Routs.SIGNIN} component={SignIn} />
					<Route path="*" component={Empty} />
				</Switch>
			</App>
		</Router>
	</Provider>,
	target
)
