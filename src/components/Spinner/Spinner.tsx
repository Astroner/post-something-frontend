import React, { FC } from "react"

import cn from "./Spinner.module.scss"
import { CircularProgress, Grid } from "@material-ui/core"

export interface ISpinner {}

const Spinner: FC<ISpinner> = (props) => {
	return (
		<Grid container justify="center" className={cn.spin}>
			<CircularProgress />
		</Grid>
	)
}

export default Spinner
