import * as React from "react"
import { useState, useEffect } from "react"
import { Box  } from "@mui/material"
import bgImage from "../public/book image/thumb-1920-26102.jpg"
import BookCard from "../components/Card/Card.component"

const myStyle = {
    padding: "2% 0 0 0.8%",
    position: "absolute",
    left: "13.3%",
    width: "86.7%",
}

    
function Home () {
    let [ sheets, setSheets ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4898/api/books/all')
        .then(response => response.json())
        .then(data => {setSheets(data),
        console.log(data)})
    },[])

    return (  
        <Box style={myStyle}>
            {sheets && sheets.map(row => <BookCard 
            key={row.isbn} title={row.title} author={row.author}
            genre={row.genre} desc={row.desc} nbPage={row.nbPage}
            bkInStck={row.bkInStck} price={row.price.$numberDecimal}/>)}
        </Box>        
    )
}

export default Home