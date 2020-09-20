import React, { FC, memo } from "react"
import PageLayout from "@/layouts/PageLayout"
import { useTranslation } from "react-i18next"
import usePosts from "./usePosts"
import { Grid } from "@material-ui/core"
import Post from "@/pages/HomePage/Post"

export interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
	const { t } = useTranslation()

	const { posts, loading } = usePosts()
	return (
		<PageLayout title={"Home page"}>
			{t("homePage.title")}
			<div>{loading && "Loading..."}</div>
			<Grid container spacing={1} style={{ paddingTop: "20px" }}>
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
		</PageLayout>
	)
}

export default memo(HomePage)
