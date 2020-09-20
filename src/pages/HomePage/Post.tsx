import React, { FC, memo } from "react"
import { Paper } from "@material-ui/core"

export interface IPost {
	title: string
	image: string
	text: string
}

const Post: FC<IPost> = (props) => {
	return (
		<Paper
			onMouseOver={() => {
				document.getElementById("id")?.setAttribute("display", "initi")
			}}
			elevation={2}
			style={{
				padding: "15px 20px ",
				backgroundImage: `url(${props.image})`,
				height: "400px",
				backgroundSize: "cover",
			}}
		>
			<div
				style={{
					width: "100%",
					paddingBottom: "20px",
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
					color: "white",
					textShadow: "2px",
				}}
			>
				{props.title}
			</div>
			<div
				id={"id"}
				style={{
					color: "white",
					display: "none",
				}}
			>
				{props.text}
			</div>
		</Paper>
	)
}

export default memo(Post)
