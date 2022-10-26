import * as React from "react"
import { Grid, Typography, Paper, Box } from "@mui/material"
import Header from "../Header/Header.component"
import UserBar from "../UserBAr/UserBar.component"
import bgImage from "../../public/book image/thumb-1920-26102.jpg"
import { useEffect, useState } from "react"


const myStyle = {
	header: {
		height: "8vh",
		border: "solid tomato 5px"
	},
	globalContainer: {
		backgroundImage: `url(${bgImage.src})`,
		width: "212,1vh",
		height: "92vh",
	},
	main:{
		padding: "1% 0 0 0",
	}
}


const Layout = ({ children }) => {

	const [userBar, setUserBar] = useState()
	return (
		<>
			<Grid sx={myStyle.header}>
				<Header/>
			</Grid>
			<Grid container sx={myStyle.globalContainer}>
				<Grid item xs={1.5}>
					{typeof window !== "undefined" && window.location.pathname !== "/login" && window.location.pathname !== "/signup" && 
						useEffect(()=> {setUserBar(<UserBar/>)}, [])
					}
					{userBar}
				</Grid>
				<Grid item xs={10.5} component="main" sx={myStyle.main}>
						{ children }
				</Grid>
			</Grid>		
		</>
	)

}

export default Layout
