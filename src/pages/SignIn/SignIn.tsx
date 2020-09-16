import React, { FC, useState, useCallback, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Grid, Paper, TextField, Button } from "@material-ui/core"

import cn from "./SignIn.module.scss"
import PageLayout from "@/layouts/PageLayout"

import { signIn } from "@/api/user"
import { HOME } from "@/routs"
import validate from "@/helpers/validateEmail"
import { useTranslation } from "react-i18next"

export interface ISignIn {
	login: (token: string) => void
}

const SignIn: FC<ISignIn> = ({ login, ...props }) => {
	const [mail, setMail] = useState<string>("")
	const [pass, setPass] = useState<string>("")
	const [formData, setForm] = useState<null | {
		email: string
		password: string
	}>(null)
	const [isLogged, setLogged] = useState<boolean>(false)
	const [blurred, setBlur] = useState<boolean>(false)
	const [errored, setError] = useState(false)
	const submit = useCallback(() => {
		setForm({ email: mail, password: pass })
	}, [mail, pass])
	const { t } = useTranslation()

	useEffect(() => {
		if (!formData) {
			return
		}
		let mounted = true
		setBlur(true)
		signIn(formData.email, formData.password)
			.then((result) => {
				if (!mounted) return

				login(result.token)
				setLogged(true)
			})
			.finally(() => {
				if (!mounted) return
				setBlur(false)
			})
		return () => {
			mounted = false
		}
	}, [formData, login])

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
			{isLogged ? <Redirect to={HOME} /> : null}
			<Grid className={cn.root} container justify="center">
				<Paper className={cn.form}>
					<TextField
						error={errored}
						type={"email"}
						value={mail}
						onChange={change}
						label={t("signin.email")}
						variant="outlined"
						style={{ width: "50%", marginBottom: "30px" }}
					/>
					<TextField
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						id="outlined-basic"
						label={t("signin.pass")}
						type="password"
						variant="outlined"
					/>
					<Button
						disabled={blurred}
						style={{ display: "block", marginTop: "30px" }}
						onClick={submit}
					>
						{t("signin.button")}
					</Button>
				</Paper>
			</Grid>
		</PageLayout>
	)
}

export default SignIn
