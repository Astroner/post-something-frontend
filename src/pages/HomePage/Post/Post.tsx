import React, {
	FC,
	memo,
	useState,
	useCallback,
	useMemo,
	CSSProperties,
	useEffect,
} from "react"
import { Paper, Typography } from "@material-ui/core"
import cn from "./Post.module.scss"
import Spinner from "@/components/Spinner"
export interface IPost {
	title: string
	image: string
	text: string
}

const temp = { cont: cn.spin }

const Post: FC<IPost> = (props) => {
	const [imgLoaded, setLoader] = useState(false)
	const [hovered, setHover] = useState(false)

	const toggle = useCallback(() => {
		setHover((prev) => !prev)
	}, [])

	useEffect(() => {
		const image = new Image()
		image.onload = () => setLoader(true)
		image.src = props.image
	}, [props.image])

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
			style={imgLoaded ? bgStyle : undefined}
		>
			{imgLoaded ? (
				<>
					<div className={cn.hiddenText}>
						<Typography variant="h6" className={cn.title}>
							{props.title}
						</Typography>
					</div>
					<div
						className={
							hovered ? cn["text--visible"] : cn["text--hidden"]
						}
					>
						<Typography variant="body1" color="textPrimary">
							{props.text}
						</Typography>
					</div>
				</>
			) : (
				<Spinner classes={temp} align={"center"} justify={"center"} />
			)}
		</Paper>
	)
}

export default memo(Post)
