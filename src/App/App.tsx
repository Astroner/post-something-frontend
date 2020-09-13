import React, { FC, memo, ReactNode } from "react"
import { IconButton, AppBar, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import GlobalWidth from "@/layouts/GlobalWidth/GlobalWidth"

export interface IApp {
	children: ReactNode
}

const App: FC<IApp> = (props) => {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<GlobalWidth>
						<IconButton color="inherit">
							<MenuIcon />
						</IconButton>
					</GlobalWidth>
				</Toolbar>
			</AppBar>
			{props.children}
		</>
	)
}

export default memo(App)
