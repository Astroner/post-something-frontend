import React, { FC, memo } from "react"
import PageLayout from "@/layouts/PageLayout"
import { useTranslation } from "react-i18next"
import usePosts from "./usePosts"

export interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
	const { t } = useTranslation()

	const { posts, loading } = usePosts()
	return (
		<PageLayout title={"Home page"}>
			{t("homePage.title")}
			<div>{loading && "Loading..."}</div>
			{posts.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</PageLayout>
	)
}

export default memo(HomePage)
