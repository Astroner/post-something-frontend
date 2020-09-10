import React from "react";
import { render } from 'react-dom'
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./helpers/redux/store";

import "./translation"
import "./global.scss"
import "normalize.css"

const target = document.getElementById("root")

render(
	<Provider store={store}>
		<App />
	</Provider>,
	target
)