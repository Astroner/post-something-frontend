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
						<Paper elevation={2} style={{ padding: "15px 20px " }}>
							<div>
								<img
									src={item.displayImage}
									style={{ width: "100%" }}
									alt="Mamu ebal"
								></img>
							</div>
							<div
								style={{
									width: "100%",
									paddingBottom: "20px",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
								}}
							>
								{item.title}
							</div>
							<div>{item.shortText}</div>
						</Paper>
					</Grid>
				))}
			</Grid>
		</PageLayout>
	)
}

export default memo(HomePage)
