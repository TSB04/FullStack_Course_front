import React, { useState } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import Theme from "../../theme/Theme"
import axios from "axios"
import Cookies from "universal-cookie"

const myStyle = {
    gridConatiner: {
        backgroundColor: Theme.palette.secondary.light,
        borderRadius: "8px",
        padding: "2%",
        margin: "5% 0 15% 0"
    },
}


function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [handleInputs, setHandleInputs] = useState({
        email: {
            helperText: "Please enter your email",
            error: false
        },
        password: {
            helperText: "Please enter your password",
            error: false
        }
    })
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
            if (data) {
                if (data.message) {
                    let jwt = data.token
                    const cookies = new Cookies()
                    cookies.set('jwt', jwt, { path: '/' })
                    localStorage.setItem("fname", data.fName)
                    sessionStorage.setItem("lname", data.lName)
                    localStorage.setItem("userPrvlge", data.isAdmin)
                    window.alert("welcome "+data.fName+""+data.lName)
                    window.location.replace('/')
                } else if (!data.email && data.password) {
                    setHandleInputs(prevState => ({
                        ...prevState, 
                        email: {
                            helperText: prevState.email.helperText,
                            error: false
                        },
                        password:{
                            helperText: data.password.message,
                            error: true
                        }
                    }))
                } else if (!data.password && data.email) {
                    setHandleInputs(prevState => ({
                        ...prevState, 
                        email: {
                            helperText: data.email.message,
                            error: true 
                        },
                        password: {
                            helperText: "",
                            error: false
                        }
                    }))
                }else if(!data.email && !data.password) {
                    setHandleInputs(prevState => ({
                        ...prevState, 
                        email: {
                            helperText: "",
                            error: false
                        },
                        password: {
                            helperText: "",
                            error: false
                        }
                    }))
                } else if(data.email && data.password) {
                    setHandleInputs(prevState => ({
                        ...prevState, 
                        email: {
                            helperText: data.email.message,
                            error: true
                        },
                        password: {
                            helperText: data.password.message,
                            error: true
                        }
                    }))
                }
                if(data.error) {
                    setError(data.error)
                }

            } else {
                throw "the servor doesn't respond"
            }
        } catch (err) {
            console.log({error: err})
        }
    }
    return (
        <Grid2 container xs md={4} mdOffset={-2} direction="column" justifyContent="space-evenly" alignItems="center" rowGap={2} sx={myStyle.gridConatiner}>
            <Grid item>
                <Typography variant="h3" >
                    Log in
                </Typography>
            </Grid>
            <Grid item width="80%">
                <TextField
                    fullWidth
                    required
                    id="demo-helper-text-aligned-email"
                    label="email"
                    name="email"
                    type="email"
                    helperText={handleInputs.email.helperText}
                    error={handleInputs.email.error} 
                    onChange={ e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item width="80%">
                <TextField
                    fullWidth
                    required
                    type="password"
                    id="demo-helper-text-aligned-password"
                    label="Password"
                    name="password" 
                    error={handleInputs.password.error}
                    helperText={handleInputs.password.helperText}
                    onChange={ e => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={handleSubmit}> Login </Button>
            </Grid>
            {error && <Typography  variant="warning">{error}</Typography> }
            <Link href="/signup" underline="hover">
                <Typography variant="body2" color="primary">Don't have an account yet !!!</Typography>
            </Link>
        </Grid2>
    )
}
export default Login

