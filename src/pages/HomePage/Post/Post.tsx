import React, { FC, memo, useState } from "react"
import { Paper, Typography } from "@material-ui/core"
import CN from "./Post.module.scss"
export interface IPost {
	title: string
	image: string
	text: string
}

const Post: FC<IPost> = (props) => {
	const [hovered, setHover] = useState(false)

	return (
		<Paper
			onMouseOver={() => {
				setHover(true)
			}}
			onMouseOut={() => {
				setHover(false)
			}}
			elevation={2}
			style={{
				backgroundImage: `url(${props.image})`,
				height: "400px",
				backgroundSize: "cover",
				position: "relative",
				overflow: "hidden",
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
				<Typography
					variant="h6"
					className={CN.title}
					style={{
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
						position: "absolute",
						width: "100%",
					}}
				>
					{props.title}
				</Typography>
			</div>
			<div
				id={"id"}
				className={hovered ? CN["text--visible"] : CN["text--hidden"]}
			>
				<Typography variant="body1" color="textPrimary">
					{props.text}
				</Typography>
			</div>
		</Paper>
	)
}

export default memo(Post)
