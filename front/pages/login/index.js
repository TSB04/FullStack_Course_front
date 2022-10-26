import React, { useState } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Grid, TextField, Typography, Button } from "@mui/material"
import Theme from "../../theme/Theme"
import bgImage from "../../public/book image/livres-a-lire-CRPE-2022.jpg"
import axios from "axios"
import Cookies from 'universal-cookie'

const myStyle = {
    paper: {
        backgroundImage: `url(${bgImage.src})`,
        width: '212,1vh',
        height: '100vh'
    },
    gridConatiner: {
        backgroundColor: Theme.palette.primary.light,
        borderRadius: "8px",
        padding: "2%",
        marginTop: "5%"
    },
}

function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            email, password
        }
        try {
            const { data } = await axios({
                method: "POST",
                url: "/api/login",
                data: formData
            })
                let jwt = data.token
                const cookies = new Cookies()
                cookies.set('jwt', jwt, { path: '/' })
                console.log(data)
            // if (data.message) {
            //     console.log(data)
            //     window.alert("connected successfully")
            //     window.location.replace('/')
            // } else {
            //     document.getElementById("test").innerHTML = data.error
            // }
        } catch (err) {
            console.log({error: err})
        }
    }
    return (
        <Grid2 container xs md={4} mdOffset={3} alignSelf="center" direction="column" justifyContent="space-evenly" alignItems="center" rowGap={2} sx={myStyle.gridConatiner}>
            <Grid item>
                <Typography variant="h3" >
                    Log in
                </Typography>
            </Grid>
            <Grid item width="80%">
                <TextField
                    fullWidth
                    required
                    helperText={!email && "Please enter your email"}
                    id="demo-helper-text-aligned-email"
                    label="email"
                    name="email"
                    type="email" 
                    onChange={ e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item width="80%">
                <TextField
                    fullWidth
                    required
                    type="password"
                    helperText={!password && "Please enter your password"}
                    id="demo-helper-text-aligned-password"
                    label="Password"
                    name="password" 
                    onChange={ e => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={handleSubmit}> Login </Button>
            </Grid>
            <p id="test"></p>
        </Grid2>
    )
}
export default Login