import * as React from "react"
import { useState, useEffect } from "react"
import BookCard from "../../components/Card/Card.component"
import { Box, Grid, Typography } from "@mui/material"
import axios from "axios"

const myStyle = {
    padding: "2% 0 0 0.8%",
    position: "absolute",
    left: "13.3%",
    width: "86.7%",
}

function MySheets() {

    let [mySheets, setMySheets] = useState()
    const [error0, setError0 ] = useState("")

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios ({
            url: "/api/mysheets"
        })
        setError0("")
        if(data.error === 0) {
            setError0("You must login to access to your sheets")
            console.log(data.error)
        } else {
            setMySheets(data)
            setError0("")
        }
    }
        fetchData()
    },[])
    
    return(
        <Box sx={myStyle}>
            <Typography variant="h1" color="#FFFF">{error0}</Typography>
            {mySheets && mySheets.map(row =>
                <BookCard 
                    key={row.isbn} title={row.title} author={row.author}
                    genre={row.genre} desc={row.desc} nbPage={row.nbPage}
                    bkInStck={row.bkInStck} price={row.price.$numberDecimal}
                />)
            }
        </Box> 
    )
}

export default MySheets