import React, { FC, memo } from "react"
import PageLayout from "@/layouts/PageLayout"
import { useTranslation } from "react-i18next"

export interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
	const { t } = useTranslation()

	return <PageLayout title={"Home page"}>{t("homePage.title")}</PageLayout>
}

export default memo(HomePage)
