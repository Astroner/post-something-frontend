import { createAsyncThunk, createAction } from "@reduxjs/toolkit"

import { IUserModel } from "./types"
import { getProfile } from "@/api/user"

export const login = createAsyncThunk(
	"@user_model/login",
	async (data: {
		token: string
	}): Promise<Exclude<IUserModel["profile"], undefined>> => {
		const user = await getProfile(data.token)
		return {
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
		}
	}
)

export const logout = createAction("@user_model/logout")
