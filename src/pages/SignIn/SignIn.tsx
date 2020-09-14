import React, { FC, useState, useCallback, useEffect } from "react"

import cn from "./SignIn.module.scss"
import PageLayout from "@/layouts/PageLayout"

import { Grid, Paper, TextField, Button } from "@material-ui/core"

import { signIn } from "@/api/user"
import { useDispatch } from "react-redux"
import { login } from "@/model/user/actions"
import { Redirect } from "react-router-dom"
import { HOME } from "@/routs"
export interface ISignIn {}

const SignIn: FC<ISignIn> = (props) => {
	const [mail, setMail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [formData, setForm] = useState<null | {
		email: string
		password: string
	}>(null)
	const [isLogged, setLogged] = useState<boolean>(false)

	const submit = useCallback(() => {
		setForm({ email: mail, password: pass })
	}, [mail, pass])

	const dispatch = useDispatch()

	useEffect(() => {
		if (!formData) {
			return
		}
		let mounted = true
		signIn(formData.email, formData.password).then((result) => {
			if (!mounted) return
			dispatch(login(result))
			setLogged(true)
		})
		return () => {
			mounted = false
		}
	}, [formData, dispatch])

	return (
		<PageLayout>
			{isLogged ? <Redirect to={HOME} /> : null}
			<Grid className={cn.root} container justify="center">
				<Paper className={cn.form}>
					<TextField
						value={mail}
						onChange={(e) => setMail(e.target.value)}
						label="E-Mail"
						variant="outlined"
						style={{ width: "50%", marginBottom: "30px" }}
					/>
					<TextField
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						id="outlined-basic"
						label="Password"
						type="password"
						variant="outlined"
					/>
					<Button
						style={{ display: "block", marginTop: "30px" }}
						onClick={submit}
					>
						Sign In
					</Button>
				</Paper>
			</Grid>
		</PageLayout>
	)
}

export default SignIn
