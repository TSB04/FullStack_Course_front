import * as React from "react"
import { Grid, Typography, Paper, Box } from "@mui/material"
import Header from "../Header/Header.component"
import UserBar from "../UserBAr/UserBar.component"
import bgImage from "../../public/book image/thumb-1920-26102.jpg"
import { useEffect, useState } from "react"


const myStyle = {
	header: {
		height: "8vh",
	},
	globalContainer: {
		backgroundImage: `url(${bgImage.src})`,
		width: "212,1vh",
		height: "92vh",
	},
	aside:{
		padding: "2% 0 0 1%"
	}
}

const Layout = ({ children }) => {

		

	const [userBar, setUserBar] = useState(null)
	
	return (
		<>
			<Grid sx={myStyle.header}>
				<Header/>
			</Grid>
			<Grid container sx={myStyle.globalContainer}>
				<Grid item xs={1.6} sx={myStyle.aside} alignItems="center">
					{typeof window !== "undefined" && window.location.pathname !== "/login" && window.location.pathname !== "/signup" && 
						useEffect(()=> {setUserBar(<UserBar/>)}, [])
					}
					{userBar}
				</Grid>
				<Grid container item xs={10.4} component="main" justifyContent="center">
					{ children }
				</Grid>
			</Grid>		
		</>
	)

}

export default Layout
