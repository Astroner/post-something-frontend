import React, {
	FC,
	memo,
	useState,
	useCallback,
	useMemo,
	CSSProperties,
} from "react"
import { Paper, Typography } from "@material-ui/core"
import cn from "./Post.module.scss"
export interface IPost {
	title: string
	image: string
	text: string
}

const Post: FC<IPost> = (props) => {
	const [hovered, setHover] = useState(false)

	const toggle = useCallback(() => {
		setHover((prev) => !prev)
	}, [])

	const bgStyle = useMemo<CSSProperties>(
		() => ({
			backgroundImage: `url(${props.image})`,
		}),
		[props.image]
	)

	return (
		<Paper
			className={cn.paper}
			onMouseOver={toggle}
			onMouseOut={toggle}
			elevation={2}
			style={bgStyle}
		>
			<div className={cn.hiddenText}>
				<Typography variant="h6" className={cn.title}>
					{props.title}
				</Typography>
			</div>
			<div className={hovered ? cn["text--visible"] : cn["text--hidden"]}>
				<Typography variant="body1" color="textPrimary">
					{props.text}
				</Typography>
			</div>
		</Paper>
	)
}

export default memo(Post)
