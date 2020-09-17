import React, { FC, useState, useCallback, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Grid, Paper, TextField, Button } from "@material-ui/core"
import { AxiosError } from "axios"
import cn from "./SignUp.module.scss"
import PageLayout from "@/layouts/PageLayout"

import { createUser } from "@/api/user"
import { SIGNIN } from "@/routs"
import validate from "@/helpers/validateEmail"
import { useTranslation } from "react-i18next"

export interface ISignUp {}
const ButtonInput = { display: "block", marginTop: "30px" }
const createFunction = (setter: (value: string) => void) => (
	e: React.ChangeEvent<HTMLInputElement>
) => {
	setter(e.target.value)
}

const SignUp: FC<ISignUp> = (props) => {
	const [signerror, setSignError] = useState<string>("")
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
	const { t } = useTranslation()

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
					setSignError("User with such a mail exists")
				} else {
					setSignError("There was an error, try again")
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

	const changePass = useCallback(createFunction(setPass), [])
	const changeFName = useCallback(createFunction(setFName), [])
	const changeSname = useCallback(createFunction(setSName), [])

	return (
		<PageLayout>
			{isSighned ? <Redirect to={SIGNIN} /> : null}
			<Grid className={cn.root} container justify="center">
				<Paper className={cn.form} elevation={2}>
					<TextField
						error={errored}
						type={"email"}
						value={mail}
						onChange={change}
						label={t("signup.email")}
						variant="outlined"
					/>
					<TextField
						value={fname}
						onChange={changeFName}
						id="outlined-basic"
						label={t("signup.name")}
						variant="outlined"
					/>
					<TextField
						value={sname}
						onChange={changeSname}
						id="outlined-basic"
						label={t("signup.sur")}
						variant="outlined"
					/>
					<TextField
						value={pass}
						onChange={changePass}
						id="outlined-basic"
						label={t("signup.pass")}
						type="password"
						variant="outlined"
					/>
					<Button
						disabled={blurred}
						style={ButtonInput}
						onClick={submit}
						variant="contained"
					>
						{t("signup.buttontxt")}
					</Button>
				</Paper>
			</Grid>
			{!!signerror ? <Paper>{signerror}</Paper> : null}
		</PageLayout>
	)
}

export default SignUp
