import * as React from "react"
import axios from "axios"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Button, Grid, Typography } from "@mui/material"

const myStyle = {
    gridConatiner: {
        backgroundColor: "#F0F0F2",
        borderRadius: "8px",
        padding: "0.5% 2%",
        height: "max-content",
        marginTop: "2%"
    },
}

function DeleteSheet() {
    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            const formData={isbn: sessionStorage.getItem("isbn")}
            const { data } = await axios ({
                method: "DELETE",
                url: "/api/deletesheet",
                data: formData
        })
            if (data.message) {
                window.alert(data.message)
                window.location.replace("/")
            }
        } catch (err) {
            console.log({error: err})
        }
    }
    return(
        <Grid2 container xs md={9} mdOffset={-1} rowGap={4} sx={myStyle.gridConatiner} 
            justifyContent="space-evenly" alignItems="center" direction="column"
        >        
        <Typography variant="warning">Note: Deleting the sheet is irreversible</Typography>
        <Typography variant="h4">Please confirm the deletion of the sheet</Typography>

        <Grid container justifyContent="center" columnGap={4}>
            <Button variant="contained" sx={myStyle.non}>Non</Button>
            <Button variant="contained" sx={myStyle.yes} onClick={handleDelete}>Yes</Button>
        </Grid>
        </Grid2>
    )
}

export default DeleteSheet