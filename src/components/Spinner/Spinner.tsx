import React, { FC } from "react"

import cn from "./Spinner.module.scss"
import { CircularProgress } from "@material-ui/core"

export interface ISpinner {}

const Spinner: FC<ISpinner> = (props) => {
	return (
		<div className={cn.root}>
			<CircularProgress />
		</div>
	)
}

export default Spinner
