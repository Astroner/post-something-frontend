import React, { FC, ComponentProps } from "react"

import cn from "./Spinner.module.scss"
import { CircularProgress, Grid } from "@material-ui/core"

type ContProps = ComponentProps<typeof Grid>

export interface ISpinner {
	classes?: {
		cont?: string
		spinner?: string
	}
	justify?: ContProps["justify"]
	align?: ContProps["alignItems"]
}

const Spinner: FC<ISpinner> = (props) => {
	return (
		<Grid
			container
			justify={props.justify || "center"}
			alignItems={props.align}
			className={`${cn.spin} ${props.classes?.cont || " "}`}
		>
			<CircularProgress className={props.classes?.spinner || ""} />
		</Grid>
	)
}

export default Spinner
