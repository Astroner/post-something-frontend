import React, { FC, memo, useCallback } from "react"
import PageLayout from "@/layouts/PageLayout"
import usePosts from "./usePosts"
import { Grid } from "@material-ui/core"
import Post from "@/pages/HomePage/Post/Post"
import useWindowScroll from "@/helpers/hooks/useWindowScroll"
import Spinner from "@/components/Spinner"

export interface IHomePage {}

const gridStyle = { paddingTop: "20px" }

const HomePage: FC<IHomePage> = () => {
	const { posts, loading, nextPage, hasNext } = usePosts()

	useWindowScroll(
		"bottom",
		useCallback(() => {
			if (!loading && hasNext) {
				nextPage()
			}
		}, [nextPage, loading, hasNext])
	)

	return (
		<PageLayout title={"Home page"}>
			<Grid container spacing={1} style={gridStyle}>
				{posts.map((item) => (
					<Grid item xs={4} key={item.id} direction={"column"}>
						<Post
							title={item.title}
							image={item.displayImage}
							text={item.shortText}
						></Post>
					</Grid>
				))}
			</Grid>
			{loading && <Spinner />}
		</PageLayout>
	)
}

export default memo(HomePage)
