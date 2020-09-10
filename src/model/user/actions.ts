import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

import { IUserModel } from "./types";

export const login = createAsyncThunk(
    "@user_model/login",
    async (data: { token: string }): Promise<Exclude<IUserModel["profile"], undefined>> => {
        console.log(data)
        return {
            email: "example@email.com",
            firstName: "example",
            lastName: "example"
        }
    }
)

export const logout = createAction("@user_model/logout")