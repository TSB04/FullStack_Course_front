import * as React from "react"
import { useState, useEffect } from "react"
import { Box  } from "@mui/material"
import bgImage from "../public/book image/thumb-1920-26102.jpg"
import BookCard from "../components/Card/Card.component"

const myStyle = {
    paper: {
      backgroundImage: `url(${bgImage.src})`,
      width: '212,1vh',
      
    },
    container: {
    }
}

    
function Home () {
    let [ book, setBook ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4898/api/books/all')
        .then(response => response.json())
        .then(data => setBook(data))
    },[])


    return (  
        <Box style={myStyle.container}>
            {book && book.map(row => <BookCard 
            key={row.isbn} title={row.title} author={row.author}
            genre={row.genre} desc={row.desc} nbPage={row.nbPage}
            bkInStck={row.bkInStck} price={row.price.$numberDecimal}/>)}
            
        </Box>        
    )
}

export default Home