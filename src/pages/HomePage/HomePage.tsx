import React, { FC, memo } from "react"
import PageLayout from "@/layouts/PageLayout"
import { useTranslation } from "react-i18next"
import usePosts from "./usePosts"
import { Grid, Paper } from "@material-ui/core"

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
						<Paper elevation={2}>
							<div
								style={{
									paddingBottom: "20px",
									wordWrap: "normal",
									textOverflow: "hidden",
								}}
							>
								{item.title}
							</div>
							<div>{item.text}</div>
						</Paper>
					</Grid>
				))}
			</Grid>
		</PageLayout>
	)
}

export default memo(HomePage)
