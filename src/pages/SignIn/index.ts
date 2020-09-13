import { login } from "@/model/user/actions"
import { memo } from "react"
import { connect, MapDispatchToProps } from "react-redux"

import P, { ISignIn } from "./SignIn"

const mapDispatch: MapDispatchToProps<Pick<ISignIn, "login">, ISignIn> = (
	dispatch
) => ({
	login: (token) => {
		dispatch(login({ token }) as any)
	},
})

export default connect(null, mapDispatch)(memo<ISignIn>(P))
