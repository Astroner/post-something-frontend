import React, { FC, memo, ReactNode } from "react"

import cn from "./GlobalWidth.module.scss"

export interface IGlobalWidth {
	children?: ReactNode
}

const GlobalWidth: FC<IGlobalWidth> = (props) => {
	return (
		<div className={cn.root}>
			<div className={cn.content}>{props.children}</div>
		</div>
	)
}

export default memo(GlobalWidth)
