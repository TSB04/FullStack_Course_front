import * as React from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import axios from "axios"


const myStyle = {
    gridConatiner: {
        backgroundColor: "#F0F0F2",
        borderRadius: "8px",
        padding: "0.5% 2%",
        height: "max-content",
        marginTop: "1%"
    },
}

function UpdateSheet() {

    // const [helperText, setHelperText] = React.useState({
    //     isbn:"Please enter the book's isbn",
    //     title: "Please enter the book's title",
    //     desc: "Please enter the book's description",
    //     author: "Please enter the book's author",
    //     genre: "Please enter the book's genre",
    //     pbDate: "Please enter the book's publication date",
    //     nbPage: "Please enter the number of book pages",
    //     price: "Please enter the book's price",
    //     bkInStck: "Please enter the number of books in your stock"
    // })
    // const [error, setError] = React.useState({
    //     isbn: false,
    //     title: false,
    //     desc: false,
    //     author: false,
    //     genre: false,
    //     pbDate: false,
    //     nbPage: false,
    //     price: false,
    //     bkInStck: false,
    // })
    
const [inputs, setInputs] = React.useState({
    isbn: {
        input: sessionStorage.getItem("isbn"),
        helperText: "The book's isbn cannot be change",
        error: false
    },
    // title: {
    //     input: sessionStorage.getItem("title"),
    //     helperText: "Enter value to change the book's title",
    //     error: false
    // },
    // desc: {
    //     input: sessionStorage.getItem("desc"),
    //     helperText: "Enter value to change the book's description",
    //     error: false
    // },
    // author: {
    //     input: sessionStorage.getItem("author"),
    //     helperText: "Enter value to change the book's author",
    //     error: false
    // },
    // genre: {
    //     input: sessionStorage.getItem("genre"),
    //     helperText: "Enter value to change the book's genre",
    //     error: false
    // },
    // pbDate: {
    //     input: sessionStorage.getItem("pbDate"),
    //     helperText: "Enter value to change the book's publication date",
    //     error: false
    // },
    // nbPage: {
    //     input: sessionStorage.getItem("nbPage"),
    //     helperText: "Enter value to change the number of book pages",
    //     error: false
    // },
    // price: {
    //     input: sessionStorage.getItem("price"),
    //     helperText: "Enter value to change the book's price",
    //     error: false
    // },
    // bkInStck: {
    //     input: sessionStorage.getItem("bkInStck"),
    //     helperText: "Enter value to change the number of books in your stock",
    //     error: false
    // }
})

    React.useEffect(() => {
        const selectedCardIsbn = sessionStorage.getItem("isbn")
        const param = {isbn: selectedCardIsbn}
        const getCardToUpdate = async () => {
            try {
                const { data } = await axios ({
                    method: "POST",
                    url: "/api/getsheet",
                    data: param
                })
                const  value = Object.values(data[0])
                const name = Object.keys(data[0])

                console.log(inputs)
            } catch (err) {
                console.log({error: err})
            }
        }
        getCardToUpdate()

    }, [])

    const [error0, setError0] = React.useState("")
    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setInputs(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // }
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     console.log("hello")
    //     try {
    //         const { data } = await axios({
    //             method: "POST",
    //             url: "/api/addsheet",
    //             data: inputs
    //         })
    //         setError0("")
    //         if (data.message) {
    //             window.alert(data.message)
    //             window.location.replace('/')
    //         } else if (data.error === 0) {
    //             setError0("You must log in to create a sheet !!")
    //         } else if(data) {

    //             //...working in progress, all inputs must behave this way without repeating this code each time
    //             if(data.isbn) {
    //                 setHelperText({...helperText, isbn: data.isbn.message})
    //                 setError({...error, isbn: true})
    //             } else {
    //                 setHelperText({...helperText, isbn: null})
    //                 setError({...error, isbn: false})
    //             }
    //         }        
    //     } catch (err) {
    //         console.log({error: err})
    //     }
    // }
    
    return (

        <Grid2 container xs md={9} mdOffset={-1} rowGap={1} sx={myStyle.gridConatiner} 
            justifyContent="space-evenly" alignItems="center" direction="column"
        >
            <Grid item>
                <Typography variant="h3" >
                    Update Sheet
                </Typography>
            </Grid>

            {/* <Grid container  rowGap={3} >
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-read-only-input"
                            label="isbn"
                            name="isbn"
                            value={inputs.isbn.input}
                            error={inputs.isbn.error}
                            helperText={inputs.isbn.helperText} 
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Title"
                            name="title"
                            defaultValue={inputs.title.input} 
                            error={inputs.title.error}
                            helperText={inputs.title.helperText} 
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Author"
                            name="author" 
                            defaultValue={inputs.author.input} 
                            error={inputs.author.error}
                            helperText={inputs.author.helperText} 
                        />
                    </Grid>
                </Grid>
  
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid>
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Genre"
                            name="genre"
                            defaultValue={inputs.genre.input}  
                            error={inputs.genre.error}
                            helperText={inputs.genre.helperText} 
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Number of pages"
                            name="nbPage"
                            defaultValue={inputs.nbPage.input} 
                            error={inputs.nbPage.error}
                            helperText={inputs.nbPage.helperText}  
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            focused
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Publication date"
                            name="pbDate"
                            defaultValue={inputs.pbDate.input} 
                            error={inputs.pbDate.error}
                            helperText={inputs.pbDate.helperText}  
                        />
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="space-evenly" alignItems="center"  >
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Price"
                            name="price"
                            defaultValue={inputs.price.input} 
                            error={inputs.price.error} 
                            helperText={inputs.price.helperText} 
                        />
                    </Grid>
                    <Grid >
                        <TextField
                            variant="standard"
                            size="small"
                            id="standard-helperText"
                            label="Book in stock"
                            name="bkInStck"
                            defaultValue={inputs.bkInStck.input} 
                            error={inputs.bkInStck.error}
                            helperText={inputs.bkInStck.helperText}  
                        />
                    </Grid>
                </Grid>
            </Grid> 
            <Grid2 container xs md={8.5} maxHeight="30vh"  marginTop="2vh" >
                <TextField
                    multiline
                    required
                    maxRows={8}
                    sx={{width: "100%", height: "80%"}}
                    variant="standard"
                    id="standard-helperText"
                    label="Description"
                    name="desc"
                    defaultValue={inputs.desc.input} 
                    error={inputs.desc.error}
                    helperText={inputs.desc.helperText} 
                />
            </Grid2> */}

            <Grid item>
                <Button  variant="contained" type="submit"> Update </Button>
            </Grid> 
            <Link href="/login" underline="hover" color="primary">
                <Typography color="primary">{error0}</Typography>
            </Link> 
        </Grid2>
    )
}
export default UpdateSheet