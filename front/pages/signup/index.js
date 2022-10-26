import React, { useState } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Grid, TextField, Typography, Button } from "@mui/material"
import Theme from "../../theme/Theme"
import bgImage from "../../public/book image/livres-a-lire-CRPE-2022.jpg"
import axios from "axios"


const myStyle = {
    paper: {
        backgroundImage: `url(${bgImage.src})`,
        width: '212,1vh',
        height: '100vh'
    },
    gridConatiner: {
        backgroundColor: Theme.palette.primary.light,
        borderRadius: "8px",
        marginTop: "2%",
        padding: "1%"
    },
}




function Signup () {

    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPw, setConfirmPw] = useState("")
    const [formValid, setFormValid] = useState(false)

    const Submit = () => {
        if (password === confirmPw) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }
        

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            fname, lname, email, password
        }
        try {
            const { data } = await axios({
                method: "POST",
                url: "/api/signin",
                data: formData
            })
            console.log({data})
        } catch (err) {
            console.log({error: err})
        }
    }
    
    return (

        <Grid2 container xs md={4} mdOffset={3} rowGap={2} sx={myStyle.gridConatiner} 
            justifyContent="space-evenly" alignItems="center" direction="column"
        >
            <Grid item>
                <Typography variant="h3" >
                    Sign on
                </Typography>
            </Grid>
            <Grid item width="80%">
                <TextField
                    size="small"
                    fullWidth
                    type="input"
                    helperText={!fname && "Please enter your first name"}
                    id="demo-helper-text-aligned"
                    label="Firstname"
                    name="fname" 
                    onChange={ e => setFName(e.target.value)}
                />
            </Grid>
            <Grid item width="80%">
                <TextField
                    size="small"
                    fullWidth
                    type="input"
                    helperText={!lname && "Please enter your last name"}
                    id="demo-helper-text-aligned"
                    label="Lastname"
                    name="lname" 
                    onChange={ e => setLName(e.target.value)}
                />
            </Grid>
            <Grid item width="80%">
                <TextField
                    size="small"
                    fullWidth
                    required
                    helperText={!email && "Please enter your email"}
                    id="demo-helper-text-aligned"
                    label="email"
                    name="email"
                    type="email" 
                    onChange={ e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item width="80%">
                <TextField
                    size="small"
                    fullWidth
                    required
                    type="password"
                    helperText={!password && "Please enter your password"}
                    id="demo-helper-text-aligned"
                    label="Password"
                    name="password" 
                    onChange={ e => setPassword(e.target.value)}
                />
            </Grid>
            {password && 
                <Grid item width="80%">
                    <TextField
                        size="small"
                        fullWidth
                        required
                        type="password"
                        helperText={!formValid && "The confirm password doesn't match with password"}
                        id="demo-helper-text-aligned"
                        label="Confirm password"
                        name="confirm_password" 
                        onChange={e => setConfirmPw(e.target.value)}
                        onBlur={Submit}
                    />
                </Grid>
            }
            <Grid item>
                <Button disabled={!formValid} variant="contained" type="submit" onClick={handleSubmit} > Sign up </Button>
            </Grid>
             
        </Grid2>
    )
}
export default Signup