import { combineReducers } from "@reduxjs/toolkit";

import user from "@/model/user";

export const reducer = combineReducers({
	user,
})

export type RootState = ReturnType<typeof reducer>;