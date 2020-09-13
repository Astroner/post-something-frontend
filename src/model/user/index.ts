import { createReducer } from "@reduxjs/toolkit"

import { IUserModel } from "./types"
import * as Actions from "./actions"

const initialState: IUserModel = {}

export default createReducer<IUserModel>(initialState, (builder) =>
	builder
		.addCase(Actions.login.pending, (state, action) => ({
			...state,
			token: action.meta.arg.token,
			profile: undefined,
		}))
		.addCase(Actions.login.fulfilled, (state, action) => ({
			...state,
			profile: action.payload,
		}))
		.addCase(Actions.login.rejected, () => initialState)
		.addCase(Actions.logout, () => initialState)
)
