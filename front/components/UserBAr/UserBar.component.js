import * as React from "react"
import { Typography, Box, Avatar, Grid } from "@mui/material"
import Theme from "../../theme/Theme"
import LogoutIcon from '@mui/icons-material/Logout'

const myStyle = {
    container: {
        backgroundColor: Theme.palette.primary.main,
        width: "80%",
        height: "90%",
        margin: "10%",
        borderRadius: "5px"
    },
    avatarContainer: {
        backgroundColor: "red",
        justutifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        avatar: {
            width: "18vh",
            height: "20vh",
            marginBottom: "5%"
        }
    }
    
}

class UserBar extends React.Component {
    render() {
        return (
            <Grid container direction="column"  sx={myStyle.container}>
                <Grid item xs={4} sx={myStyle.avatarContainer}>
                    <Avatar alt="User Nom" src="/icon.png"  sx={myStyle.avatarContainer.avatar} />
                    <Typography>User nom</Typography>
                </Grid>
                <Grid item xs={6} backgroundColor="blue">
                    Grid midle
                </Grid>
                <Grid item xs={2} backgroundColor="tomato">
                    <LogoutIcon variant="contained" color="secondary" fontSize="large" />
                </Grid>
                
            </Grid>
        )
    }
}   

export default UserBar
