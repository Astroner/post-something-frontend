import React, { FC } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

import PageLayout from "@/layouts/PageLayout"

import cn from './Empty.module.scss'
import { HOME } from '@/routs';

export interface IEmpty {

}

const Empty: FC<IEmpty> = props => {

    const { t } = useTranslation();

    return (
		<PageLayout title={"404"}>
			<Grid container alignItems="center" direction="column">
				<Typography variant="h3" color="textSecondary">
					{t("empty.title")}
				</Typography>
				<Link to={HOME}>{t("to_home")}</Link>
			</Grid>
		</PageLayout>
	)
}

export default Empty
