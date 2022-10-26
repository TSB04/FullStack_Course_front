import React, { useState } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Grid, TextField, Typography, Button } from "@mui/material"
import bgImage from "../../public/book image/livres-a-lire-CRPE-2022.jpg"
import axios from "axios"


const myStyle = {
    paper: {
        backgroundImage: `url(${bgImage.src})`,
        width: '212,1vh',
        height: '100vh'
    },
    gridConatiner: {
        backgroundColor: "#F0F0F2",
        borderRadius: "8px",
        marginTop: "3%",
        padding: "2%",
    },
}




function AddSheet () {

    const [isbn, setIsbn] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [pbDate, setPbDate] = useState("")
    const [nbPage, setNbPage] = useState("")
    const [price, setPrice] = useState("")
    const [bkInStck, setBkInStck] = useState("")

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
            isbn, title, desc, author, genre, pbDate, nbPage, price, bkInStck
        }
        console.log(formData)
        try {
            const { data } = await axios({
                method: "POST",
                url: "/api/addsheet",
                data: formData
            })
            if (data.message) {
                window.alert(data.message)
                window.location.replace('/')
                console.log(data)
            } else {
                document.getElementById("test").innerHTML = data.error
            }
        } catch (err) {
            console.log({error: err})
        }
    }
    
    return (

        <Grid2 container md={10} mdOffset={0.8} rowGap={4} sx={myStyle.gridConatiner} 
            justifyContent="space-evenly" alignItems="center" direction="column"
        >
            <Grid item>
                <Typography variant="h3" >
                    Create a new Sheet
                </Typography>
            </Grid>

            <Grid container  rowGap={3} >
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid >
                        <TextField
                            required
                            fullWidth
                            type="input"
                            id="demo-helper-text-aligned"
                            label="isbn"
                            name="isbn" 
                            onChange={ e => setIsbn(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            required
                            fullWidth
                            type="input"
                            id="demo-helper-text-aligned"
                            label="Title"
                            name="title" 
                            onChange={ e => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            fullWidth
                            required
                            id="demo-helper-text-aligned"
                            label="Description"
                            name="description"
                            type="input" 
                            onChange={ e => setDesc(e.target.value)}
                        />
                    </Grid>
                </Grid>


                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid >
                        <TextField
                            required
                            fullWidth
                            type="input"
                            id="demo-helper-text-aligned"
                            label="Author"
                            name="author" 
                            onChange={ e => setAuthor(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            required
                            fullWidth
                            type="input"
                            id="demo-helper-text-aligned"
                            label="Genre"
                            name="genre" 
                            onChange={ e => setGenre(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            fullWidth
                            focused
                            required
                            id="demo-helper-text-aligned"
                            label="Publication date"
                            name="publication date"
                            type="date" 
                            onChange={ e => setPbDate(e.target.value)}
                        />
                    </Grid>
                </Grid>


                <Grid container direction="row" justifyContent="space-between" alignItems="center"  >
                    <Grid >
                        <TextField
                            fullWidth
                            required
                            type="input"
                            id="demo-helper-text-aligned"
                            label="Number of pages"
                            name="number of pages" 
                            onChange={ e => setNbPage(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            required
                            fullWidth
                            type="input"
                            id="demo-helper-text-aligned"
                            label="Price"
                            name="price" 
                            onChange={ e => setPrice(e.target.value)}
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            fullWidth
                            required
                            id="demo-helper-text-aligned"
                            label="Book in stock"
                            name="book in stock"
                            type="input" 
                            onChange={ e => setBkInStck(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Button  variant="contained" type="submit" onClick={handleSubmit} > Create sheet </Button>
            </Grid> 
             
             <Typography id="test"></Typography>
        </Grid2>
    )
}
export default AddSheet