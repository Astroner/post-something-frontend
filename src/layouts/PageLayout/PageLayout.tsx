import React, { FC, useEffect, ReactNode, ComponentProps } from "react"

// import cn from './PageLayout.module.scss'

import GlobalWidth from "../GlobalWidth"

export interface IPageLayout {
	title?: string
	children?: ReactNode

	classes?: ComponentProps<typeof GlobalWidth>["classes"]
}

const PageLayout: FC<IPageLayout> = (props) => {
	useEffect(() => {
		if (props.title) {
			const title = document.querySelector("title")
			if (title) {
				title.innerText = `${props.title} | Post something`

				return () => {
					title.innerText = "Post something"
				}
			}
		}
	}, [props.title])

	return <GlobalWidth classes={props.classes}>{props.children}</GlobalWidth>
}

export default PageLayout
