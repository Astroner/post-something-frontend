import React, { FC, useState, useCallback, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Grid, Paper, TextField, Button } from "@material-ui/core"
import { AxiosError } from "axios"
import cn from "./SignUp.module.scss"
import PageLayout from "@/layouts/PageLayout"

import { createUser } from "@/api/user"
import { SIGNIN } from "@/routs"
import validate from "@/helpers/validateEmail"

export interface ISignUp {}

const SignUp: FC<ISignUp> = (props) => {
	const [mail, setMail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [fname, setFName] = useState<string>("")
	const [sname, setSName] = useState<string>("")
	const [formData, setForm] = useState<null | {
		email: string
		password: string
		first: string
		second: string
	}>(null)
	const [isSighned, setSighned] = useState<boolean>(false)
	const [blurred, setBlur] = useState<boolean>(false)
	const [errored, setError] = useState(false)
	const submit = useCallback(() => {
		setForm({ email: mail, first: fname, second: sname, password: pass })
	}, [mail, fname, sname, pass])

	useEffect(() => {
		if (!formData) {
			return
		}
		let mounted = true
		setBlur(true)
		createUser(
			formData.email,
			formData.password,
			formData.first,
			formData.second
		)
			.then(() => {
				if (!mounted) return
				setSighned(true)
			})
			.catch((err: AxiosError) => {
				if (!mounted) return
				if (err.response?.status === 400) {
					alert("User with such a mail exists")
				}
			})
		return () => {
			mounted = false
		}
	}, [formData])

	const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setMail(e.target.value)
		if (!validate(e.target.value)) {
			setError(true)
		} else {
			setError(false)
		}
	}, [])

	return (
		<PageLayout>
			{isSighned ? <Redirect to={SIGNIN} /> : null}
			<Grid className={cn.root} container justify="center">
				<Paper className={cn.form}>
					<TextField
						error={errored}
						type={"email"}
						value={mail}
						onChange={change}
						label="E-Mail"
						variant="outlined"
						style={{ width: "50%", marginBottom: "30px" }}
					/>
					<TextField
						value={fname}
						onChange={(e) => setFName(e.target.value)}
						id="outlined-basic"
						label="First Name"
						type="password"
						variant="outlined"
					/>
					<TextField
						value={sname}
						onChange={(e) => setSName(e.target.value)}
						id="outlined-basic"
						label="Last Name"
						type="password"
						variant="outlined"
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
						disabled={blurred}
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

export default SignUp
