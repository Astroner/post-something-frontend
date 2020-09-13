import React, { FC, memo, ReactNode } from "react"

import cn from "./GlobalWidth.module.scss"

export interface IGlobalWidth {
	children?: ReactNode

	classes?: {
		container?: string
		content?: string
	}
}

const GlobalWidth: FC<IGlobalWidth> = (props) => {
	return (
		<div className={`${cn.root} ${props.classes?.container || ""}`}>
			<div className={`${cn.content} ${props.classes?.content || ""}`}>
				{props.children}
			</div>
		</div>
	)
}

export default memo(GlobalWidth)
