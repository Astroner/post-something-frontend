import { RootState as RS, reducer } from "./reducer"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import thunk from "redux-thunk"

export const store = configureStore({
	reducer,
	middleware:
		process.env.NODE_ENV === "development" ? [thunk, logger] : [thunk],
})

export type RootState = RS
export type AppDispatch = typeof store.dispatch
