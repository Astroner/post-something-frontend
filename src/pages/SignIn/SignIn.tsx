import React, { FC } from "react"

import cn from "./SignIn.module.scss"

export interface ISignIn {}

const SignIn: FC<ISignIn> = (props) => {
	return <div className={cn.root}>SignIn</div>
}

export default SignIn
