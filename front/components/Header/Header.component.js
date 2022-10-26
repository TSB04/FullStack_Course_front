import * as React from "react"
import { AppBar, Typography } from "@mui/material"


const myStyle = {
   bar: {
    background: "linear-gradient(9deg, rgba(38,22,12,1) 0%, rgba(66,53,46,1) 50%, rgba(95,48,19,1) 100%)",
    height: "8%"
   }         
}
class Header extends React.Component {
    render() {
        return (
            <AppBar sx={myStyle.bar}>
                <Typography>hello</Typography>
            </AppBar>
        )
    }
}

export default Header